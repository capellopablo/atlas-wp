/**
 * Custom hook to get the sanitized version of an email.
 * This hook makes an AJAX POST request to a specific endpoint defined
 * in registerAjaxAction('sanitized_lead_mail_process', ...).
 *
 * @param {string} email - The lead form email address to be sanitized.
 * @return {string} - The sanitized email if AJAX request is successful, otherwise the original email.
 */

export const useAjaxGetSanitizedLeadEmail = async (email) => {
	let emailSanitized = email;

	const data = {
		'action': 'sanitized_lead_mail_process',
		'email': email,
	};

	await fetch(window?.aprende21_modules?.aprende_ajax, {
		method: 'POST',
		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		body: new URLSearchParams(data).toString(),
	})
	.then(res => res.json())
	.then(data => {
		emailSanitized = data.sanitizedEmail;
	})
	.catch(error => {
		console.error('AJAX error:', error);
	});

	return emailSanitized;
};
