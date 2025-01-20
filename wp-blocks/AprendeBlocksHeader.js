/**
 * Custom React component for rendering the AprendeBlocksHeader.
 *
 * This component displays a header section that includes a logo, menu items, 
 * primary/secondary call-to-action buttons, and a modal for additional content.
 *
 * @module AprendeBlocksHeader
 */

import PropTypes from 'prop-types';
import { gql } from '@apollo/client';
import Button from '@aprende-com/design-system/components/Button';
import { useMediaQuery } from './hooks/useMediaQuery';
import { useModal } from './hooks/useModal';
import Modal from '../components/Modal';

/**
 * Subcomponent: Logo
 * Displays the logo in the header.
 *
 * @param {Object} props - Component props.
 * @param {string} props.image - URL of the logo image.
 * @param {string} props.imageAlt - Alt text for the logo image.
 * @returns {JSX.Element} Rendered logo component.
 */
const Logo = ({ image, imageAlt }) => (
	<div className="b-header_logo d-flex">
		<img src={image} alt={imageAlt} />
	</div>
);

Logo.propTypes = {
	image: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
};

/**
 * Subcomponent: MenuItems
 * Renders a list of menu items that can scroll to specific sections.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.menuItems - Array of menu items with titles and section IDs.
 * @param {function} props.onScrollToElement - Callback for scrolling to a specific section.
 * @returns {JSX.Element} Rendered menu items component.
 */
const MenuItems = ({ menuItems, onScrollToElement }) => (
	<div className="b-header_menu-items gap-s d-flex align-center">
		{menuItems.map((item, index) => (
			<div key={index} data-item={index}>
				{item.menuTitle && (
					<Button
						type="text"
						color="secondary"
						data={{
							'data-section-id': item?.menuID,
							'data-slug': JSON.stringify(item.menuTitle),
						}}
						onClick={() => onScrollToElement(item?.menuID)}
					>
					{item.menuTitle}
					</Button>
				)}
			</div>
		))}
	</div>
);

MenuItems.propTypes = {
	menuItems: PropTypes.arrayOf(
		PropTypes.shape({
			menuID: PropTypes.string,
			menuTitle: PropTypes.string,
		})
	).isRequired,
	onScrollToElement: PropTypes.func.isRequired,
};

/**
 * Subcomponent: HeaderActions
 * Renders primary and secondary call-to-action buttons.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.primaryCTA - Configuration for the primary button.
 * @param {Object} props.secondaryCTA - Configuration for the secondary button.
 * @param {boolean} props.isDesktop - Whether the viewport is desktop-sized.
 * @param {boolean} props.displayForm - Whether the modal form should be displayed.
 * @param {function} props.onOpenModal - Callback to open the modal.
 * @returns {JSX.Element} Rendered header actions component.
 */
const HeaderActions = ({ primaryCTA, secondaryCTA, isDesktop, displayForm, onOpenModal }) => (
	<div className="b-header_actions d-flex align-center gap-s">
		{primaryCTA && primaryCTA.text && (
			displayForm ? (
				<Button href="#" size="sm" onClick={onOpenModal}>
					{primaryCTA.text}
				</Button>
			) : (
				<Button href={primaryCTA.url} size="sm">
					{primaryCTA.text}
				</Button>
			)
		)}

		{secondaryCTA && secondaryCTA.text && isDesktop && (
			<Button href={secondaryCTA?.url} size="sm" type="text">
				{secondaryCTA.text}
			</Button>
		)}
	</div>
);

HeaderActions.propTypes = {
	primaryCTA: PropTypes.shape({
		text: PropTypes.string,
		url: PropTypes.string,
	}),
	secondaryCTA: PropTypes.shape({
		text: PropTypes.string,
		url: PropTypes.string,
	}),
	isDesktop: PropTypes.bool.isRequired,
	displayForm: PropTypes.bool.isRequired,
	onOpenModal: PropTypes.func.isRequired,
};

/**
 * Main Component: AprendeBlocksHeader
 * Renders the entire header component with a logo, menu items, actions, and modal.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.attributes - Attributes for the header component.
 * @returns {JSX.Element} Rendered AprendeBlocksHeader component.
 */
export default function AprendeBlocksHeader(props) {
	const { image, imageAlt, displayForm, menuItems: menuItemsRaw, primaryCTA: primaryCTARaw, secondaryCTA: secondaryCTARaw } = props.attributes;

	const menuItems = JSON.parse(menuItemsRaw);
	const primaryCTA = JSON.parse(primaryCTARaw);
	const secondaryCTA = JSON.parse(secondaryCTARaw);

	const { isOpen, toggleModal } = useModal();
	const isDesktop = useMediaQuery('(min-width: 769px)');

	/**
	 * Scrolls to a specific section based on its ID.
	 *
	 * @param {string} sectionID - ID of the target section.
	 */
	const handleScrollToElement = (sectionID) => {
		if (!sectionID) {
			return;
		}

		const elements = document.querySelectorAll(`[data-section-id="${sectionID}"]`);

		if (elements?.length > 1) {
			elements[1].scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<section className="block b-header bg-secondary-100" data-apt-e-seen="1" data-apt-key="b-header-l-standard">
			<div className="container d-flex justify-between p-s">
				<Logo image={image} imageAlt={imageAlt} />

				{isDesktop && <MenuItems menuItems={menuItems} onScrollToElement={handleScrollToElement} />}

				<HeaderActions
					primaryCTA={primaryCTA}
					secondaryCTA={secondaryCTA}
					isDesktop={isDesktop}
					displayForm={displayForm}
					onOpenModal={toggleModal}
				/>
			</div>

			<Modal isOpen={isOpen} onClose={toggleModal}>
				<p className="c-heading heading-5">Lorem ipsum dolor sit amet</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</Modal>
		</section>
	);
}

AprendeBlocksHeader.propTypes = {
	attributes: PropTypes.shape({
		image: PropTypes.string.isRequired,
		imageAlt: PropTypes.string.isRequired,
		menuItems: PropTypes.string.isRequired,
		primaryCTA: PropTypes.string.isRequired,
		secondaryCTA: PropTypes.string.isRequired,
		displayForm: PropTypes.bool.isRequired,
	}).isRequired,
};

AprendeBlocksHeader.displayName = 'AprendeBlocksHeader';

AprendeBlocksHeader.fragments = {
	entry: gql`
		fragment AprendeBlocksHeaderFragment on AprendeBlocksHeader {
			attributes {
			image
			imageAlt
			menuItems
			primaryCTA
			secondaryCTA
			displayForm
			}
		}
	`,
	key: `AprendeBlocksHeaderFragment`,
};
