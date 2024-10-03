/* eslint-disable */
import React, { useState } from 'react';
import Icon from '@aprende-com/design-system/components/Icon';

// const WhatsAppOptin = ({ formSettings }) => {
// 	const [whatsAppOptinText, setWhatsAppOptinText] = useState(formSettings?.whatsapp_optin_text);
// 	const keyword = 'WhatsApp';
//
// 	if ( whatsAppOptinText && whatsAppOptinText.includes(keyword) ) {
//
// 		const index = whatsAppOptinText.indexOf(keyword),
// 			content = [],
// 			firstTerm = whatsAppOptinText.slice(0, index),
// 			lastTerm = whatsAppOptinText.slice(index, whatsAppOptinText.length);
//
// 		content.push(
// 			firstTerm, <Icon key={index} icon="whatsapp" width="14px" height="14px" className="d-inline-f mx-3xs" />, lastTerm
// 		);
//
// 		setWhatsAppOptinText(content);
// 	}
//
// 	return whatsAppOptinText;
// };

export const whatsAppOptin = (formSettings) => {

	let whatsAppOptinText = formSettings?.whatsapp_optin_text;
	const keyword = 'WhatsApp';

	if (whatsAppOptinText && whatsAppOptinText.includes(keyword)) {

		const index = whatsAppOptinText.indexOf(keyword),
			content = [],
			firstTerm = whatsAppOptinText.slice(0, index),
			lastTerm = whatsAppOptinText.slice(index, whatsAppOptinText.length);

		content.push(
			firstTerm, <Icon key={index} icon="whatsapp" width="14px"
							 height="14px"
							 className="d-inline-f mx-3xs"/>, lastTerm,
		);

		whatsAppOptinText = content;
	}

	return whatsAppOptinText;
};

// export default WhatsAppOptin;
