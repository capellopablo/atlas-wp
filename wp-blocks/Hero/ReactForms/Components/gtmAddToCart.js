/* eslint-disable */
import { useEffect } from 'react';
import { setCookie } from '../../../utils';
import { isNoneRelationship, isCustomRelationship } from '../Components/helpers';

/**
 * Constructs a query parameter string.
 * 
 * @param {string} key - The key of the query parameter.
 * @param {string} value - The value of the query parameter.
 * @returns {string} A query parameter string or an empty string if value is falsy.
 */
const constructQueryParam = (key, value) => (value ? `${key}=${value}` : '');

/**
 * Finds the matching area of interest based on the userAreaOfInterest.
 * 
 * @param {string} userAreaOfInterest - The user's area of interest.
 * @returns {object|undefined} The matching area of interest object if found, otherwise undefined.
 */
const findMatchingAreaOfInterest = (userAreaOfInterest) => {
	return Object.values(window?.aprende21.areasOfInterest).find(area => area.value === userAreaOfInterest);
};

/**
 * Gets tracking information based on the userAreaOfInterest.
 * 
 * @param {string} userAreaOfInterest - The user's area of interest.
 * @param {string} areaOfInterest - The default area of interest.
 * @returns {object} An object containing tracking information.
 */
const getTrackingData = (userAreaOfInterest, areaOfInterest) => {
	const { tracking } = window?.aprende21;

	if (userAreaOfInterest && userAreaOfInterest !== areaOfInterest) {
		const updatedArea = findMatchingAreaOfInterest(userAreaOfInterest);

		if (updatedArea && updatedArea?.tracking) {
			return {
				productID: updatedArea.tracking?.productID || '',
				productCategories: updatedArea.tracking?.productCategories || updatedArea.tracking?.schoolOfInterest || '',
				ProductTitle: updatedArea.tracking?.ProductTitle || '',
				currentAOI: updatedArea.value,
			};
		}
	}

	return {
		productID: tracking?.productID || '',
		productCategories: tracking?.productCategories || tracking?.schoolOfInterest || '',
		ProductTitle: tracking?.ProductTitle || '',
		currentAOI: tracking?.areaOfInterest,
	};
};

/**
 * Generates a URL for adding a product to the cart with tracking parameters.
 * 
 * @param {string} settingsReturnURL - The base URL to which tracking parameters will be appended.
 * @param {string} userAreaOfInterest - The user's area of interest.
 * @returns {string|undefined} A URL with appended tracking parameters.
 */
export const addToCartReturnURL = (settingsReturnURL, userAreaOfInterest) => {

	if (!settingsReturnURL || !userAreaOfInterest) {
		return;
	}

	const { productID, productCategories, ProductTitle, currentAOI } = getTrackingData(userAreaOfInterest, window?.aprende21?.tracking?.areaOfInterest);

	const prodIDParam = constructQueryParam('product_id', productID);
	const categoryParam = constructQueryParam('content_category', productCategories);
	const prodTitleParam = constructQueryParam('content_name', ProductTitle);
	const aoiParam = constructQueryParam('aoi', currentAOI);

	const params = [prodIDParam, categoryParam, prodTitleParam, aoiParam]
		.filter(param => param) // Filters out empty params
		.join('&');

	return `${settingsReturnURL}?${params}`;
};

/**
 * Constructs an object containing GTM event properties based on the provided area of interest and tracking data.
 * 
 * @param {string} areaOfInterest - The area of interest associated.
 * @returns {object} An object containing tracking related GTM properties.
 */
export const gtmEventProps = (areaOfInterest) => (
	areaOfInterest && {
		ecomm_prodid: window?.aprende21?.tracking?.productID || '',
		ecomm_content_name: window?.aprende21?.tracking?.ProductTitle || '',
		ecomm_content_category: window?.aprende21?.tracking?.productCategories || window?.aprende21?.tracking?.schoolOfInterest || '',
		ecomm_area_of_interest: areaOfInterest,
	}
);

/**
 * Pushes GTM events to the dataLayer.
 * 
 * @param {string} eventName - The name of the event to be tracked.
 * @param {object|null} gtmEventProps - The properties associated with the GTM event.
 */
export const gtmEvents = (eventName = 'IsConverted', gtmEventProps = null) => {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		...gtmEventProps,
		event: eventName,
	});
};

/**
 * Tracks the content view event based on user values and tracking settings.
 * 
 * @param {object} userValues - User values for tracking.
 */

export const trackViewContent = (userValues) => {
	useEffect(() => {
		const shouldTrackViewContent = () => {
			if (window.trackViewContent !== undefined) {
				return false;
			}
			if (window?.aprende21?.amplitude?.page?.postType === 'page' && isNoneRelationship) {
				return false;
			}
			return true;
		};

		const setViewContentTracked = () => {
			window.trackViewContent = true;
		};

		const getUrlWithoutParameters = () => {
			return `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
		};

		const getAOIData = () => {
			return isCustomRelationship ? window?.aprende21?.tracking?.areaOfInterest : userValues?.area_of_interest;
		};

		if (!shouldTrackViewContent()) {
			return;
		}

		setViewContentTracked();

		const urlWithoutParameters = getUrlWithoutParameters();
		const AOIData = getAOIData();

		setCookie('AprendeForm_URL', urlWithoutParameters, 30);
		gtmEvents('isViewContent', gtmEventProps(AOIData));
	}, [userValues]);
};
