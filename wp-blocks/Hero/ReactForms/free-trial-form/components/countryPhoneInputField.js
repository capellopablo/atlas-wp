import React, { useCallback } from 'react';
import InputPhone from '@aprende-com/design-system/components/InputPhone';
import { __ } from '@wordpress/i18n';
import {
	VALIDATION_STATES,
	isInvalidNumber,
	isInvalidUsCode,
	countryDialCode,
	getPhoneLength,
	getPhoneMaskLength,
} from '../../Components/phoneFieldHelpers';

const CountryPhoneInputField = (props) => {
	const {
		values,
		handleChange,
		handleBlur,
		setAmplitudeEventChanged,
		errors,
		touched,
		userCountry,
		setFieldValue,
		setUserCountry,
		setValidatePhone,
		autofill,
		setAutofill,
		setFieldTouched,
	} = props;

	/* Validations */
	const isValidPhone = (phone, userCountry) => {
		if (!phone || !userCountry) {
			return;
		}
		if (userCountry === 'us' && isInvalidNumber(phone)) {
			setValidatePhone(VALIDATION_STATES.INVALID_NUMBER);
			return;
		}
		if (userCountry === 'us' && isInvalidUsCode(phone)) {
			setValidatePhone(VALIDATION_STATES.INVALID_US_CODE);
			return;
		}
		setValidatePhone(getPhoneMaskLength(userCountry));
	};


	/* Country Handler */
	const handleChangeCountry = (code) => {
		setUserCountry(code);

		if (code !== userCountry && values?.phone) {
			values.phone = ''; // Reset phone value when country changes
		}

		if (code !== userCountry) { // Amplitude Country Changed Event
			setAmplitudeEventChanged({
				dataset: {
					aptEChanged: '1',
					aptKey: 'country',
				},
				tagName: 'SELECT',
			}, {
				type: 'select',
				value: code,
				label: __('País', 'aprende'),
			});
		}
	};

	/* Amplitude Event */
	const logAmplitudeEvent = useCallback((target) => {

		if (values.phone) {
			setAmplitudeEventChanged(target, {
				type: target?.type,
				value: values?.phone,
				label: __('Teléfono', 'aprende'),
			});
		}
	}, [values]);


	/* Phone Handler */
	const handleChangePhone = (e) => {
		handleChange(e);

		let phoneValue = e.target.value;
		phoneValue = phoneValue?.replace(/[^0-9]+/g, ''); // Remove non-numeric characters

		if (phoneValue.startsWith(countryDialCode[userCountry])) { 
			phoneValue = phoneValue.slice(countryDialCode[userCountry].length);
		}

		if (phoneValue.startsWith('0')) { // Remove leading zero if exists (default by chrome's autofill)
			phoneValue = phoneValue.substring(1);
		}

		let formattedPhoneValue = phoneValue;

		if (phoneValue.length > getPhoneMaskLength(userCountry)) { 
			formattedPhoneValue = phoneValue.substring(0, getPhoneMaskLength(userCountry));
		}

		setFieldValue('phone', formattedPhoneValue);
		setFieldValue('country', userCountry?.toUpperCase());
		setFieldTouched('phone', false, false);

		isValidPhone(formattedPhoneValue, userCountry);

		if (!autofill?.dispatched && (autofill.firstName || autofill.lastName || autofill.email)) {
			setAutofill(autofill => ({
				...autofill,
				used: true,
				phone: (formattedPhoneValue && autofill.phone) ? true : false,
				firstName: (values.firstName && autofill.firstName) ? true : false,
				lastName: (values.lastName && autofill.lastName) ? true : false,
				email: (values.email && autofill.email) ? true : false,
			}));
		}
	};

	/* OnBlur Handler */
	const handlePhoneBlur = (e) => {
		setAutofill({
			...autofill,
			phone: false,
		})
		handleBlur(e);
		logAmplitudeEvent(e.target);
	};

	const phoneInputProps = {
		'id': 'phone',
		'data-apt-key': 'phone',
		'data-apt-e-changed': '1',
		'data-country': userCountry,
	};

	return (
		<div className="c-input-phone_container" data-field="phone">
			<InputPhone
				dataInput={{...phoneInputProps}}
				country={userCountry}
				value={values.phone}
				errorText={errors.phone && touched.phone ? errors.phone : ''}
				error={!!(errors.phone && touched.phone)}
				onChange={handleChangePhone}
				onChangeCountry={(code) => handleChangeCountry(code)}
				onBlur={handlePhoneBlur}
				maxLength={getPhoneLength(userCountry)}
			/>
		</div>
	);
};

export default CountryPhoneInputField;
