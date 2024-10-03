/* eslint-disable */
import AnimatedCheck from '../Components/animatedCheck';
import React, { useRef, useEffect } from 'react';
// import { amplitudeElementEvent } from '../../../externals/amplitude';

/* eslint-disable */

const thankYouMessage = ({formSettings}) => {

	const downloadFile = formSettings?.download || null;
	const text = formSettings?.thank_you_message?.text || null;
	const downloadText = downloadFile ? text.replace('<a>', `<a href="${downloadFile}" download data-apt-e-clicked="1" data-apt-key="download-banner" data-apt-action="download" target="_blank">`) : text;

	const ref = useRef();

	useEffect(() => {
		if (!ref?.current || !downloadFile) {
			return;
		}

		const link = ref.current.querySelector('a');

		if (!link) {
			return;
		}

		link.addEventListener('click', (e) => {
			// amplitudeElementEvent(e.currentTarget, {
			// 	action: 'download',
			// 	href: downloadFile,
			// }, 'Clicked');
		});
		link.click();
	}, []);

	return (
		<div className="r-lead-form_thank-you-message bg-white d-grid elevation-2 p-2xs">
			<div className="r-lead-form_thank-you-message__content">

				<AnimatedCheck/>

				{formSettings.thank_you_message.title && (
					<p className="heading-4 ta-center mb-xs mt-l"
						dangerouslySetInnerHTML={{
							__html: formSettings.thank_you_message.title,
						}}
					/>
				)}

				{text && (
					<p className="ta-center"
						ref={ref}
						dangerouslySetInnerHTML={{
							__html: downloadFile ? downloadText : text,
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default thankYouMessage;
