/* eslint-disable */
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from 'react';
// import { trackAutoFill } from '../../../externals/amplitude';

/**
 * Hook to track Autofill in Amplitude
 *
 * @returns {{setAutofill: (value: (((prevState: boolean) => boolean) | boolean)) => void, autofill: boolean, trackAmplitudeAutofill: trackAmplitudeAutofill}}
 */
export const useAutofill = () => {
	const [autofill, setAutofill] = useState({
		used: false,
		status: false,
		dispatched: false,
		phone: '',
	});

	/**
	 * Track Amplitude event when autofill is used
	 *
	 * @param userValues
	 * @param status
	 */
	function trackAmplitudeAutofill (userValues, status) {
		// trackAutoFill({
		// 	'email': userValues.email,
		// 	'phone': userValues.phone,
		// 	'autofillPhone': userValues.autofillPhone,
		// }, status);
	};

	return {
		autofill,
		setAutofill,
		trackAmplitudeAutofill,
	};
};

/**
 * Autofill Sync Component
 *
 * @param values
 * @param autofill
 * @param setAutofill
 * @param trackAmplitudeAutofill
 * @param setAmplitudeEventChanged
 * @returns {null}
 * @constructor
 */
export const AutofillSync = ({
	values,
	autofill,
	setAutofill,
	trackAmplitudeAutofill,
}) => {

	useEffect(() => {
		if (!autofill.used) {
			return;
		}

		if (autofill.used && autofill.dispatched) {
			return;
		}

		setAutofill(autofill => ({
			...autofill,
			used: true,
			dispatched: true,
		}));

		trackAmplitudeAutofill({
			email: values.email,
			phone: values.phone,
			autofillPhone: autofill.phone,
		}, values.phone);
	
	}, [autofill, values, values.phone]);
	return null;
};
