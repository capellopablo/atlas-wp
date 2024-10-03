import React, { useCallback, useState, useRef, useEffect } from 'react';
import InputPhone from '@aprende-com/design-system/components/InputPhone';
import { needsNightLeadConsent } from '../../../utils';
import { __ } from '@wordpress/i18n';
import {
	VALIDATION_STATES,
	isInvalidNumber,
	isInvalidUsCode,
	countryDialCode,
	getPhoneLength,
	getPhoneMaskLength,
} from '../Components/phoneFieldHelpers';

const CountryPhoneInputField = (props) => {
	const {
		values,
		handleChange,
		handleBlur,
		setAmplitudeEventChanged,
		errors,
		touched,
		formFields,
		currentStep,
		userCountry,
		setFieldValue,
		setUserCountry,
		setValidatePhone,
		setShowNightleadConsent,
		setAutofill,
		setFieldTouched,
	} = props;

	const includePhoneField = formFields[currentStep]?.fields?.presets?.includes('country_phone');
	const [isUserFocused, setIsUserFocused] = useState(false);
	const inputRef = useRef(null);
	const initialValueRef = useRef(values.phone);

	/* Amplitude autofill handler */
	useEffect(() => {
		const handleFocus = () => {
			setTimeout(() => {
				let currentValue = inputRef.current.value;
				currentValue = currentValue?.replace(/[^0-9]/g, '');

				initialValueRef.current = values.phone;

				if (initialValueRef.current !== '') {
					setIsUserFocused(true);
					setAutofill(autofill => ({
						...autofill,
						used: false,
						dispatched: false,
					}));
				} else if (currentValue) {
					setAmplitudeEventChanged(inputRef.current, {
						type: 'tel',
						value: currentValue,
						label: __('Teléfono', 'aprende'),
					});
					setAutofill(autofill => ({
						...autofill,
						used: true,
						phone: currentValue,
					}));
				}
			}, 0); // 0ms delay to ensure value is set
		};

		const inputElement = inputRef.current;
		if (inputElement) {
			inputElement.addEventListener('focus', handleFocus);
		}
		// Cleanup function to remove the event listener
		return () => {
			if (inputElement) {
				inputElement.removeEventListener('focus', handleFocus);
			}
		};
	}, [values, isUserFocused, initialValueRef.current]);

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

	/* Night Lead Consent */
	const isAfterHourLeads = (phone) => {
		let phoneWithDialCode = countryDialCode[userCountry] + phone;

		if (needsNightLeadConsent(phoneWithDialCode)) {
			setShowNightleadConsent(true);
		} else {
			setShowNightleadConsent(false);
		}
	};

	/* Country Handler */
	const handleChangeCountry = (code) => {
		setUserCountry(code);

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

			if (values.phone) {
				values.phone = ''; // Reset phone value when country changes
			}
		}
	};

	/* Amplitude Event */
	const logAmplitudeEvent = useCallback((target, value) => {
		if (value) {
			setAmplitudeEventChanged(target, {
				type: target?.type,
				value: value,
				label: __('Teléfono', 'aprende'),
			});
		}
	}, [values]);


	/* Phone Handler */
	const handleChangePhone = (e) => {
		handleChange(e);
		setIsUserFocused(true);

		let phoneValue = e.target.value;
		phoneValue = phoneValue?.replace(/[^0-9]+/g, ''); // Remove non-numeric characters

		if (phoneValue.startsWith(countryDialCode[userCountry])) { 
			phoneValue = phoneValue.slice(countryDialCode[userCountry].length);
		}

		if (phoneValue.startsWith('0')) { // Remove leading zero if exists (default by chrome's autofill)
			phoneValue = phoneValue.substring(1);
		}

		let updateValue = phoneValue;
		if (phoneValue.length > getPhoneMaskLength(userCountry)) { 
			updateValue = phoneValue.substring(0, getPhoneMaskLength(userCountry));
		}

		setFieldValue('phone', updateValue);
		setFieldValue('country', userCountry?.toUpperCase());
		setFieldTouched('phone', false, false);
		isAfterHourLeads(phoneValue);
		isValidPhone(phoneValue, userCountry);
	};

	/* OnBlur Handler */
	const handlePhoneBlur = (e) => {
		handleBlur(e);

		if (isUserFocused && values.phone && (values.phone !== initialValueRef.current)) {
			logAmplitudeEvent(e.target, values.phone);
		}
	};

	const phoneInputProps = {
		'id': 'phone',
		'data-apt-key': 'phone',
		'data-apt-e-changed': '1',
		'data-country': userCountry,
		'ref': inputRef,
	};

	if (!includePhoneField) {
		return null;
	}

	return (
		<div className="c-input-phone_container" data-field="phone">
			<InputPhone
				dataInput={{...phoneInputProps}}
				country={userCountry.toLowerCase()}
				value={values.phone}
				errorText={errors.phone && touched.phone ? errors.phone : ''}
				error={!!(errors.phone && touched.phone)}
				onChange={handleChangePhone}
				onChangeCountry={(code) => handleChangeCountry(code)}
				onBlur={handlePhoneBlur}
				maxLength={getPhoneLength(userCountry).toString()}
			/>
		</div>
	);
};

export default CountryPhoneInputField;
