import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch and manage header data from the server.
 * 
 * This hook sends a request to the `/api/headers` endpoint and retrieves header information associated with the request.
 * It stores this information in the `headersData` state and provides it to components.
 *
 * @returns {Object} headersData - An object containing `country`, `region`, and `timezone` properties.

 */
export default function useHeaders() {
	const [headersData, setHeadersData] = useState({ country: '', region: '', timezone: '' });

	useEffect(() => {
		async function fetchHeaders() {
			try {
				const res = await fetch('/api/headers');
				if (res.ok) {
					const data = await res.json();
					setHeadersData(data);
				} else {
					console.error('Error fetching headers:', res.status);
				}
			} catch (error) {
				console.error('Failed to fetch headers:', error);
			}
		}

		fetchHeaders();
	}, []);

	return headersData;
}
