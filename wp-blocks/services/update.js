import axios from 'axios';

// const URL = `${window?.aprende21.site_url}/wp-json/lead/v1/update`;
const URL = 'https://qa.aprende.dev/wp-json/lead/v1/update';

const api = {
	updateLead: async (payload) =>
		axios.post(`${URL}`, payload).then((response) => {
			return response.data;
		}),
};

export default api;
