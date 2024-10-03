import { __ } from '@wordpress/i18n';

const postFreetrialLead = async (data) => {
	try {
		const formData = new FormData();

		formData.append('action', 'process_webhook_tray');
		formData.append('data', JSON.stringify(data));

		const params = new URLSearchParams(formData);

		fetch(window.freetrial_vars.ajax_url, {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: params,
		})
		.then(response => {
			if (!response.ok) {
				throw new Error(__('process_webhook_tray error:', 'aprende'));
			}
			return response.json();
		})
	} catch (error) {
		console.error(__('process_webhook_tray error: ', 'aprende'), error);
	}
};

export default postFreetrialLead;
