import React from 'react';
import { __ } from '@wordpress/i18n';
import BaseField from './baseField';
import { useFieldHandlers } from '../hooks/useFieldHandlers';

const FirstNameField = ({
	values,
	handleChange,
	handleBlur,
	setAmplitudeEventChanged,
	errors,
	touched,
	formFields,
	currentStep,
}) => {
	const includeFirstName = formFields[currentStep]?.fields?.presets?.includes('first_name');

	const { onFocus, onChange, onBlur } = useFieldHandlers('firstName', 'Nombre', handleChange, handleBlur, setAmplitudeEventChanged, values);

	if (!includeFirstName) {
		return null;
	}

	return (
		<BaseField
			id="firstName"
			type="text"
			name="firstName"
			label={__('Nombre', 'aprende')}
			value={values.firstName}
			errorText={errors.firstName && touched.firstName ? errors.firstName : ''}
			error={!!(errors.firstName && touched.firstName)}
			onFocus={onFocus}
			onChange={onChange}
			onBlur={onBlur}
			dataInput={{
				'data-apt-e-changed': '1',
				'data-apt-key': 'firstName',
			}}
		/>
	);
};

export default FirstNameField;
