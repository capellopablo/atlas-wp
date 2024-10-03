import React, { useRef } from 'react';
import Checkbox from '@aprende-com/design-system/components/Checkbox';
import Icon from '@aprende-com/design-system/components/Icon';

const NightleadConsentField = ({
	values,
	formSettings,
	setFieldValue,
	setAmplitudeEventChanged,
}) => {
	const checkboxRef = useRef(null);

	const handleCheckboxChange = (isChecked) => {
		setFieldValue('after_hour_consent', isChecked.toString());

		const input = checkboxRef?.current?.querySelector('input[type="checkbox"]');
		
		if (input) {
			input.setAttribute('data-apt-e-changed', '1');
			input.setAttribute('data-apt-key', 'nightLeadsConsent');
		}
		
		setAmplitudeEventChanged(input, {
			type: 'checkbox',
			value: isChecked.toString(),
			label: formSettings.after_hour_text,
		});
	};

	return (
		<div ref={checkboxRef}
			className="r-lead-form_after-hour pt-2xs pr-s pb-s mb-2xs bg-secondary-100">
			<Icon icon="phone" width="24px" height="24px" className="align-end justify-center pb-2xs" />
			<Checkbox
				key="after_hour_consent"
				id={'after_hour_consent-' + Date.now()} // Add a random number to the id to avoid conflicts with other forms.
				value={values.after_hour_consent}
				onChange={handleCheckboxChange}
				label={formSettings.after_hour_text}
			/>
		</div>
	);
};

export default NightleadConsentField;
