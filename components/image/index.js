import React from 'react';
import { convertAspectToPercentage } from './helpers'; // Helper function

/**
 * A React component for rendering an image with optional placeholders and responsive sources.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.source - The URL of the image to display.
 * @param {boolean} [props.lazy=false] - Whether the image should be lazy-loaded (default is false).
 * @param {string} [props.aspect=''] - The aspect ratio for the image, used as a CSS variable. E.g. "16:9".
 * @param {Object|null} [props.hasPlaceholder=null] - Configuration for the placeholder content.
 * @param {string} [props.hasPlaceholder.labelTop] - Text to display at the top of the placeholder.
 * @param {string} [props.hasPlaceholder.labelBottom] - Text to display at the bottom of the placeholder.
 * @param {string} [props.hasPlaceholder.labelAlign=''] - Alignment for the placeholder labels ('left', 'center', or 'right').
 * @param {string} [props.hasPlaceholder.labelIcon] - The URL of an icon to display in the placeholder labels.
 * @param {string} [props.hasPlaceholder.title] - The title text for the placeholder content.
 * @param {string} [props.hasPlaceholder.desc] - The description text for the placeholder content.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the `<picture>` element.
 * @param {Array} [props.srcset=[]] - Array of source objects for responsive images with different resolutions.
 * @param {string} [props.alt=''] - Alternative text for the image, providing accessibility and fallback information.
 * @param {number|string} [props.width=''] - Width of the image. Can be a string (e.g. '100%') or a number (in pixels).
 * @param {number|string} [props.height=''] - Height of the image. Can be a string (e.g. 'auto') or a number (in pixels).
 * @returns {JSX.Element} A React element that displays an image with optional placeholders and responsive sources.
 */
const Image = ({
	source,
	lazy = false,
	aspect = '',
	hasPlaceholder = null,
	className = '',
	srcset = [],
	alt = '',
	width = '',
	height = '',
  }) => {
	const aspectRatio = convertAspectToPercentage(aspect);

	return (
	  <>
		{hasPlaceholder && (
			<div className="c-image__has-placeholder">
				{/* Placeholder */}
				<div className="c-image-placeholder">
					{hasPlaceholder.labelTop && (
						<div className={`label-top ${hasPlaceholder.labelAlign || ''}`}>
							{hasPlaceholder.labelIcon && <img src={hasPlaceholder.labelIcon} alt="icon" />}
							{hasPlaceholder.labelTop}
						</div>
					)}
					{hasPlaceholder.labelBottom && (
						<div className={`label-bottom ${hasPlaceholder.labelAlign || ''}`}>
							{hasPlaceholder.labelIcon && <img src={hasPlaceholder.labelIcon} alt="icon" />}
							{hasPlaceholder.labelBottom}
						</div>
					)}
					{hasPlaceholder.title && <p className="c-image-placeholder__title">{hasPlaceholder.title}</p>}
					{hasPlaceholder.desc && <p className="c-image-placeholder__subject">{hasPlaceholder.desc}</p>}
				</div>
			</div>
		)}

		 <picture
			className={`c-image image-mask ${className}`}
			style={aspectRatio ? { '--aspect-ratio': `${aspectRatio}%` } : ''}
		>
			{srcset.map((source, index) => (
				<source
					key={index}
					media={source.media}
					srcSet={source.srcSet}
					data-lazy-srcset={source.dataLazySrcset}
				/>
			))}
			<img
				src={source}
				alt={alt || ''}
				loading={lazy ? 'lazy' : 'eager'}
				decoding="async"
				width={width}
				height={height}
				srcSet={srcset.length ? srcset[0].srcSet : ''}
				className="img-fluid"
			/>
		</picture>
	  </>
	);
  };

export default Image;
