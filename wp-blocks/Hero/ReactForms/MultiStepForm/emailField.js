import React from 'react';
import { __ } from '@wordpress/i18n';
import { useAjaxGetSanitizedLeadEmail } from '../hooks/useAjaxGetSanitizedLeadEmail';
import BaseField from './baseField';
import { useFieldHandlers } from '../hooks/useFieldHandlers';

const EmailField = ({
	values,
	handleChange,
	handleBlur,
	setAmplitudeEventChanged,
	errors,
	touched,
	formFields,
	currentStep,
	sanitizeEmailEnabled,
}) => {
	const includeEmail = formFields[currentStep]?.fields?.presets?.includes('email');
	const { onFocus, onChange, onBlur: onBaseBlur } = useFieldHandlers('email', 'Correo electrónico', handleChange, handleBlur, setAmplitudeEventChanged, values);

	const onBlur = async (e) => {
		handleBlur(e);
		onBaseBlur(e);

		let userEmail = values.email;
		if (sanitizeEmailEnabled && sanitizeEmailEnabled === '1') {
			userEmail = await useAjaxGetSanitizedLeadEmail(values.email);
		}
	};

	if (!includeEmail) {
		return null;
	}

	return (
		<BaseField
			id="email"
			type="email"
			name="email"
			label={__('Correo electrónico', 'aprende')}
			value={values.email}
			errorText={errors.email && touched.email ? errors.email : ''}
			error={!!(errors.email && touched.email)}
			onFocus={onFocus}
			onChange={onChange}
			onBlur={onBlur}
			dataInput={{
				'data-apt-e-changed': '1',
				'data-apt-key': 'email',
			}}
		/>
	);
};

export default EmailField;
