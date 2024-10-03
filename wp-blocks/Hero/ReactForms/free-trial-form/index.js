// React
/* eslint-disable */
/** External dependencies */
import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { __ } from '@wordpress/i18n';

/** Components */
import FirstNameField from './components/firstNameField';
import LastNameField from './components/lastNameField';
import EmailField from './components/emailField';
import CountryPhoneField from './components/countryPhoneInputField';
import PasswordField from './components/passwordField';
import ConfirmPasswordField from './components/confirmPasswordField';
import OptInWhatsAppField from './components/optInWhatsAppField';
import Terms from './components/termsConditions';
import Button from '@aprende-com/design-system/components/Button';

/** Helpers & Hooks */
import useUTMParams from '../hooks/useUTMParams';
import { useAutofill, AutofillSync } from './useAutofill';
import { useIP } from '../hooks/useIP';
import { amplitudeElementEvent, amplitudeUserProps, trackFreeTrialSignedUp } from '../../../externals/amplitude';
import { formValidations } from './validations';
import { prepareFormPayload, registerStudent, updateStudent, handleEnrollment, amplitudeMoodleProps, getEnrollmentIdByDomain } from './helpers';

/** Endpoints */
import webhook from '../../../services/tray/index';
import api from '../../../services/moodle/index';

/**
 * FreeTrialForm component renders the free trial registration form and handles form submission.
 * 
 * @param {Object} props - The component properties.
 * @param {string} props.settings - The settings for the form in JSON string format.
 * @returns {JSX.Element} The FreeTrialForm component.
 */
