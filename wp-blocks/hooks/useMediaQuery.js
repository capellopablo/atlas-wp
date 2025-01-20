import { useState, useEffect } from "react";

/**
 * Custom React hook to determine if a media query matches the current viewport.
 * 
 * @param {string} query - The media query string to evaluate, e.g., '(min-width: 769px)'.
 * @returns {boolean} - A boolean indicating whether the media query matches the current viewport.
 * 
 */
export const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);

		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => setMatches(media.matches);

		window.addEventListener("resize", listener);
		return () => window.removeEventListener("resize", listener);

	}, [matches, query]);

	return matches;
}
