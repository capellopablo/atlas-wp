import React, { useRef } from 'react';
import Checkbox from '@aprende-com/design-system/components/Checkbox';
import WhatsAppOptin from '../../Components/whatsAppOptin';
import { __ } from '@wordpress/i18n';

const OptInWhatsAppField = ({
	values,
	setFieldValue,
	setAmplitudeEventChanged,
}) => {
	const checkboxRef = useRef(null);

	let formSettings = {
		whatsapp_optin_text: __('Recibe mensajes vía WhatsApp y Sms sobre nuestros diplomados.', 'aprende'),
	}

	const handleCheckboxChange = (isChecked) => {
		setFieldValue('OptInWhatsApp', isChecked.toString());

		const input = checkboxRef?.current?.querySelector('input[type="checkbox"]');
		
		if (input) {
			input.setAttribute('data-apt-e-changed', '1');
			input.setAttribute('data-apt-key', 'whatsappOptin');
		}
		
		setAmplitudeEventChanged(input, {
			type: 'checkbox',
			value: isChecked.toString(),
			label: formSettings.whatsapp_optin_text,
		});
	};

	return (
		<div className="r-lead-form_contact ml-2xs" ref={checkboxRef}>
			<Checkbox
				key="OptInWhatsApp"
				id={'OptInWhatsApp-' + Date.now()} // Add a random number to the id to avoid conflicts with other forms.
				name="OptInWhatsApp"
				value={values.OptInWhatsApp}
				onChange={handleCheckboxChange}
				label={<WhatsAppOptin formSettings={formSettings}/>}
				initialChecked={true}
			/>
		</div>
	);
};

export default OptInWhatsAppField;
