/**
 * API handler to retrieve custom header data.
 *
 * This function extracts custom headers (`wpe-headless-country`, `wpe-headless-region`,
 * and `wpe-headless-timezone`) from the incoming request.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.headers - The headers object containing client request headers.
 * @param {Object} res - The response object.
 *
 * @returns {void} Responds with a JSON object containing `country`, `region`, and `timezone`.
 */
const headers = (req, res) => {
	const country = req.headers['wpe-headless-country'] || 'No country data';
	const region = req.headers['wpe-headless-region'] || 'No region data';
	const timezone = req.headers['wpe-headless-timezone'] || 'No timezone data';

	res.status(200).json({ country, region, timezone });
};

export default headers;
