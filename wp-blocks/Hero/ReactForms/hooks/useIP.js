/* eslint-disable */
import {useState, useEffect} from 'react';

/**
 * Custom React Hook to fetch and return the user's IP address V6.
 * 
 * This hook makes an HTTP request to an external API service to retrieve
 * the user's IP address and stores it in a state.
 *
 * @returns {string} The user's IP address or an empty string if the API call fails.
 */
export const useIP = () => {
	const [ip, setIp] = useState('');

	useEffect(() => {
		const getIP = async () => {
			try {
				const response = await fetch('https://api64.ipify.org?format=json');
				if (!response.ok) {
					return;
				}

				const data = await response.json();
				setIp(data?.ip);

			} catch (error) {
				console.error('Error', error);
			}
		};

		getIP();
	}, []);

	return ip;
};
