import Dropdown from '@aprende-com/design-system/components/Dropdown';
import { generateOptions, getDefaultValue, handleSelect } from './helpers';

/**
 * AreaOfInterestDropdown component.
 * 
 * @param {Object} props - Component props.
 * @param {Object} props.formSettings - Form settings.
 * @param {Object} props.values - Form values.
 * @param {Object} props.errors - Form errors.
 * @param {Object} props.touched - Touched fields.
 * @param {Function} props.setFieldValue - Function to set form field value.
 * @param {Function} props.setAmplitudeEventChanged - Function to set Amplitude event.
 * @param {boolean} props.customAreasOfInterestSelection - Flag to indicate custom areas of interest selection.
 * @param {Array} props.customAreasOfInterest - Array of custom areas of interest.
 * @param {Array} props.areasOfInterestList - List of areas of interest.
 * @returns {JSX.Element} The AreaOfInterestDropdown component.
 */
const AreaOfInterestDropdown = ({
	formSettings,
	values,
	errors,
	touched,
	setFieldValue,
	setAmplitudeEventChanged,
	customAreasOfInterestSelection,
	customAreasOfInterest,
	areasOfInterestList,
}) => {

	let options = [];
	
	if (customAreasOfInterestSelection) {
		options = generateOptions(customAreasOfInterest, areasOfInterestList);
	} else {
		options = generateOptions(areasOfInterestList.map(area => area.value), areasOfInterestList);
	}

	const selectedOption = options.find(option => option.value === values.area_of_interest);

	const itemProps = {
		'data-apt-key': 'areaOfInterest',
		'data-apt-e-changed': '1',
	};

	return (
		<Dropdown
			data={{'data-field': 'areaOfInterest'}}
			label={formSettings.area_of_interest_label}
			value={getDefaultValue(selectedOption, values, areasOfInterestList)} 
			options={options}
			itemData={itemProps}
			errorText={errors.area_of_interest && touched.area_of_interest ? errors.area_of_interest : ''}
			error={!!(errors.area_of_interest && touched.area_of_interest)}
			onSelect={(e, item) => {
				handleSelect(e, item, formSettings, setFieldValue, setAmplitudeEventChanged, item.value);
				setFieldValue('area_of_interest', item.value);
			}}
		/>
	);
};

export default AreaOfInterestDropdown;
