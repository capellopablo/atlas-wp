/* eslint-disable */
import React from 'react';
import { __ } from '@wordpress/i18n';
/* eslint-enable */

const Terms = ({ ctaValue }) => {
	let termsAndConditionsText = window?.aprende21?.settings?.modules?.free_trial_settings?.free_trial_form_terms_and_conditions;

	if (!termsAndConditionsText) {
		return;
	}

	const replaceTermsValue = (termsTemplate) => {
		return termsTemplate.replace('%s', ctaValue);
	}

	let termsTextTemplate = replaceTermsValue(termsAndConditionsText);

	if (!termsTextTemplate) {
		return;
	}

	return (
		<div className="r-lead-form_terms">
			<p className="text-s text-secondary" dangerouslySetInnerHTML={{ __html: termsTextTemplate.replace(/\\"/g, '"') }} />
		</div>
	);
};

export default Terms;
