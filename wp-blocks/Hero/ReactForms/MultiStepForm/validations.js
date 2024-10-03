/* eslint-disable */
import { __ } from '@wordpress/i18n';

export const formValidations = (
  formFields,
  currentStep,
  userValues,
  errors,
  validatePhone,
  requiredMessage,
  validateAllFields,
) => {

	const formPresetField = formFields[currentStep].fields.presets,
		nameValidation = /^[a-zA-ZàèìòùÀÈÌĺÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ' .-]+$/,
		validFormatText = __( 'Completa con un formato válido', 'aprende' ),
		emailValidation = /^[A-Z0-9._%+-]+(?<!\.)@(?<!\.)[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

	const messages = {
		first_name: {
			required: __( 'Tu nombre es requerido', 'aprende' ),
			invalid: validFormatText,
			length:  __( 'Tu nombre debe tener al menos 2 caracteres', 'aprende' ),
		},
		last_name: {
			required: __( 'Tu apellido es requerido', 'aprende' ),
			invalid: validFormatText,
			length: __( 'Tu apellido debe tener al menos 2 caracteres', 'aprende' ),
		},
		email: {
			required: __( 'Tu correo electrónico es requerido', 'aprende' ),
			invalid: __( 'Usa el formato nombre@ejemplo.com', 'aprende' ),
		},
		phone: {
			required: __( 'Tu teléfono es requerido', 'aprende' ),
			length: __( `Tu número debe tener ${validatePhone} dígitos`, 'aprende' ),
			areaCode: __( 'Ingresa un código de área válido', 'aprende' ),
			invalidNumber: __( 'Tu número no puede comenzar con 0800', 'aprende' ),
		},
		area_of_interest: {
			required: requiredMessage,
		},
	};

	/** Firstname */
	if (formPresetField.includes('first_name')) {
		if (!userValues.firstName) {
			// Required
			errors.firstName = __( 'Tu nombre es requerido', 'aprende' );
		} else if (!nameValidation.test(userValues.firstName)) {
			// Valid format
			errors.firstName = validFormatText;
		} else if (userValues.firstName.length < 2) {
			// Valid length
			errors.firstName = __( 'Tu nombre debe tener al menos 2 caracteres', 'aprende' );
		}
	}

	/** Lastname */
	if (formPresetField.includes('last_name')) {
		if (!userValues.lastName) {
			// Required
			errors.lastName = __( 'Tu apellido es requerido', 'aprende' );
		} else if (!nameValidation.test(userValues.lastName)) {
			// Valid format
			errors.lastName = validFormatText;
		} else if (userValues.lastName.length < 2) {
			// Valid length
			errors.lastName = __( 'Tu apellido debe tener al menos 2 caracteres', 'aprende' );
		}
	}

	/** AOI */
	if (formPresetField.includes('area_of_interest')) {
		// Required
		if (!userValues.area_of_interest) {
			errors.area_of_interest =  requiredMessage;
		}
	}

	/** Email */
	if (formPresetField.includes('email')) {
		// Required
		if (!userValues.email) {
			errors.email = __( 'Tu correo electrónico es requerido', 'aprende' );
		}
		// Valid format
		if (!emailValidation.test(userValues.email) && userValues.email.length) {
			errors.email = __( 'Usa el formato nombre@ejemplo.com', 'aprende' );
		}
	}

	/** Phone */
	if (formPresetField.includes('country_phone')) {
		if (validatePhone === 'invalidNumber') {
			errors.phone = messages.phone.invalidNumber
		}

		if (validatePhone === 'invalidUsCode') {
			errors.phone = messages.phone.areaCode;
		}

		if (userValues.phone.length < validatePhone) {
			errors.phone = messages.phone.length;
		} 

		if (!userValues.phone) {
			errors.phone = messages.phone.required;
		}
	}

	/** Custom Fields */
	let isCustomField = formPresetField.includes('custom_field') && validateAllFields;

	if (isCustomField) {
		formFields[currentStep].fields.custom.map((item) => {
			if (item.required === true && !userValues[item.name]) {
				errors[item.name] = requiredMessage;
			}
		});
	}

	return errors;
};
