/* eslint-disable */
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from 'react';
import { trackAutoFill } from '../../../externals/amplitude';

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
		phone: true,
		firstName: true,
		lastName: true,
		email: true,
	});

	/**
	 * Track Amplitude event when autofill is used
	 *
	 * @param userValues
	 * @param status
	 */
	function trackAmplitudeAutofill (userValues, status) {
		trackAutoFill({
			'email': userValues.email,
			'phone': userValues.phone,
			'autofillPhone': userValues.autofillPhone,
		}, status);
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
	setAmplitudeEventChanged,
}) => {

	useEffect(() => {
		if (!autofill.used) {
			return;
		}

		if (autofill.used && autofill.dispatched) {
			return;
		}

		if (values.firstName && autofill.firstName) {
			const e = document.querySelector('[data-apt-key="firstName"]');
			setAmplitudeEventChanged(e, {
				type: e.type,
				value: values.firstName || values.first_name,
				label: __('Nombre', 'aprende'),
			});
		}

		if (values.lastName && autofill.lastName) {
			const e = document.querySelector('[data-apt-key="lastName"]');
			setAmplitudeEventChanged(e, {
				type: e.type,
				value: values.lastName || values.last_name,
				label: __('Apellido', 'aprende'),
			});
		}

		if (values.email && autofill.email) {
			const e = document.querySelector('[data-apt-key="email"]');
			setAmplitudeEventChanged(e, {
				type: e.type,
				value: values.email,
				label: __('Correo electrónico', 'aprende'),
			});
		}

		if (values.phone && autofill.phone) {
			const e = document.querySelector('[data-apt-key="phone"]');
			setAmplitudeEventChanged(e, {
				type: e.type,
				value: values.phone,
				label: __('Teléfono', 'aprende'),
			});
		}

		setAutofill(autofill => ({
			...autofill,
			dispatched: true,
		}));

		if (autofill.phone || autofill.email) {
			trackAmplitudeAutofill({
				email: values.email,
				phone: values.phone,
				autofillPhone: autofill.phone,
			}, values.phone);
		}
	}, [autofill, values, values.phone]);
	return null;
};
