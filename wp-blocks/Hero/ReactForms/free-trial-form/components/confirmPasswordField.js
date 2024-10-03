import React from 'react';
import Input from '@aprende-com/design-system/components/Input';
import { __ } from '@wordpress/i18n';

const ConfirmPasswordField = ({
	values,
	handleChange,
	handleBlur,
	setAmplitudeEventChanged,
	errors,
	touched,
	setValidatePasswords,
}) => {
	const onChange = (e) => {
		handleChange(e);
	};

	const onBlur = (e) => {
		handleBlur(e);

		if (e.target.value) {
			setAmplitudeEventChanged(e.target, {
				type: e.target.type,
				label: __('Confirmar contraseña', 'aprende'),
			});

			setValidatePasswords(true);
		}
	};

	return (
		<Input
			id="confirmPassword"
			type="password"
			name="confirmPassword"
			label={__('Confirmar contraseña', 'aprende')}
			data={{'data-field': 'confirmPassword'}}
			value={values.confirmPassword}
			errorText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ''}
			error={!!(errors.confirmPassword && touched.confirmPassword)}
			onChange={onChange}
			onBlur={onBlur}
			dataInput={{
				'data-apt-e-changed': '1',
				'data-apt-key': 'confirmPassword',
				'autocomplete': 'none',
			}}
		/>
	);
};

export default ConfirmPasswordField;
