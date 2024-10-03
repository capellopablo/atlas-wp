import React from 'react';
import Input from '@aprende-com/design-system/components/Input';
import { __ } from '@wordpress/i18n';

const PasswordField = ({
	values,
	handleChange,
	handleBlur,
	setAmplitudeEventChanged,
	errors,
	touched,
}) => {
	const onChange = (e) => {
		handleChange(e);
	};

	const onBlur = (e) => {
		handleBlur(e);
		
		if (e.target.value) {
			setAmplitudeEventChanged(e.target, {
				type: e.target.type,
				label: __('Contraseña', 'aprende'),
			});
		}
	};

	return (
		<Input
			id="password"
			type="password"
			name="password"
			label={__('Contraseña', 'aprende')}
			data={{'data-field': 'password'}}
			value={values.password}
			errorText={errors.password && touched.password ? errors.password : ''}
			error={!!(errors.password && touched.password)}
			onChange={onChange}
			onBlur={onBlur}
			dataInput={{
				'data-apt-e-changed': '1',
				'data-apt-key': 'password',
				'autocomplete': 'new-password',
			}}
		/>
	);
};

export default PasswordField;
