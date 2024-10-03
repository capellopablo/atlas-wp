/* eslint-disable */
import { __ } from '@wordpress/i18n';

export const formValidations = (
  values,
  errors,
  validatePhone,
  validateAllFields,
  validatePasswords,
  emailExist,
) => {

	const nameValidation = /^[a-zA-ZàèìòùÀÈÌĺÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ' .-]+$/,
		validFormatText = __( 'Completa con un formato válido', 'aprende' ),
		emailValidation = /^[A-Z0-9._%+-]+(?<!\.)@(?<!\.)[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

	const messages = {
		firstName: {
			required: __( 'Tu nombre es requerido', 'aprende' ),
			invalid: validFormatText,
			length:  __( 'Tu nombre debe tener al menos 2 caracteres', 'aprende' ),
		},
		lastName: {
			required: __( 'Tu apellido es requerido', 'aprende' ),
			invalid: validFormatText,
			length: __( 'Tu apellido debe tener al menos 2 caracteres', 'aprende' ),
		},
		email: {
			required: __( 'Tu correo electrónico es requerido', 'aprende' ),
			invalid: __( 'Usa el formato nombre@ejemplo.com', 'aprende' ),
			exists: __( 'Ya existe una cuenta con este correo electrónico', 'aprende' ),
		},
		phone: {
			required: __( 'Tu teléfono es requerido', 'aprende' ),
			length: __( `Tu número debe tener ${validatePhone} dígitos`, 'aprende' ),
			areaCode: __( 'Ingresa un código de área válido', 'aprende' ),
			invalidNumber: __( 'Tu número no puede comenzar con 0800', 'aprende' ),
		},
		password: {
			required: __( 'Este campo es requerido', 'aprende' ),
			length: __( 'La contraseña debe tener al menos 8 caracteres', 'aprende' ),
			match: __( 'Las contraseñas ingresadas no coinciden', 'aprende' ),
		},
		confirmPassword: {
			required: __( 'Este campo es requerido', 'aprende' ),
			length: __( 'La confirmación de la contraseña debe tener al menos 8 caracteres', 'aprende' ),
			match: __( 'Las contraseñas ingresadas no coinciden', 'aprende' ),
		},
	};

	/** Firstname */
	if (!values.firstName) {
		// Required
		errors.firstName = messages.firstName.required;
	} else if (!nameValidation.test(values.firstName)) {
		// Valid format
		errors.firstName = messages.firstName.invalid;
	} else if (values.firstName.length < 2) {
		// Valid length
		errors.firstName = messages.firstName.length;
	}

	/** Lastname */
	if (!values.lastName) {
		// Required
		errors.lastName = messages.lastName.required;
	} else if (!nameValidation.test(values.lastName)) {
		// Valid format
		errors.lastName = messages.lastName.invalid;
	} else if (values.lastName.length < 2) {
		// Valid length
		errors.lastName = messages.lastName.length;
	}

	/** Email */
	// Required
	if (!values.email) {
		errors.email = messages.email.required;
	}
	// Valid format
	if (!emailValidation.test(values.email) && values.email.length) {
		errors.email = messages.email.invalid;
	}

	// Email exists
	if (values.email && emailExist && validateAllFields) {
		errors.email = messages.email.exists;
	}
	/** Phone */
	if (validatePhone === 'invalidNumber') {
		errors.phone = messages.phone.invalidNumber
	}

	if (validatePhone === 'invalidUsCode') {
		errors.phone = messages.phone.areaCode;
	}

	if (values.phone.length < validatePhone) {
		errors.phone = messages.phone.length;
	} 

	if (!values.phone) {
		errors.phone = messages.phone.required;
	}

	/** Password */
	if (!values.password) {
		errors.password = messages.password.required;
	} else if (values.password.length < 8) {
		errors.password = messages.password.length;
	}

	/** Confirm Password */
	if (values.password && values.confirmPassword && (values.password !== values.confirmPassword) && validatePasswords) {
		errors.password = messages.password.match;
		errors.confirmPassword = messages.confirmPassword.match;
	}

	if (!values.confirmPassword) {
		errors.confirmPassword = messages.confirmPassword.required;
	} else if (values.confirmPassword.length < 8) {
		errors.confirmPassword = messages.confirmPassword.length;
	}

	return errors;
};
