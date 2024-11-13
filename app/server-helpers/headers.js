import { headers } from 'next/headers';

export async function getHeaders() {
    const headersInstance = headers();
    const country = headersInstance.get('wpe-headless-country') || 'No country data';
    const region = headersInstance.get('wpe-headless-region') || 'No region data';
    const timezone = headersInstance.get('wpe-headless-timezone') || 'No timezone data';
    return { country, region, timezone };
}
