import { __ } from '@wordpress/i18n';
import { referrerBaseURL } from '../Components/helpers';

/**
 * Prepares the payload for form submission.
 * 
 * @param {Object} formValues - The values from the form.
 * @param {Object} formSettings - The settings for the form.
 * @param {string} ipAddress - The IP address of the user.
 * @param {string} amplitudeDeviceID - The Amplitude device ID.
 * @param {string} amplitudeSessionID - The Amplitude session ID.
 * @param {Object} cookies - The cookies to include in the payload.
 * @returns {Object} The prepared payload.
 */
export const prepareFormPayload = (formValues, ipAddress, amplitudeDeviceID, amplitudeSessionID, cookies, freetrialType, currentEnrollmentID, integrationType) => {
	return {
		firstName: formValues?.firstName,
		lastName: formValues?.lastName,
		email: formValues?.email,
		country: formValues?.country,
		phone: formValues?.phone,
		OptInWhatsApp: formValues?.OptInWhatsApp,
		RecordTypeId: formValues?.RecordTypeId,
		company: __('Aprende', 'aprende'),
		leadSource: __('Web', 'aprende'),
		ip_address: ipAddress,
		referrer: (referrerBaseURL())?.toLowerCase(),
		page_url: (window.location.protocol + '//' + window.location.host + window.location.pathname)?.toLowerCase(),
		user_agent: navigator.userAgent,
		amplitude_device_id: amplitudeDeviceID,
		amplitude_session_id: amplitudeSessionID,
		freetrial_type: freetrialType,
		moodle_id: currentEnrollmentID,
		moodle_integration_type: integrationType,
		utm_source: cookies?.utm_source ?? '',
		utm_medium: cookies?.utm_medium ?? '',
		utm_content: cookies?.utm_content ?? '',
		utm_campaign: cookies?.utm_campaign ?? '',
		utm_term: cookies?.utm_term ?? '',
		device: cookies?.device ?? '',
		ad_position: cookies?.ad_position ?? '',
		adgroupid: cookies?.adgroupid ?? '',
		ad_id: cookies?.ad_id ?? '',
		match_type: cookies?.match_type ?? '',
		network: cookies?.network ?? '',
		gclid: cookies?.gclid ?? '',
		website_client_ID: cookies?.website_client_ID ?? '',
		facebook_fbp: cookies?.facebook_fbp ?? '',
		facebook_fbc: cookies?.facebook_fbc ?? '',
		landing_page: cookies?.landing_page ?? '',
		landing_page_count: cookies?.landing_page_count ?? '',
	};
};

/**
 * Registers a student in Moodle.
 * 
 * @param {Object} formValues - The values from the form.
 * @param {Object} api - The API object with methods to call.
 * @returns {Promise<Object>} The response data from the API.
 * @throws {Error} If the registration fails.
 */
export const registerStudent = async (formValues, api) => {
	const payload = {
		username: formValues.email,
		email: formValues.email,
		first_name: formValues.firstName,
		last_name: formValues.lastName,
		password: formValues.password,
		role: __('Alumno', 'aprende'),
	};

	const response = await api.registerStudent(payload);

	if (response.ok) {
		return response.json();
	}
	throw new Error('Error registering student');
};

/**
 * Gets the timestamp in seconds for a given number of days from the current date.
 * 
 * @param {number} days - The number of days to add to the current date.
 * @returns {number} The timestamp in seconds.
 */
const getTimestampInDays = (days) => {
    const currentDate = new Date();
    return Math.floor(currentDate.getTime() / 1000) + (days * 24 * 60 * 60);
};

const flagsMap = {
	clase_magistral: [
		{ field: "is_clasesmagistrales_user", value: true },
		{ field: "is_free_trial_user", value: true },
		{ field: "policy_pre_agreed", value: true },
		{ field: "trial_expiration_date", value: getTimestampInDays(30) },
	],
	western_union: [
		{ field: "is_freetrial_diplomado_user", value: true },
		{ field: "is_diplomado_user", value: true },
		{ field: "is_western_union_user", value: true },
		{ field: "policy_pre_agreed", value: true },
		{ field: "trial_expiration_date", value: getTimestampInDays(30) },
	],
};


