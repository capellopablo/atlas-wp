import React from 'react';
import AreaOfInterestDropdown from './areaOfInterestDropdown';
import { areasOfInterestList } from './helpers';

const AreaOfInterestField = ({
	values,
	setAmplitudeEventChanged,
	errors,
	touched,
	formFields,
	currentStep,
	formSettings,
	setFieldValue,
}) => {
	const { presets, use_area_of_interest_custom_selection: customAreasOfInterestSelection, area_of_interest_custom_selection: customAreasOfInterest } = formFields[currentStep].fields;

	const dropdownProps = {
		formSettings,
		values,
		errors,
		touched,
		setFieldValue,
		setAmplitudeEventChanged,
		customAreasOfInterestSelection,
		customAreasOfInterest,
		areasOfInterestList,
	};

	const isAOIRelationship = false;

	const shouldRenderHiddenField = () => presets.includes('area_of_interest_hidden');
	const shouldRenderDropdown = () => presets.includes('area_of_interest') && areasOfInterestList?.length > 0 && !isAOIRelationship;

	if (shouldRenderHiddenField()) {
		return <input name="area_of_interest" type="hidden" value={values.area_of_interest} />;
	}

	if (shouldRenderDropdown()) {
		return (
			<AreaOfInterestDropdown {...dropdownProps} />
		);
	}

	return null;
};

export default AreaOfInterestField;
