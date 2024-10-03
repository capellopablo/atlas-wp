import React from 'react';
import Input from '@aprende-com/design-system/components/Input';

/**
 * A reusable base field component that renders Aprende design system input field.
 *
 * @param {string} id - The unique identifier for the input field.
 * @param {string} type - The type of the input field (e.g., 'text', 'email', 'tel').
 * @param {string} name - The name of the input field, used for form submission.
 * @param {string} label - The label text displayed for the input field.
 * @param {string|number} value - The current value of the input field.
 * @param {string} errorText - The text to display when there is an error associated with the input field.
 * @param {boolean} error - A boolean indicating whether the input field has an error.
 * @param {function} onFocus - The function to handle the focus event.
 * @param {function} onChange - The function to handle the change event.
 * @param {function} onBlur - The function to handle the blur event.
 * @param {object} dataInput - Additional data attributes to pass to the input field.
 * 
 * @returns {JSX.Element} A JSX element that renders the input field with the provided props.
 */
const BaseField = ({
	id,
	type,
	name,
	label,
	value,
	errorText,
	error,
	onFocus,
	onChange,
	onBlur,
	dataInput,
}) => {
	return (
		<Input
			id={id}
			type={type}
			name={name}
			label={label}
			data={{'data-field': name}}
			value={value}
			errorText={errorText}
			error={error}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
			dataInput={dataInput}
		/>
	);
};

export default BaseField;
