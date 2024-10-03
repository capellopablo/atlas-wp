import { getAprendeUTMCookie } from '../../../utils';

/**
 * Referrer Field.
 * Get the referrer URL without parameters.
 * @returns {string}
 */
export const referrerBaseURL = () => '';
// export const referrerBaseURL = () => {
// 	let currentReferrer = document.referrer,
// 		referrerBaseURL = '';
//
// 	if (!currentReferrer) {
// 		return referrerBaseURL;
// 	}
//
// 	const referrerURL = new URL(currentReferrer);
//
// 	return referrerBaseURL = referrerURL.origin + referrerURL.pathname;
// };

/**
 * Remove apostrophes from a string.
 * @returns {string}
 */
export const sanitizeValue = (inputValue) => {
	if (!inputValue) {
		return '';
	}

	const sanitized = inputValue.replace(/'/g, '');

	return sanitized;
};

/**
 * Lead Source field.
 * @returns {string}
 */

// const currentURL = window.location.href;
// const baseURL = window.location.origin;
// const UTMcampaign = getAprendeUTMCookie('utmccn');

const currentSourceData = () => {
	// if (currentURL === `${baseURL}/` || currentURL.startsWith(`${baseURL}/escuela-`)) {
	// 	return 'WEB - SEO Brand';
	// }
	//
	// if (currentURL.startsWith(`${baseURL}/blog`) || currentURL.startsWith(`${baseURL}/curso`)) {
	// 	return 'WEB - SEO Non Brand';
	// }
	//
	// if (UTMcampaign && UTMcampaign !== 'US-MARCA' && UTMcampaign !== '(direct)') {
	// 	return 'WEB - SEM Non Brand';
	// }
	//
	// if (UTMcampaign && UTMcampaign === 'US-MARCA') {
	// 	return 'WEB - SEM Brand';
	// }

	return 'WEB';
}

export const leadSourceField = currentSourceData();

/**
 * Get tracking relationship type.
 * @param {string} type - The type of relationship to check.
 * @returns {boolean}
 */
const tracking = {
	"productID": "",
	"ProductTitle": "",
	"productCategories": "",
	"areaOfInterest": "",
	"schoolOfInterest": "",
	"isGenericAreaOfInterest": false,
	"hasJourney": false,
	"tracking_relationship": "none",
	"pageID": 1236742
};

const relationshipType = (type) => tracking?.tracking_relationship === type;

export const isCustomRelationship = relationshipType('custom');
export const isNoneRelationship = relationshipType('none');
export const isProgramRelationship = relationshipType('program');

/**
 * Get the value of the Area Of Interest field.
 * @param {string[]} presetFields - An array of preset fields.
 * @returns {string} - The value of the Area Of Interest field. Returns an empty string if the field is not applicable or unavailable.
 */
export const getAreaOfInterestValue = (presetFields) => {
	// Determines if the relationship is a program, if it contains a generic area of interest, and if the field is visible.
	const isProgramGenericAndVisible = isProgramRelationship && tracking?.isGenericAreaOfInterest && presetFields.includes('area_of_interest');

	if (isCustomRelationship || isProgramGenericAndVisible) {
		return '';
	}

	return tracking?.areaOfInterest || '';
};
