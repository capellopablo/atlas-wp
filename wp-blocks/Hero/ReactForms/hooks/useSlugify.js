import { useCallback } from 'react';

/**
 * Custom React hook for slugifying a string.
 * This hook creates a slug from any given string, making it URL-friendly.
 * @returns {Function} A slugify function that takes a string and returns a slugified version of it.
 */
const useSlugify = () => {
	const slugify = useCallback(text => 
		text
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(/[^\w\-]+/g, '') // Remove all non-word chars
			.replace(/\-\-+/g, '-'), // Replace multiple - with single -
		[]);

	return slugify;
};

export default useSlugify;
