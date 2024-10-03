import axios from "axios";

// const URL = `${window?.aprende21.site_url}/wp-json/lead/v1/upsert`;
const URL = "https://qa.aprende.dev/wp-json/lead/v1/upsert";

const api = {
  postLead: async (payload) =>
    axios.post(`${URL}`, payload).then((response) => {
      return response.data;
    }),
};

export default api;
