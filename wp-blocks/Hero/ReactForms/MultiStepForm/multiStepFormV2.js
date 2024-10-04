// React
/* eslint-disable */
/** External dependencies */
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import _get from 'lodash/get';
import _omit from 'lodash/omit';
import _difference from 'lodash/difference';
import { Formik } from 'formik';
import { __ } from '@wordpress/i18n';

/** Components */
import Terms from '../Components/termsConditions';
import CustomFields from './customFields';
import ThankYouMessage from './thankYouMessage';
import Heading from './heading';
import HoneypotFields from '../honeypot/index';
import FirstNameField from './firstNameField';
import LastNameField from './lastNameField';
import EmailField from './emailField';
import CountryPhoneField from './countryPhoneInputField';
import AreaOfInterestField from './areaOfInterest/index';
import OptInWhatsAppField from './optInWhatsAppField';
import NightleadConsentField from './nightleadConsentField';
import {
	honeypotEnabled,
	extractHoneypotValues,
	honeypotRedirectURL,
} from '../honeypot/helpers';

/** DS Components */
import Button from '@aprende-com/design-system/components/Button';

/** Utils */
import {
	recordTypeValues,
	hasJourney,
	getCookie,
	setCookie,
	setElementAttributes,
	setCookieExpireInMinutes,
} from '../../../utils';
import { formValidations } from './validations';
import {
	addToCartReturnURL,
	gtmEventProps,
	gtmEvents,
	trackViewContent,
} from '../Components/gtmAddToCart';
// import { amplitudeElementEvent, amplitudeUserProps, eventPageProps } from '../../../externals/amplitude';
import {
	referrerBaseURL,
	sanitizeValue,
	leadSourceField,
	getAreaOfInterestValue,
} from '../Components/helpers';
import { processLead } from '../../utils/processLead';

/** Api */
import api from '../../../services/index';

/** Hooks */
import { useAutofill, AutofillSync } from '../hooks/useAutofill';
import { useIP } from '../hooks/useIP';
import {
	useAjaxGetSanitizedLeadEmail,
} from '../hooks/useAjaxGetSanitizedLeadEmail';
// import { trackVWOFormSubmitted, getVWOExperiment } from '../../../externals/vwo';
import useUTMParams from '../hooks/useUTMParams';
// import { useAutofillReferralsEmail } from '../hooks/useAutofillReferralsEmail';
/* eslint-disable */