/**
 * Gets the flags properties based on custom flow and current cart flow.
 * 
 * @param {boolean} customFlow - Indicates if a custom flow is used.
 * @param {string} currentCartFlow - The current cart flow type.
 * @returns {Array<Object>} The flags properties.
 */
export const getFlagsProps = (customFlow, currentCartFlow) => {
	if (customFlow && currentCartFlow) {
		return flagsMap[currentCartFlow] || [];
	}

	return [
		{ field: "is_freetrial_diplomado_user", value: true },
		{ field: "is_diplomado_user", value: true },
		{ field: "is_free_trial_user", value: true },
		{ field: "policy_pre_agreed", value: true },
		{ field: "trial_expiration_date", value: getTimestampInDays(10) },
	];
};


/**
 * Updates a student's information in Moodle.
 * 
 * @param {Object} studentData - The data of the student.
 * @param {Object} api - The API object with methods to call.
 * @param {boolean} customFlow - Indicates if a custom flow is used.
 * @param {string} currentCartFlow - The current cart flow type.
 * @returns {Promise<Object>} The response data from the API.
 * @throws {Error} If the update fails.
 */
export const updateStudent = async (studentData, api, customFlow, currentCartFlow) => {
	const currentFlags = getFlagsProps(customFlow, currentCartFlow);

	const updateStudentPayload = {
		id: studentData.results.id,
		meta: currentFlags,
	};

	const update = await api.updateStudent(updateStudentPayload);

	if (update.ok) {
		return update.json();
	}
	throw new Error('Error updating student');
};

/**
 * Converts an array of flag objects to a single object to be compatible with Amplitude.
 * 
 * @param {Array<Object>} flags - The array of flag objects.
 * @returns {Object} The converted object.
 */
const convertFlagsToObject = (flags) => {
    return flags.reduce((acc, flag) => {
        acc[flag.field] = flag.value;
        return acc;
    }, {});
};

/**
 * Prepares the properties for Amplitude event.
 * 
 * @param {number} studentID - The ID of the student.
 * @param {boolean} isCustomFlow - Indicates if a custom flow is used.
 * @param {string} currentCartFlow - The current cart flow type.
 * @param {string} currentEnrollmentID - The current enrollment ID.
 * @param {string} integrationType - The current integration type.
 * @returns {Object} The prepared properties.
 */
export const amplitudeMoodleProps = (studentID, isCustomFlow, currentCartFlow, currentEnrollmentID, integrationType) => {
	const flags = getFlagsProps(isCustomFlow, currentCartFlow);
	const flagsObject = convertFlagsToObject(flags);

	let currentEnrollmentType = integrationType + `ID`;

	return {
		userID: studentID,
		userRole: __('Alumno', 'aprende'),
		[currentEnrollmentType]: currentEnrollmentID,
		...flagsObject,
	};
};

/**
 * Gets the course ID according to the base url.
 * 
 * @param {Object} formSettings - The form settings.
 * @param {boolean} custom - Indicates if a custom course.
 * @returns {Object} The base URLs.
 */
const getCourseBaseURL = (formSettings, custom) => {
    if (custom) {
        return formSettings?.moodle_course;
    } else {
        return {
            development_id: formSettings?.program_moodle_course_dev_id,
            qa_id: formSettings?.program_moodle_course_qa_id,
            staging_id: formSettings?.program_moodle_course_staging_id,
            production_id: formSettings?.program_moodle_course_prod_id,
        };
    }
};

/**
 * Gets the cohort ID according to the base url.
 * 
 * @param {Object} formSettings - The form settings.
 * @param {boolean} custom - Indicates if custom cohort.
 * @returns {Object} The base URLs.
 */
const getCohortBaseURL = (formSettings, custom) => {
	if (custom) {
		return formSettings?.moodle_cohort;
	}

	return {
		development_id: formSettings?.program_moodle_cohort_dev_id,
		qa_id: formSettings?.program_moodle_cohort_qa_id,
		staging_id: formSettings?.program_moodle_cohort_staging_id,
		production_id: formSettings?.program_moodle_cohort_prod_id,
	};
};

