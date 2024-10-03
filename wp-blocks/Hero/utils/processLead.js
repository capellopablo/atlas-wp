/** Utils */
import api from '../../services';

/** Amplitude */
// import { trackLeadProcessing, STATUS } from '../../externals/amplitude'

/**
 * Process lead in Salesforce and track the event in Amplitude
 *
 * @param email
 * @param update
 */
export const processLead = async (email, update = {}) => {

	// trackLeadProcessing(STATUS.REQUESTED, email);

	const startTime = Date.now();
	const response = await api.processLead(email, update).then((res) => {
		return res?.results?.[0]?.responses;
	});

	const time = ( Date.now() - startTime ) / 1000;
	const status = response?.salesforce?.success ? STATUS.SUCCESSFUL : STATUS.FAILED;
	const salesforceID = response?.salesforce?.response_body?.id;

	// trackLeadProcessing(status, email, time, status && salesforceID);
};
