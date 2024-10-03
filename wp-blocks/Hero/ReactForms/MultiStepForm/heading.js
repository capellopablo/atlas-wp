/* eslint-disable */

const Heading = ({ formSettings, formFields, currentStep }) => {

	const currentStepField = formFields[currentStep]?.fields;
	const currentStepTitle = currentStepField?.title ?? null;
	const currentStepSubtitle = currentStepField?.subtitle ?? null;

	return (
		<div>
			{(!currentStepTitle && !currentStepSubtitle) ? (
				<>
					{formSettings?.title &&  (
						<h5 className="r-lead-form_heading sm ta-center mb-2xs">{formSettings.title}</h5>
					)}

					{formSettings?.subtitle &&  (
						<p className="text-m ta-center mb-m" dangerouslySetInnerHTML={{ __html: formSettings.subtitle }}></p>
					)}
				</>
			) : (
				<>
					{currentStepTitle && (
						<h5 className="r-lead-form_heading sm ta-center mb-2xs">{currentStepTitle}</h5>
					)}

					{currentStepSubtitle && (
						<p className="text-m ta-center mb-m" dangerouslySetInnerHTML={{ __html: currentStepSubtitle }}></p>
					)}
				</>
			)}
		</div>
	);
};

export default Heading;
