import React from 'react';
import Input from '@aprende-com/design-system/components/Input';
import { __ } from '@wordpress/i18n';

const LastNameField = ({
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
				lastName: false,
			})

			setAmplitudeEventChanged(e.target, {
				type: e.target.type,
				value: e.target.value,
				label: 'Apellido',
			});
		}
	};

	return (
		<Input
			id="lastName"
			type="text"
			name="lastName"
			label={__('Apellido', 'aprende')}
			data={{'data-field': 'lastName'}}
			value={values.lastName}
			errorText={errors.lastName && touched.lastName ? errors.lastName : ''}
			error={!!(errors.lastName && touched.lastName)}
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
