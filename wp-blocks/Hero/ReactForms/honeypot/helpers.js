// Check if honeypot is enabled in settings.
export const honeypotEnabled = '1';

// Retrieve the URL to redirect to in case a honeypot field is filled out.
export const honeypotRedirectURL = 'https://qa.aprende.dev/gracias-2/';

/**
 * Extracts values from honeypot fields and detects if any have been filled.
 * @param {React.MutableRefObject} inputsRef - A ref object honeypot input fields.
 * @returns {{honeypotValues: Object, honeypotDetected: boolean}} An object containing the extracted values of honeypot fields and a flag indicating whether any honeypot field was filled.
 */
export const extractHoneypotValues = (inputsRef) => {
	const honeypotValues = {};
	let honeypotDetected = false;

	if (honeypotEnabled === "1" && inputsRef?.current) {
		// Iterate over all input fields referenced by inputsRef.
		Object.keys(inputsRef.current).forEach(inputName => {
			if (inputsRef.current[inputName] && typeof inputsRef.current[inputName].value === "string") {
				const inputValue = inputsRef.current[inputName].value;

				if (inputValue !== "") {
					honeypotValues[inputName] = inputValue;
					honeypotDetected = true;
				}
			}
		});
	}
	// Return the collected honeypot field values and the detection flag.
	return { honeypotValues, honeypotDetected };
};
