import { useState, useEffect } from 'react';
import { getCookie, getAprendeUTMCookie } from '../../../utils';

/**
 * Custom hook to fetch UTM and other related parameters from cookies or URL.
 * It first tries to retrieve values from cookies using getAprendeUTMCookie,
 * and if not present, it attempts to get them from the URL query parameters.
 * 
 * @returns {Object} An object containing all relevant UTM and tracking parameters.
 */
const useUTMParams = () => {
	const [utmParams, setUtmParams] = useState({
		utm_source: null,
		utm_medium: null,
		utm_content: null,
		utm_campaign: null,
		utm_term: null,
		device: null,
		ad_position: null,
		adgroupid: null,
		ad_id: null,
		match_type: null,
		network: null,
		gclid: null,
		website_client_ID: null,
		facebook_fbp: null,
		facebook_fbc: null,
		landing_page: null,
		landing_page_count: null,
	});

	// useEffect(() => {
	// 	const queryParams = new URLSearchParams(window.location.search);
	//
	// 	const extraCookies = {
	// 		gclid: getCookie('gclid'),
	// 		website_client_ID: getCookie('_ga'),
	// 		facebook_fbp: getCookie('_fbp'),
	// 		facebook_fbc: getCookie('_fbc'),
	// 		landing_page: getCookie('landing_page')?.toLowerCase(),
	// 		landing_page_count: getCookie('landing_page_count'),
	// 	};
	//
	// 	const newUtmParams = {};
	//
	// 	// Mapping of UTM cookie keys to their respective parameter names
	// 	const keyMap = {
	// 		'utmcsr': 'utm_source',
	// 		'utmcmd': 'utm_medium',
	// 		'utmcct': 'utm_content',
	// 		'utmccn': 'utm_campaign',
	// 		'utmctr': 'utm_term',
	// 		'device': 'device',
	// 		'ad_position': 'ad_position',
	// 		'adgroupid': 'adgroupid',
	// 		'ad_id': 'ad_id',
	// 		'match_type': 'match_type',
	// 		'network': 'network',
	// 	};
	//
	// 	// Retrieve UTM and additional values from cookies, fallback to URL if empty
	// 	Object.keys(keyMap).forEach(key => {
	// 		let value = getAprendeUTMCookie(key);
	//
	// 		if (!value) {
	// 			value = queryParams.get(keyMap[key]);
	// 		}
	// 		if (value) {
	// 			newUtmParams[keyMap[key]] = value;
	// 		}
	// 	});
	//
	// 	// Combine UTM params with extra cookies
	// 	const combinedParams = { ...newUtmParams, ...extraCookies };
	//
	// 	setUtmParams(combinedParams);
	// }, [document.cookie]);

	return utmParams;
};

export default useUTMParams;