const MultiStepFormV2 = ({settings}) => {
	const [formSettings] = useState(JSON.parse(settings));
	const [formFields] = useState(formSettings.steps);
	const [currentStep, setCurrentStep] = useState(0);
	const [transition, setTransition] = useState(false);
	const ipAddress = useIP();
	const [userCountry, setUserCountry] = useState('US');
	const salesforce = formSettings.store.salesforce;
	const exactTarget = formSettings.store.exact_target;
	const dataExtension = exactTarget && formSettings.store.data_extension;
	const excludeFromCampaignsField = formSettings?.exclude_from_campaigns?.toString() ?? 'false';

	const amplitudeDeviceID = '';
	const amplitudeSessionID = '';

	const presetFields = formFields[currentStep]?.fields?.presets;

	const [userValues, setUserValues] = useState({
		email: '',
		firstName: '',
		lastName: '',
		phone: '',
		country: '',
		company: 'Aprende',
		RecordTypeId: recordTypeValues?.[formSettings.record_type],
		area_of_interest: getAreaOfInterestValue(presetFields),
		School_of_interest: '',
		OptInWhatsApp: 'false',
		is_phone_mobile: 'true',
		referrer: (referrerBaseURL())?.toLowerCase(),
		page_url: 'https://qa.aprende.dev/landing/rmkt-cursos-latam/',
		//user_agent: navigator.userAgent,
		leadSource: leadSourceField,
	});

	const [userPhone, setUserPhone] = useState('');
	const [showNightleadConsent, setShowNightleadConsent] = useState(false);
	const enableAfterHourLeads = true;
	const honeypotInputsRef = useRef({}); // Honeypot feature
	const [validateAllFields, setValidateAllFields] = useState(false);
	const sanitizeEmailEnabled = '0';

	useEffect(() => {
		setUserPhone({phone: userPhone});
	}, []);

	/** Autofill */
	const {
		autofill,
		setAutofill,
		trackAmplitudeAutofill,
	} = useAutofill();

	/** Cookies */
	const [cookies, setCookies] = useState({});
	const utmParams = useUTMParams();

	useEffect(() => {
		setCookies(utmParams);
	}, [utmParams]);


	/** Track View Content Event */
	trackViewContent(userValues);


	const [validatePhone, setValidatePhone] = useState('');

	const requiredMessage = 'Este campo es requerido';

	const setUserCookies = (userValues) => {
		// First Name
		if (userValues?.firstName) {
			setCookie('AprendeForm_firstName', userValues.firstName, 30);
		}
		// Last Name
		if (userValues?.lastName) {
			setCookie('AprendeForm_lastName', userValues.lastName, 30);
		}
		// Email
		if (userValues?.email) {
			setCookie('AprendeForm_email', userValues.email, 30);
		}
		// Phone
		if (userValues?.phone) {
			setCookie('AprendeForm_phone', userValues.phone, 30);
		}
		// Country
		if (userValues?.country) {
			setCookie('AprendeForm_country', userValues.country, 30);
		}
		const urlWithoutParameters = window.location.protocol + '//' + window.location.host + window.location.pathname;
		setCookie('AprendeForm_URL', urlWithoutParameters, 30);

		if (!showNightleadConsent || userValues?.after_hour_consent !== 'true') {
			setCookieExpireInMinutes('AprendeForm_process', true, 5);
		}
	};

	const [salesforceFields, setSalesforceFields] = useState([]);

	let setFields;

	if (formFields[currentStep].fields.presets.includes('custom_field')) {
		const customCurrentField = formFields[currentStep].fields.custom;
		const getSfFields = Object.values(
			window?.aprende21.settings.modules.salesforce_settings.supported_fields,
		);
		const getCustomFields =
			formFields[currentStep].fields.presets.includes('custom_field') &&
			customCurrentField.map((field) => {
				return field.name;
			});
		setFields = _difference(getCustomFields, getSfFields);
	}

	const getSalesforceFields = () => {
		if (formFields[currentStep].fields.presets.includes('custom_field')) {
			let fields = setFields.map((field) => {
				return field;
			});
			setSalesforceFields(fields);
		}
	};

	useEffect(() => {
		getSalesforceFields();
	}, []);

	let filterValue = {};
	salesforceFields.map((item) => (filterValue[item] = item));

	/** Amplitude FormSubmitted & StepSubmitted Data */
	const amplitudeSubmittedData = (userValues, honeypotDetected) => {

		let conversionType =
			userValues.firstName &&
			userValues.lastName &&
			userValues.phone &&
			userValues.country &&
			userValues.area_of_interest ? 'lead' : 'mql';

		const data = {
			userEmail: userValues.email,
			areaOfInterest: userValues.area_of_interest,
			element: {
				leadForm: 'multiSteps',
			},
			tracking: {
				utm_source: cookies?.utm_source,
				utm_medium: cookies?.utm_medium,
				utm_content: cookies?.utm_content,
				utm_campaign: cookies?.utm_campaign,
				utm_term: cookies?.utm_term,
				device: cookies?.device,
				ad_position: cookies?.ad_position,
				adgroupid: cookies?.adgroupid,
				ad_id: cookies?.ad_id,
				match_type: cookies?.match_type,
				network: cookies?.network,
				referrer: (userValues.referrer)?.toLowerCase(),
				landingPage: (cookies.landing_page)?.toLowerCase(),
				landing_page_date: getCookie('landing_page_date'), // Cookie set in landingTraceability.js
				landing_page_count: cookies.landing_page_count,
				conversionType: conversionType,
				recordType: formSettings?.record_type,
				HasJourney: hasJourney,
				gclid: cookies.gclid,
				website_client_ID: cookies.website_client_ID,
				facebook_fbp: cookies.facebook_fbp,
				facebook_fbc: cookies.facebook_fbc,
				ip_address: ipAddress,
				// experiment: getVWOExperiment(),
				...honeypotDetected && {honeypot: 1}, // Honeypot feature
			},
		};

		return data;
	};

	/** Track Amplitude FormSubmitted Event */
	const setAmplitudeFormSubmitted = (userValues, honeypotDetected, callback = null) => {

		const formSubmitted = new CustomEvent('MultiStepFormSubmitted', {
			detail: {
				...amplitudeSubmittedData(userValues, honeypotDetected),
				callback: callback,
			},
		});

		document.dispatchEvent(formSubmitted);
	};

	/** Handle Next Steps */
	const [hideFrom, setHideFrom] = useState(false);

	const amplitudeFormButtonProps = {
		'data-apt-e-stepsubmitted': '1',
		'data-apt-key': 'buttonStepSubmitted',
	};

	// const submitButton = document.getElementById('formSubmitButton');

	/*const handleContinueButton = (userValues) => {

		/!** Set Amplitude StepSubmitted Event *!/
		if (submitButton && amplitudeFormButtonProps) {
			// amplitudeElementEvent(submitButton, {
			// 	...eventPageProps({
			// 		userEmail: userValues.email,
			// 		areaOfInterest: userValues.area_of_interest,
			// 	}),
			// 	element: {
			// 		...amplitudeSubmittedData(userValues).element,
			// 		currentStep: currentStep + 1,
			// 		totalSteps: formFields.length,
			// 	},
			// 	tracking: amplitudeSubmittedData(userValues).tracking
			// },'Stepsubmitted');
		}

		/!** Handle Next Step *!/
		setTransition(true);
		setTimeout(() => {
			setCurrentStep(currentStep + 1);
		}, 700);
		setTimeout(() => {
			setTransition(false);
		}, 2800);
	};*/


	/** Handle Redirect / Message Actions */
	const [disabledSubmit, setDisabledSubmit] = useState(false);

	const showNightleadOptions = (value) => {
		let emptyNightleadKey = !value?.after_hour_consent || value?.after_hour_consent === 'false';

		if (enableAfterHourLeads && showNightleadConsent && emptyNightleadKey) {
			return '&hour_call_options=true';
		}

		return '';
	};

	const handleSubmitButton = (userValues) => {
		// trackVWOFormSubmitted();

		const {honeypotDetected} = extractHoneypotValues(honeypotInputsRef); // Honeypot feature

		setAmplitudeFormSubmitted(userValues, honeypotDetected, () => {
			if (formSettings.action === 'message') {
				setHideFrom(true);
			}

			setTimeout(() => {
				if (formSettings.action === 'redirect') {
					if (honeypotDetected) {
						window.location = honeypotRedirectURL;
					} else {
						window.location = addToCartReturnURL(formSettings.return_url, userValues.area_of_interest) + showNightleadOptions(userValues);
					}
				}
			}, 800);
		});

		setDisabledSubmit(true);
	};

	const getLeadPayload = (userValues, cookies, hasJourney, ipAddress, amplitudeDeviceID, amplitudeSessionID) => {
		return {
			phone: userValues.phone,
			...cookies,
			Has_Journey: hasJourney,
			ip_address: ipAddress,
			amplitude_device_id: amplitudeDeviceID,
			amplitude_session_id: amplitudeSessionID,
		};
	};

	const getOmittedUserValues = (values, omitKeys) => {
		return _omit(values, ...omitKeys);
	};

	const getSanitizedValues = (values) => {
		return {
			firstName: sanitizeValue(values?.firstName),
			lastName: sanitizeValue(values?.lastName),
		};
	};

	/**
	 * Get Salesforce Values
	 *
	 * @param clearedValues
	 * @param values
	 * @param omitKeys
	 * @returns {*|null}
	 */
	const getSalesforceValues = (clearedValues, values, omitKeys) => {
		if (!salesforce) {
			return null;
		}

		const salesforceValues = {
			...clearedValues,
			...getOmittedUserValues(values, omitKeys),
		};

		// const experiment = getVWOExperiment();
		//
		// if (experiment?.experimentId && experiment?.variationId) {
		// 	salesforceValues.optimize_variation = `${experiment.experimentId}-${experiment.variationId}`;
		// }

		return salesforceValues;
	};

	const getExactTargetValues = (clearedValues, values, omitKeys) => {
		if (!exactTarget) {
			return null;
		}
		return {
			...clearedValues,
			...getOmittedUserValues(values, omitKeys),
		};
	};


	/** Handle Submit Form to Salesforce & Exact Target */
	const handleSubmitForm = async (userValues) => {
		try {
			const _userValues = showNightleadConsent ? userValues : _omit(userValues, 'after_hour_consent');
			const clearedValues = getSanitizedValues(userValues);

			const commonOmitKeys = ['phone', 'firstName', 'lastName'];
			const salesforceOmitKeys = [...Object.keys(filterValue), ...commonOmitKeys];

			const salesforceValues = getSalesforceValues(clearedValues, _userValues, salesforceOmitKeys);
			const exactTargetValues = getExactTargetValues(clearedValues, _userValues, commonOmitKeys);

			let payload = {
				email: _userValues.email,
				lead: getLeadPayload(userValues, cookies, hasJourney, ipAddress, amplitudeDeviceID, amplitudeSessionID),
				salesforce_data: {
					...salesforceValues,
					exclude_from_campaigns: excludeFromCampaignsField,
					// todo: Remove and move to the backend
					shouldUpdate: false,
				},
				exacttarget_data: {...exactTargetValues},
				data_extension: dataExtension,
				is_multistep: formFields.length > 1,
				steps_total: formFields.length,
				steps_last: currentStep + 1,
			};

			/** Honeypot feature */
			const {
				honeypotDetected,
				honeypotValues,
			} = extractHoneypotValues(honeypotInputsRef);

			if (honeypotDetected) {
				payload = {
					...payload,
					set_status: 'paused',
					meta_data: {
						honeypot: 1,
						honeypot_data: {...honeypotValues},
					},
				};

			}

			//await api.postLead({...payload});
			if (showNightleadConsent && _userValues?.after_hour_consent === 'true' && !honeypotDetected) {
				//await processLead(_userValues.email);
			}

			/** Push GTM events */

			if (formSettings.action === 'message') {
				gtmEvents('IsConverted', gtmEventProps(userValues.area_of_interest));
			}

		} catch (error) {
			console.log('Services', error);
		}
	};

	const setAmplitudeEventChanged = (element, props) => {
		// amplitudeElementEvent(element, props, 'Changed');

		const elementProps = {
			'data-el-changed': '1',
		};

		if (!element?.setAttributes) {
			return;
		}
		setElementAttributes(element, elementProps);
	};


	return (
		<>
			{!hideFrom ? (
				<div className="r-lead-form p-m bg-white">

					<Heading
						formSettings={formSettings}
						currentStep={currentStep}
						formFields={formFields}/>

					<Formik
						initialValues={userValues}
						validate={(userValues) => {
							const errors = {};
							formValidations(
								formFields,
								currentStep,
								userValues,
								errors,
								validatePhone,
								requiredMessage,
								validateAllFields,
							);
							return errors;
						}}
						validateOnMount={false}
						validateOnChange={true}
						onSubmit={async (_userValues) => {
							let userEmail = _userValues.email;

							if (sanitizeEmailEnabled && sanitizeEmailEnabled === '1') {
								userEmail = await useAjaxGetSanitizedLeadEmail(_userValues.email);
							}

							const userValues = {
								..._userValues,
								email: userEmail,
							};

							setUserValues(userValues);
							setUserCookies(userValues);

							if (currentStep < formFields.length - 1) {
								// handleContinueButton(userValues);
							} else {
								handleSubmitButton(userValues);
							}
							handleSubmitForm(userValues);
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
						}) => {

							const commonFieldProps = {
								values,
								handleChange,
								handleBlur,
								setAmplitudeEventChanged,
								errors,
								touched,
								formFields,
								currentStep,
								autofill,
								setAutofill,
								userValues,
							};

							return (
								<form
									onSubmit={handleSubmit}
									id="multiStepForm"
									name="multiStepForm"
									data-dataextension={dataExtension}
									className={`r-form-container ${transition ? 'form-animate' : ''}`}>

									<AutofillSync
										values={values}
										autofill={autofill}
										setAutofill={setAutofill}
										trackAmplitudeAutofill={trackAmplitudeAutofill}
									/>

									<div className="r-form-content">

										{honeypotEnabled === '1' && (
											<HoneypotFields
												honeypotInputsRef={honeypotInputsRef}/>
										)}

										{/* Standard Fields */}
										<FirstNameField {...commonFieldProps} />

										<LastNameField {...commonFieldProps} />

										<EmailField
											{...commonFieldProps}
											sanitizeEmailEnabled={sanitizeEmailEnabled}/>

										<CountryPhoneField
											{...commonFieldProps}
											userCountry={userCountry}
											setFieldValue={setFieldValue}
											setUserCountry={setUserCountry}
											setValidatePhone={setValidatePhone}
											setShowNightleadConsent={setShowNightleadConsent}
											autofill={autofill}
											setAutofill={setAutofill}
											setFieldTouched={setFieldTouched}/>

										<AreaOfInterestField
											{...commonFieldProps}
											formSettings={formSettings}
											setFieldValue={setFieldValue}/>

										{/* Custom Fields */}
										{presetFields.includes('custom_field') && (
											<CustomFields
												values={values}
												formFields={formFields}
												currentStep={currentStep}
												setFieldValue={setFieldValue}
												errors={errors}
												handleBlur={handleBlur}
												handleChange={handleChange}/>
										)}
									</div>

									{/* Nightlead Consent Field */}
									{presetFields.includes('country_phone') && enableAfterHourLeads && showNightleadConsent && (
										<NightleadConsentField
											values={values}
											formSettings={formSettings}
											setFieldValue={setFieldValue}
											setAmplitudeEventChanged={setAmplitudeEventChanged}/>
									)}

									{/* OptIn WhatsApp Field */}
									{formSettings.whatsapp_optin && presetFields.includes('country_phone') && (
										<OptInWhatsAppField
											values={values}
											formSettings={formSettings}
											setFieldValue={setFieldValue}
											setAmplitudeEventChanged={setAmplitudeEventChanged}/>
									)}

									<Button
										id="formSubmitButton"
										type="submit"
										size="lg"
										className="r-lead-form_submit mt-m mb-m justify-center"
										disabled={disabledSubmit}
										{...amplitudeFormButtonProps}
										onClick={() => setValidateAllFields(true)}
									>
										{formFields[currentStep].cta}
									</Button>
								</form>
							);
						}}
					</Formik>

					{formSettings.terms_and_conditions &&
					 <Terms
						 formFields={formFields}
						 formSettings={formSettings}
						 ctaValue={formFields?.[formFields?.length - 1]?.cta}
					 />
					}
				</div>
			) : (
				 <ThankYouMessage formSettings={formSettings}/>
			 )}

		</>
	);
};

// let msFormV2 = document.querySelectorAll('.r-lead-form_component');
//
// if (msFormV2) {
// 	msFormV2.forEach((multiStepFormV2) => {
// 		let settings = multiStepFormV2.getAttribute('data-settings');
// 		if (multiStepFormV2.classList.contains('r-form__has-skeleton-loader')) {
// 			const skeletonLoader = document.querySelector('.r-form_skeleton-loader');
// 			if (skeletonLoader) {
// 				skeletonLoader.remove();
// 				multiStepFormV2.classList.remove('r-form__has-skeleton-loader');
// 			}
// 		}
// 		ReactDOM.render(<MultiStepFormV2 settings={settings} />, multiStepFormV2);
// 	});
// }

export default MultiStepFormV2;
