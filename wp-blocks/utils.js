/**
 * Lead Form Field: Has Journey ("true" / "false").
 * @returns {string}
 */
let hasJourney = 'false';
// 	hasJourneyValue = window?.aprende21?.tracking?.hasJourney;
//
// if (hasJourneyValue !== undefined) {
// 	hasJourney = hasJourneyValue.toString();
// }

export { hasJourney };

/**
 * Obtain a query string value.
 *
 * @param arg
 * @returns {null}
 */
export const getQueryStringValue = (arg) => {
	let result = null,
		tmp = [];

	location.search
		.substr(1)
		.split('&')
		.forEach(function (item) {
			tmp = item.split('=');
			if (tmp[0] === arg) {
				result = safeDecodeURIComponent(tmp[1]);
			}
		});

	return result;
};

/**
 * Get Cookie
 * @param name
 * @returns {string|null}
 */
export const getCookie = function (name) {
	const nameEQ = name + '=',
		cookies = document.cookie.split(';');

	for (let i = 0; i < cookies.length; i++) {
		let c = cookies[i];

		while (c.charAt(0) === ' ') {
			c = c.substring(1, c.length);
		}

		if (c.indexOf(nameEQ) === 0) {
			return c.substring(nameEQ.length, c.length);
		}
	}
	return null;
};

/**
 * Set Cookie
 * @param name
 * @param value
 * @param days
 */
