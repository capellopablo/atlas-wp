import upsertApi from './upsert';
import processApi from './process';
import updateApi from './update';

const api = {
	...upsertApi,
	...processApi,
	...updateApi,
};

export default api;
