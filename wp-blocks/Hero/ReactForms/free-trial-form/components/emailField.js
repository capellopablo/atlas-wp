import React from 'react';
import Input from '@aprende-com/design-system/components/Input';
import { __ } from '@wordpress/i18n';
import api from '../../../../services/moodle/index';

const EmailField = ({
	values,
	handleChange,
	handleBlur,
	setAmplitudeEventChanged,
	errors,
	touched,
	autofill,
	setFieldTouched,
	setEmailExist,
	setDisabledSubmit,
	setAutofill
}) => {

	const checkMoodleEmailExists = async (userEmail) => {
		setDisabledSubmit(true);
		setEmailExist(false);

		try {
			const response = await api.getStudent({ email: userEmail });

			if (response.ok) {
				const data = await response.json();

				if (data.results && data.results.id) {
					setEmailExist(true);
				}
			}
		} catch (error) {
			console.error(__('Moodle get-student error: ', 'aprende'), error);
		} finally {
			setDisabledSubmit(false);
		}
	};

	const onChange = async (e) => {
		handleChange(e);
		setEmailExist(false);

		if (e.target.value) {
			await checkMoodleEmailExists(e.target.value);
		}
	};

	const onBlur = async (e) => {
		handleBlur(e);
		setFieldTouched('email', true);

		let userEmail = values.email;

		if (e.target.value && !autofill.dispatched) {
			setAutofill({
				...autofill,
				email: false,
			})

			setAmplitudeEventChanged(e.target, {
				type: e.target?.type,
				value: userEmail,
				label: __('Correo electrónico', 'aprende'),
			});
		}
	};

	return (
		<Input
			id="email"
			type="email"
			name="email"
			label={__('Correo electrónico', 'aprende')}
			data={{'data-field': 'email'}}
			value={values.email}
			errorText={errors.email && touched.email ? errors.email : ''}
			error={!!(errors.email && touched.email)}
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
