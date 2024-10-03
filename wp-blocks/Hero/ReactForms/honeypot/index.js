/* eslint-disable */
/**
 * Renders honeypot input fields based on the configuration from aprende21 settings.
 * These fields are intended to be hidden from real users but can be filled by bots,
 *
 * @param {Object} props - Component props.
 * @param {React.MutableRefObject} props.honeypotInputsRef - A ref object to store references to the honeypot input fields.
 * @returns {React.ReactNode} A fragment containing honeypot input fields or null if there are no fields configured.
 */
const HoneypotFields = ({ honeypotInputsRef }) => {
	const fields = {
		"row-0": {
			"input_name": "faxNumber",
			"input_type": "text"
		},
		"row-1": {
			"input_name": "substituteName",
			"input_type": "text"
		},
		"row-2": {
			"input_name": "additionalContactInfo",
			"input_type": "text"
		},
		"row-3": {
			"input_name": "emergencyContact",
			"input_type": "tel"
		}
	};
	const isEmpty = !fields || Object.keys(fields).length === 0;

	if (isEmpty) {
		return null;
	}

	return (
		<>
			{Object.entries(fields).map(([key, { input_name, input_type }]) => (
				<input
					key={key}
					id={input_name}
					name={input_name}
					type={input_type}
					className="d-none"
					autoComplete="false"
					ref={el => honeypotInputsRef.current[input_name] = el}
				/>
			))}
		</>
	);
};

export default HoneypotFields;
