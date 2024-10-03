import axios from 'axios';

const URL = `${window?.aprende21.site_url}/wp-json/salesforce/v1/lead`;

const api = {
	updateLead: async (payload) =>
		axios.post(`${URL}`, payload).then((response) => {
			return response.data;
		}),
};

export default api;