/**
 * Gets the URL mapping based on the base URL.
 * 
 * @param {Object} baseURL - The base URLs.
 * @returns {Object} The URL mapping.
 */
const getUrlMapping = (baseURL) => {
	if (!baseURL) {
		return;
	}

	return {
		'https://dev.aprende.dev/': baseURL.development_id,
		'https://qa.aprende.dev/': baseURL.qa_id,
		'https://staging.aprende.dev/': baseURL.staging_id,
		'https://aprende.com/': baseURL.production_id,
	};
};

/**
 * Gets the enrollment ID based on the current domain.
 * 
 * @param {Object} formSettings - The settings for the form.
 * @param {string} type - The type of enrollment ('course' or 'cohort').
 * @param {boolean} custom - Indicates if custom URLs are used.
 * @returns {string} The enrollment ID.
 */
export const getEnrollmentIdByDomain = (formSettings, type, custom = false) => {
	const courseBaseURL = getCourseBaseURL(formSettings, custom);
	const cohortBaseURL = getCohortBaseURL(formSettings, custom);

	const baseURL = (type === 'course' ? courseBaseURL : cohortBaseURL);
	const urlMapping = getUrlMapping(baseURL);

	const currentUrl = window.location.href;
	const matchedCourseId = Object.keys(urlMapping).find(url => currentUrl.startsWith(url));

	return matchedCourseId ? urlMapping[matchedCourseId] : baseURL.qa_id;
};

/**
 * Creates the payload for enrollment.
 * 
 * @param {string} integrationType - The type of integration ('course' or 'cohort').
 * @param {string} key - The key for the payload.
 * @param {string|number} value - The value for the payload.
 * @param {string} integrationID - The integration ID.
 * @returns {Object} The enrollment payload.
 */
const createEnrollmentPayload = (integrationType, key, value, integrationID) => {
	if (!integrationID) {
		return;
	}

	if (integrationType === 'course') {
		return {
			[key]: value,
			"courses": [integrationID],
		};
	}

	return {
		[key]: value,
		"cohort": integrationID,
	};
};

/**
 * Enrolls a Moodle student in a course or cohort.
 * 
 * @param {Object} formSettings - The settings for the form.
 * @param {Object} api - The API object with methods to call.
 * @param {string} integrationType - The type of integration ('course' or 'cohort').
 * @param {boolean} custom - Indicates if it is a custom config.
 * @param {string} key - The key for the payload.
 * @param {string|number} studentID - The student ID for the payload.
 */

const enrollStudent = async (formSettings, api, integrationType, custom, key, studentID) => {
	const integrationID = getEnrollmentIdByDomain(formSettings, integrationType, custom);
	const enrollmentPayload = createEnrollmentPayload(integrationType, key, studentID, integrationID);

	if (integrationType === 'course') {
		await api.enrollToCourse(enrollmentPayload);
	} else {
		await api.enrollToCohort(enrollmentPayload);
	}
};

/**
 * Handles the enrollment of a student.
 * 
 * @param {Object} studentData - The data of the student.
 * @param {Object} formValues - The values from the form.
 * @param {Object} formSettings - The settings for the form.
 * @param {Object} api - The API object with methods to call.
 */
export const handleEnrollment = async (studentData, formValues, formSettings, api) => {
	const moodleIntegration = formSettings?.moodle_integration;
	const customIntegrationType = formSettings?.moodle_integration_type;
	const programIntegrationType = formSettings?.program_moodle_integration;
	const studentID = studentData?.results?.id;

	if (moodleIntegration === 'program') {
		await enrollStudent(formSettings, api, programIntegrationType, false, "id", studentID);
	} else {
		const key = customIntegrationType === 'course' ? "id" : "email";
		const studentData = customIntegrationType === 'course' ? studentID : formValues?.email;

		await enrollStudent(formSettings, api, customIntegrationType, true, key, studentData);
	}
};
