/**
 * Converts an aspect ratio to a percentage.
 *
 * @param {string} aspect - The aspect ratio in the format "width:height" (e.g., "16:9").
 * @returns {number|null} The aspect ratio as a percentage, or null if the input is invalid.
 */
export const convertAspectToPercentage = (aspect) => {
	if (!aspect) {
		return null;
	}

	const [width, height] = aspect.split(':').map(Number);
	return (height / width) * 100;
};
