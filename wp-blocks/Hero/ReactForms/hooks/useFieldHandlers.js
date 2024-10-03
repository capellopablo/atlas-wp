import { useState, useRef } from 'react';
import { __ } from '@wordpress/i18n';

/**
 * Custom hook for handling input events.
 * This hook also tracks if the user has interacted with the input field and triggers
 * events for Amplitude when certain conditions are met.
 *
 * @param {string} fieldName - The name of the field to track.
 * @param {string} label - The label of the field, used for Amplitude event data.
 * @param {function} handleChange - The function to handle the change event.
 * @param {function} handleBlur - The function to handle the blur event.
 * @param {function} setAmplitudeEventChanged - The function to trigger an Amplitude event.
 * @param {object} values - The current values of the form fields.
 * 
 * @returns {object} An object containing the event handlers: `onFocus`, `onChange`, and `onBlur`.
 */
export const useFieldHandlers = (fieldName, label, handleChange, handleBlur, setAmplitudeEventChanged, values) => {
	const [isUserFocused, setIsUserFocused] = useState(false);
	const initialFieldValue = useRef(values[fieldName]);

	const onFocus = () => {
		setIsUserFocused(true);
		initialFieldValue.current = values[fieldName]; 
	};

	const onChange = (e) => {
		handleChange(e);
		
		if (!isUserFocused && e.target.value) {
			setAmplitudeEventChanged(e.target, {
				type: e.target.type,
				value: e.target.value,
				label: __(label, 'aprende'),
			});
		}
	};

	const onBlur = (e) => {
		handleBlur(e);
		setIsUserFocused(false);

		let fieldValue = e.target.value;

		if (isUserFocused && fieldValue && (fieldValue !== initialFieldValue.current)) {
			setAmplitudeEventChanged(e.target, {
				type: e.target.type,
				value: fieldValue,
				label: __(label, 'aprende'),
			});
		}
	};

	return { onFocus, onChange, onBlur };
};
