import React from 'react';
import Input from '@aprende-com/design-system/components/Input';
import { __ } from '@wordpress/i18n';

const FirstNameField = ({
	values,
	handleChange,
	handleBlur,
	setAmplitudeEventChanged,
	errors,
	touched,
	autofill,
	setAutofill,
}) => {
	const onChange = (e) => {
		handleChange(e);
	};

	const onBlur = (e) => {
		handleBlur(e);

		if (e.target.value && !autofill.dispatched) {
			setAutofill({
				...autofill,
				firstName: false,
			})

			setAmplitudeEventChanged(e.target, {
				type: e.target.type,
				value: e.target.value,
				label: 'Nombre',
			});
		}
	};

	return (
		<Input
			id="firstName"
			type="text"
			name="firstName"
			label={__('Nombre', 'aprende')}
			data={{'data-field': 'firstName'}}
			value={values.firstName}
			errorText={errors.firstName && touched.firstName ? errors.firstName : ''}
			error={!!(errors.firstName && touched.firstName)}
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
