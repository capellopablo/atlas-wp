import React from 'react';
import { __ } from '@wordpress/i18n';
import BaseField from './baseField';
import { useFieldHandlers } from '../hooks/useFieldHandlers';

const LastNameField = ({
	values,
	handleChange,
	handleBlur,
	setAmplitudeEventChanged,
	errors,
	touched,
	formFields,
	currentStep,
}) => {
	const includeLastName = formFields[currentStep]?.fields?.presets?.includes('last_name');

	const { onFocus, onChange, onBlur } = useFieldHandlers('lastName', 'Apellido', handleChange, handleBlur, setAmplitudeEventChanged, values);

	if (!includeLastName) {
		return null;
	}

	return (
		<BaseField
			id="lastName"
			type="text"
			name="lastName"
			label={__('Apellido', 'aprende')}
			value={values.lastName}
			errorText={errors.lastName && touched.lastName ? errors.lastName : ''}
			error={!!(errors.lastName && touched.lastName)}
			onFocus={onFocus}
			onChange={onChange}
			onBlur={onBlur}
			dataInput={{
				'data-apt-e-changed': '1',
				'data-apt-key': 'lastName',
			}}
		/>
	);
};

export default LastNameField;
