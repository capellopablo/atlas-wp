export const VALIDATION_STATES = {
	DEFAULT: 'defaultState',
	INVALID_NUMBER: 'invalidNumber',
	INVALID_US_CODE: 'invalidUsCode'
};

export const isInvalidNumber = (rawPhone) => rawPhone.startsWith('0800');
export const isInvalidUsCode = (rawPhone) => rawPhone.startsWith('1');

export const customCountries = [
	'mx',
	'us',
	'ca',
	'co',
	'pe',
	'ec',
	'cr',
	'cl',
	'ar',
	'bo',
	'sv',
	'gt',
	'hn',
	'ni',
	'pa',
	'py',
	'pr',
	'do',
	'uy',
	've',
];

export const phoneMask = {
	mx: '...-...-....',
	us: '(...) ...-....',
	ca: '(...) ...-....',
	co: '...-.-...-...',
	pe: '...-...-...',
	ec: '.-....-....',
	cr: '....-....',
	cl: '.-....-....',
	ar: '...-...-....',
	bo: '.-...-....',
	sv: '.-...-....',
	gt: '....-....',
	hn: '.-...-....',
	ni: '....-....',
	pa: '...-.....',
	py: '...-...-...',
	pr: '(...)-...-....',
	do: '...-...-....',
	uy: '.-...-....',
	ve: '...-...-....',
};

export const countryDialCode = {
	mx: '52',
	us: '1',
	ca: '1',
	co: '57',
	pe: '51',
	ec: '593',
	cr: '506',
	cl: '56',
	ar: '54',
	bo: '591',
	sv: '503',
	gt: '502',
	hn: '504',
	ni: '505',
	pa: '507',
	py: '595',
	pr: '1',
	do: '1',
	uy: '598',
	ve: '58',
};

export const getPhoneLength = (userCountry = 'us') => {
	return phoneMask[userCountry]?.length || 0;
}

export const getPhoneMaskLength = (userCountry = 'us') => {
	return phoneMask[userCountry]?.replace(/[-()\s]/g, '').length || 0;
}
