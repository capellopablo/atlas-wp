import React from 'react';
import Image from '../image/index'; // Image component

/**
 * Card component to display an image, title, text.
 *
 * @param {string} [className=''] - CSS classes to apply to the card container.
 * @param {Object} [image={}] - Image configuration object.
 * @param {string} [image.image] - URL of the image.
 * @param {string} [image.aspect] - Aspect ratio of the image (e.g., "16:9").
 * @param {boolean} [image.lazy=false] - Whether to load the image lazily.
 * @param {boolean} [image.container=false] - Whether to wrap the image in a container.
 * @param {string} [image.labelTop] - Label displayed at the top of the image.
 * @param {string} [image.labelBottom] - Label displayed at the bottom of the image.
 * @param {string} [image.labelIcon] - Icon displayed with the image label.
 * @param {string} [image.labelAlign] - Alignment of the label (e.g., "left", "center", "right").
 * @param {string} [image.title] - Title associated with the image.
 * @param {string} [image.desc] - Description or alt text for the image.
 * @param {string} [title=''] - Title of the card.
 * @param {string} [text=''] - Text content of the card.
 *
 * @returns {JSX.Element} The Card component.
 */
const Card = ({
	className = '',
	image = {},
	title = '',
	text = '',
}) => {
	return (
		<div className={`c-card d-flex direction-column br-s elevation-1 bg-white ${className}`}>
			{/* Image Section */}
			{image.source && (
				<Image
					source={image.source}
					aspect={image.aspect}
					lazy={image.lazy}
					container={image.container}
					hasPlaceholder={{
						labelTop: image.labelTop,
						labelBottom: image.labelBottom,
						labelIcon: image.labelIcon,
						labelAlign: image.labelAlign,
						title: image.title,
						desc: image.desc,
					}}
					srcset={image.srcset || []}
					alt={image.alt || ''}
				/>
			)}

			{/* Content Section */}
			{(title || text) && (
				<div className="c-card_wrapper p-m">
					<div className="c-card_content d-flex direction-column gap-s">
						{/* Card title */}
						{title && <h5 className="c-heading c-card_title">{title}</h5>}

						{/* Card text */}
						{text && <div className="c-card_message text-m"><p>{text}</p></div>}
					</div>
				</div>
			)}
		</div>
	);
};

export default Card;
