import { __ } from '@wordpress/i18n';

const URL = `${window?.aprende21.site_url}/wp-json/aprende/v2/moodle/update-student`;

const updateStudent = async (data) => {
	try {
		const response = await fetch(URL, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data),
		});
		return response;
	} catch (error) {
		console.error(__('Moodle update-student error: ', 'aprende'), error);
	}
};

export default updateStudent;
