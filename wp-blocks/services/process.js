import axios from 'axios';

// const URL = `${window?.aprende21.site_url}/wp-json/lead/v1/process`;
const URL = "https://qa.aprende.dev/wp-json/lead/v1/process";

const api = {
  processLead: async (email, update = {}) =>
    axios.post(`${URL}`, {
		email: email,
		destination: 'all',
		update: update,
	}).then((response) => {
      return response.data;
    }),
};

export default api;