const FreeTrialForm = ({ settings }) => {
	const [formSettings] = useState(JSON.parse(settings));
	const [userCountry, setUserCountry] = useState(window?.aprende21?.user?.country ?? 'US');
	const amplitudeDeviceID = amplitudeUserProps?.userDeviceID ?? '';
	const amplitudeSessionID = amplitudeUserProps?.userSessionID ?? '';
	const ipAddress = useIP();
	const recordTypeField = formSettings?.record_type ? (formSettings?.record_type) : '0125G000000Jp5a';

	const [formValues, setFormValues] = useState({
		email: '',
		firstName: '',
		lastName: '',
		phone: '',
		country: '',
		password: '',
		confirmPassword: '',
		OptInWhatsApp: 'true',
		RecordTypeId: recordTypeField,
	});

	/** Validations */
	const [validateAllFields, setValidateAllFields] = useState(false);
	const [validatePhone, setValidatePhone] = useState('');
	const [validatePasswords, setValidatePasswords] = useState(false);
	const [emailExist, setEmailExist] = useState(false);

	/** Cookies */
	const [cookies, setCookies] = useState({});
	const utmParams = useUTMParams();

	useEffect(() => {
		setCookies(utmParams);
	}, [utmParams]);

	/** Autofill */
	const {
		autofill,
		setAutofill,
		trackAmplitudeAutofill,
	} = useAutofill();

	/**
	 * Sets Amplitude event for the changed element.
	 * 
	 * @param {HTMLElement} element - The form element that changed.
	 * @param {Object} props - The properties to set for the event.
	 */
	const setAmplitudeEventChanged = (element, props) => {
		amplitudeElementEvent(element, props, 'Changed');

		const elementProps = {
			'data-el-changed': '1',
		};

		if (!element?.setAttributes) {
			return;
		}
		setElementAttributes(element, elementProps);
	};

	const [disabledSubmit, setDisabledSubmit] = useState(false);
	const [loadingSubmit, setLoadingSubmit] = useState(false);

	/**
	 * Handles form submission.
	 * 
	 * @param {Object} formValues - The values from the form.
	 */
	const handleSubmitForm = async (formValues) => {
		setLoadingSubmit(true);

		if (emailExist) {
			setLoadingSubmit(false);
			return; // Prevent form submission if email already exists
		}

		const isCustomFlow = formSettings?.use_custom_flow;
		const currentCartFlow = formSettings?.cart_flow;
		const integrationType = formSettings?.program_moodle_integration ?? formSettings?.moodle_integration_type;
		const isCustomIntegration = formSettings.program ? false : formSettings.moodle_integration;
		const currentEnrollmentID = getEnrollmentIdByDomain(formSettings, integrationType, isCustomIntegration);
		const freetrialType = isCustomFlow ? (currentCartFlow?.replace(/_/g, '')) : 'program';

		try {
			const payload = prepareFormPayload(formValues, ipAddress, amplitudeDeviceID, amplitudeSessionID, cookies, freetrialType, currentEnrollmentID, integrationType);

			await webhook.postFreetrialLead({ ...payload });

			const studentData = await registerStudent(formValues, api);
			const studentID = studentData?.results?.id;

			if (studentID) {
				await updateStudent(studentData, api, isCustomFlow, currentCartFlow);
				await handleEnrollment(studentData, formValues, formSettings, api);

				trackFreeTrialSignedUp(formValues.email, amplitudeMoodleProps(studentID, isCustomFlow, currentCartFlow, currentEnrollmentID, integrationType), freetrialType);
				initSSO(studentID);
			}

		} catch (error) {
			console.error(__('Free trial submit error: ', 'aprende'), error);
		} 
	};
	

	return (
		<Formik
			initialValues={formValues}
			validate={(formValues) => {
				const errors = {};
				formValidations(
					formValues,
					errors,
					validatePhone,
					validateAllFields,
					validatePasswords,
					emailExist,
				);
				return errors;
			}}
			validateOnMount={false}
			validateOnChange={true}
			onSubmit={(formValues) => {
				setFormValues(formValues);
				handleSubmitForm(formValues);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				setFieldValue,
				setFieldTouched,
				setFieldError,
			}) => {

				const commonFieldProps = {
					values,
					handleChange,
					handleBlur,
					setAmplitudeEventChanged,
					errors,
					touched,
					autofill,
					setFieldTouched,
					setFieldError,
					setAutofill,
				};
				return (
					<form
						onSubmit={handleSubmit}
						id="freeTrialForm"
						name="freeTrialForm"
						className={`r-form-container`}>

						<AutofillSync
							values={values}
							autofill={autofill}
							setAutofill={setAutofill}
							trackAmplitudeAutofill={trackAmplitudeAutofill}
							setAmplitudeEventChanged={setAmplitudeEventChanged}
						/>

						<div className="r-lead-form p-m bg-white">
							{formSettings?.title &&  (
								<h5 className="r-lead-form_heading sm ta-center mb-2xs">{formSettings.title}</h5>
							)}

							{formSettings?.subtitle &&  (
								<p className="text-m ta-center mb-m" dangerouslySetInnerHTML={{ __html: formSettings.subtitle }}></p>
							)}

							<FirstNameField {...commonFieldProps} />

							<LastNameField {...commonFieldProps} />

							<EmailField 
								{...commonFieldProps} 
								setEmailExist={setEmailExist} 
								setDisabledSubmit={setDisabledSubmit} />

							<CountryPhoneField 
								{...commonFieldProps}
								userCountry={userCountry}
								setFieldValue={setFieldValue}
								setUserCountry={setUserCountry}
								setValidatePhone={setValidatePhone}
								autofill={autofill}
								setAutofill={setAutofill}
								setFieldTouched={setFieldTouched} />

							<p className="c-input-title text-bold mt-xs mb-2xs">{__( 'Crea tu contraseña', 'aprende' )}</p>

							<PasswordField {...commonFieldProps} />

							<ConfirmPasswordField 
								{...commonFieldProps} 
								setValidatePasswords={setValidatePasswords} />

							<OptInWhatsAppField 
								values={values} 
								setFieldValue={setFieldValue}
								setAmplitudeEventChanged={setAmplitudeEventChanged} />

							{loadingSubmit ? (
								<Button
									size="lg"
									className="r-lead-form_submit mt-m mb-m justify-center"
									isLoading={true}
									iconLeft={'progress_animated'}
									iconViewbox={'0 0 24 24'}
								>
									{__('Creando cuenta', 'aprende')}
								</Button>
							) : (
								<Button
									id="freeTrialFormSubmitButton"
									type="submit"
									size="lg"
									className="r-lead-form_submit mt-m mb-m justify-center"
									disabled={disabledSubmit}
									onClick={() => setValidateAllFields(true)} 
								>
									{formSettings?.cta}
								</Button>
							)}

							<Terms ctaValue={formSettings?.cta}/>
						</div>
					</form>
				)
			}}
		</Formik>
	);
};

export const handleMount = (el) => {
	let form = el.querySelector('.r-free-trial_form');

	if (form) {
		let settings = form.getAttribute('data-settings');

		if (form.classList.contains('r-form__has-skeleton-loader')) {
			const skeletonLoader = el.querySelector('.r-form_skeleton-loader');

			if (skeletonLoader) {
				skeletonLoader.remove();
				form.classList.remove('r-form__has-skeleton-loader');
			}
		}
		ReactDOM.render(<FreeTrialForm settings={settings} />, el);
	}
};

export default FreeTrialForm;
