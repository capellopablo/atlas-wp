/* eslint-disable */
import React from 'react';
import { __ } from '@wordpress/i18n';
/* eslint-enable */

const Terms = ({formFields = [], formSettings = {}, ctaValue = ''}) => {
	const hasPhoneField = formFields && formFields.some(step => step?.fields?.presets.includes('country_phone'));
	const termsAndConditionsCustom =  formSettings?.terms_and_conditions_text;
	const mqlTermsAndConditionsCustom = formSettings?.mql_terms_and_conditions_text;
	const pageTermsAndConditionsCustom = formSettings?.custom_terms_and_conditions && formSettings?.terms_and_conditions_custom_text;
	const pageMqlTermsAndConditionsCustom = formSettings?.custom_terms_and_conditions && formSettings?.mql_terms_and_conditions_custom_text;
	const termsAndConditionsNotEmpty = pageTermsAndConditionsCustom.length > 0
	const mqlTermsAndConditionsNotEmpty = pageMqlTermsAndConditionsCustom.length > 0
	const formNotSubmitNotPhoneField = formSettings?.action !== 'submit' && !hasPhoneField
	const hasPageCustomTerms = (pageTermsAndConditionsCustom && termsAndConditionsNotEmpty) || (pageMqlTermsAndConditionsCustom && mqlTermsAndConditionsNotEmpty)

	const getMqlTermsTemplate = () => {
		return  pageMqlTermsAndConditionsCustom || mqlTermsAndConditionsCustom;
	}

	const getTermsTemplate = () => {
		return  pageTermsAndConditionsCustom || termsAndConditionsCustom;
	}


	const resolveTemplateTerms = () => {

		if (hasPageCustomTerms) {
			return formNotSubmitNotPhoneField ? getMqlTermsTemplate() : getTermsTemplate();
		} else {
			return formNotSubmitNotPhoneField ? mqlTermsAndConditionsCustom : termsAndConditionsCustom;
		}
	}

	//Add the text of the last button to the terms and conditions
	const addCTAValue = (termsTemplate) => {
		return termsTemplate.replace('%s', ctaValue);
	}

	//Gets the corresponding terms and conditions and adds the button text
	const getTermsAndConditions = () => {
		let template = resolveTemplateTerms();
		return addCTAValue(template)

	}

	let termsTextTemplate = getTermsAndConditions();

	return (
		<div className="r-lead-form_terms">
			{termsTextTemplate && (
				<p className="text-s text-secondary" dangerouslySetInnerHTML={{ __html: termsTextTemplate.replace(/\\"/g, '"') }} />
			)}
		</div>
	);
};

export default Terms;
