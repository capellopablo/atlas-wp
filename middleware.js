// This is a test for Headers + NextResponse
import { NextResponse } from 'next/server';

export function middleware(request) {
	const country = request.headers.get('wpe-headless-country') || 'US';
	const region = request.headers.get('wpe-headless-region') || 'No region data';
	const timezone = request.headers.get('wpe-headless-timezone') || 'No timezone data';

	const response = NextResponse.next();

	response.cookies.set('country', country);
	response.cookies.set('region', region);
	response.cookies.set('timezone', timezone);

	return response;
}