export const setCookie = function( name, value, days ) {
	let expires = '';

	if (days) {
		let date = new Date();

		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

		expires = '; expires=' + date.toUTCString();
	}

	document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

/**
 * Sets a cookie with a specified name, value, and expiration time in minutes.
 * If no expiration time is specified, the cookie is set as a session cookie.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie. Defaults to an empty string.
 * @param {number} minutes - The expiration time of the cookie in minutes.
 */
export const setCookieExpireInMinutes = function(name, value = '', minutes) {
	let expires = '';

	if (minutes) {
		const date = new Date();
		date.setTime(date.getTime() + minutes * 60 * 1000);
		expires = `; expires=${date.toUTCString()}`;
	}

	document.cookie = `${name}=${value}${expires}; path=/`;
};

/**
 * Deletes a cookie by setting its expiration date to a past date.
 * This causes the browser to remove the cookie.
 *
 * @param {string} name - The name of the cookie to be deleted.
 */
export const deleteCookie = function(name) {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

/**
 * Get Current Day
 */
export const getDate = function() {
	const date 			= new Date(),
		rawMonth 		= date.getMonth() + 1,
		currentMonth 	= rawMonth.toString().padStart( 2, '0' ),
		currentDay		= date.getDate().toString().padStart( 2, '0' ),
		today 			= date.getFullYear() + '-' + currentMonth + '-' + currentDay;

	return today;
};

/**
 * Get Current Time
 */
export const getTime = function() {
	const date 			= new Date(),
		currentHours 	= date.getHours().toString().padStart( 2, '0' ),
		currentMinutes	= date.getMinutes().toString().padStart( 2, '0' ),
		currentSeconds	= date.getSeconds().toString().padStart( 2, '0' ),
		time = currentHours + ":" + currentMinutes + ":" + currentSeconds;

	return time;
};

// /**
//  * Obtain refreshed values from UTM cookie.
//  *
//  * @returns {string}
//  */
// export const getRefreshedUnifiedUTMCookie = () => {
// 	return document.cookie
// 		.split('.utmcsr')
// 		.join('; utmcsr')
// 		.split('|')
// 		.join('; ');
// };
//
// /**
//  * Get UTM cookie as a single string.
//  *
//  * @type {string}
//  * @deprecated
//  */
// export let unifiedUTMCookie = getRefreshedUnifiedUTMCookie();

/**
 * Obtain a single value from the UTM cookie.
 *
 * @param key
 * @returns {string}
 * @deprecated
 */
export const getUTMItem = (key) => '';
// export const getUTMItem = (key) => {
// 	const keyMap = {
// 		'utmcsr': 'utm_source',
// 		'utmcmd': 'utm_medium',
// 		'utmcct': 'utm_content',
// 		'utmccn': 'utm_campaign',
// 		'utmctr': 'utm_term',
// 	};
//
// 	// Prioritize UTM values coming from query string.
// 	if (key in keyMap) {
// 		const queryStringValue = getQueryStringValue(keyMap[key]);
//
// 		if (queryStringValue) {
// 			return safeDecodeURIComponent(queryStringValue);
// 		}
// 	}
//
// 	return unifiedUTMCookie.split('; ').reduce((total, currentCookie) => {
// 		const item = currentCookie.split('=');
// 		const storedKey = item[0];
// 		const storedValue = item[1];
// 		return key === storedKey
// 			? safeDecodeURIComponent(storedValue)
// 			: total;
// 	}, '');
// };

/**
 * Obtain a single value from the Aprende UTM cookie.
 *
 * @param key
 * @returns {string}
 */
export const getAprendeUTMCookie = () => '';
/*export const getAprendeUTMCookie = ( key ) => {
	// if ( typeof getAprendeUtmCookieJson === 'undefined' ) {
	// 	return '';
	// }

	const keyMap = {
		'utmcsr': 'utm_source',
		'utmcmd': 'utm_medium',
		'utmcct': 'utm_content',
		'utmccn': 'utm_campaign',
		'utmctr': 'utm_term',
		'device': 'device',
		'ad_id': 'ad_id',
		'adgroupid': 'adgroupid',
		'ad_position': 'ad_position',
		'match_type': 'match_type',
		'network': 'network',
	};

	// const aprendeUTM = window.getAprendeUtmCookieJson();
	//
	// if (key in keyMap && typeof aprendeUTM?.[keyMap[key]] !== 'undefined') {
	// 	return safeDecodeURIComponent(aprendeUTM?.[keyMap[key]]) || '';
	// }

	return '';
};*/

/**
 * Lead Form Field: After Hour Leads (True / False).
 */
export { default as needsNightLeadConsent } from './afterHourLeads';

// let waitForPageViewIteration = 0;
// /**
//  * This event listens for 2 cookies:
//  * 1. The landing page cookie.
//  * 2. Listen to UTM cookie changes and update unifiedUTMCookie when not initially
//  * populated.
//  *
//  * @type {number}
//  */
// const waitForPageView = setInterval( () => {
// 	let utmcsr = getAprendeUTMCookie('utmcsr'),
// 		landingPage = getCookie( 'landing_page' );
//
//   waitForPageViewIteration++;
//
//   if (waitForPageViewIteration > 5) {
//     document.dispatchEvent(new CustomEvent('aprende21/cookie/pageView/notAvailable'));
//     clearInterval(waitForPageView);
//     return;
//   }
//
//   if (! landingPage) {
//     return;
//   }
//
//   if (! utmcsr) {
// 		return;
// 	}
//
// 	document.dispatchEvent(new CustomEvent('aprende21/cookie/pageView/populated'));
// 	clearInterval(waitForPageView);
// }, 500);

export const safeDecodeURIComponent = (encodedString, defaultValue = '') => {
	try {
		return decodeURIComponent(encodedString);
	} catch (e) {
		return defaultValue;
	}
};

/**
 * Sets value of custom attribute on the specified element.
 */
export const setElementAttributes = (item, attributes) => {
	Object.keys(attributes).forEach(attr => {
		item.setAttribute(attr, attributes[attr]);
	});
};

/**
 *	Lead Form Record Type values
 */
export const recordTypeValues = {
	'B2C': '0125G000000Jp5a',
	'B2B': '0125G000000Jp5f',
	'B2B2C': '0125G000000Jp7H',
};

/**
 * Get the device type.
 */
export const getDeviceType = () => {
	const userAgent = navigator.userAgent;

	if (userAgent) {
		if (/windows phone/i.test(userAgent) || /iPhone/i.test(userAgent) || (/Android/i.test(userAgent) && /Mobile/i.test(userAgent))) {
			return 'Mobile';
		}

		if ((/iPad|Macintosh/i.test(userAgent) && 'ontouchend' in document) || /iPad/i.test(userAgent) || (/Android/i.test(userAgent) && !/Mobile/i.test(userAgent))) {
			return 'Tablet';
		}

		return 'Desktop';
	}

	const userViewport = window.innerWidth;

	if (userViewport < 768) {
		return 'Mobile';
	}

	if (userViewport >= 768 && userViewport < 1024) {
		return 'Tablet';
	}

	return 'Desktop';
}

/**
 * Dispatches the event to remove padding from the app.
 *
 * @param paddingTop
 */
export const dispatchEventRemovePadding = () => {
	const app = document.getElementById('app');
	const event = new CustomEvent('aprende21/app/removePadding');
	app.dispatchEvent(event);
}

/**
 * Dispatches the event to add padding to the app.
 *
 * @param paddingTop
 */
export const dispatchEventAddPadding = (paddingTop) => {
	const app = document.getElementById('app');
	const event = new CustomEvent('aprende21/app/addPadding', {
		detail: {
			paddingTop: paddingTop,
		},
	});
	app.dispatchEvent(event);
}
