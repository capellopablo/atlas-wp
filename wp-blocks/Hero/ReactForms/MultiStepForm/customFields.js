/* eslint-disable */
import React, { useEffect } from 'react';
import Input from '@aprende-com/design-system/components/Input';
import Dropdown from '@aprende-com/design-system/components/Dropdown';
import Checkbox from '@aprende-com/design-system/components/Checkbox';
import RadioButton from '@aprende-com/design-system/components/RadioButton';

const CustomFields = ({
	values,
	formFields,
	currentStep,
	setFieldValue,
	errors,
	handleBlur,
	handleChange,
}) => (
	<>
		{formFields[currentStep].fields.custom.map((field, index) => {
			const requiredField = field.required;

			{/* Set values in Input Hidden field */}
			useEffect(() => {
				if (field.type === 'hidden') {
					setFieldValue(field.name, field.value);
				}
			}, [field, setFieldValue]);
		
			return (
				<div key={index} data-field={field.name}>

					{/* Input Hidden Field */}
					{field.type === 'hidden' && (
						<input
							type="hidden"
							key={field.name}
							name={field.name}
							value={field.value}
						/>
					)}

					{/* Input Text Field */}	
					{field.type === 'text' && (
						<div>
							<Input
								type="text"
								name={field.name}
								value={values.customText}
								label={field.label}
								onChange={(e) => {
									handleChange(e);
									setFieldValue(field.name, e.target.value);
									if (requiredField) delete errors[field.name];
								}}
								onBlur={handleBlur}
								error={!!errors[field.name]}
								errorText={errors[field.name] ? errors[field.name] : ''}
							/>
						</div>
					)}

					{/* Dropdown Field */}
					{field.type === 'select' && (
						<div>
							<Dropdown
								label={field.label}
								options={field.options.map((item) => ({ item }))}
								error={!!errors[field.name]}
								errorText={errors[field.name] ? errors[field.name] : ''}
								onSelect={(e, selectedOption) => {
									setFieldValue(field.name, selectedOption.item);
									if (requiredField) delete errors[field.name];
								}}
							/>
						</div>
					)}

					{/* RadioButton Field */}		
					{field.type === 'radio' && (
						<div className="pt-xs pb-m">
							<div className="text-m mb-2xs">{field.label}</div>

							<div className="d-flex pl-2xs wrap-wrap">
								{field.options.map((item) => (
									<RadioButton
										key={item}
										id={item}
										name="custom_radio"
										className="mr-s"
										value={item}
										label={item}
										onChange={(e) => {
											setFieldValue(field.name, e.target.value);
										}}
									/>
								))}
							</div>
							{errors[field.name] && (
								<div className="c-input_error d-block">{errors[field.name]}</div>
							)}
						</div>
					)}

					{/* Checkbox Field */}
					{field.type === 'checkbox' && (
						<div className="pt-xs pb-m" key={field}>
							<div className="text-m mb-2xs">{field.label}</div>

							<div className="d-flex pl-2xs wrap-wrap">
								{field.options.map((item) => (
									<Checkbox
										key={item}
										id={item}
										label={item}
										value={item}
										className="mr-s"
										initialChecked={field.value === item.toString()}
										onChange={(isChecked) => {
											setFieldValue(
												field.name,
												isChecked ? item.toString() : ""
											);
											if (requiredField) delete errors[field.name];
										}}
									/>
								))}
							</div>
							{errors[field.name] && (
								<div className="c-input_error d-block">{errors[field.name]}</div>
							)}
						</div>
					)}

				</div>
			);
		})}
	</>
);

export default CustomFields;
