import { gql } from '@apollo/client';
import Button from '@aprende-com/design-system/components/Button';
import useMediaQuery from './hooks/useMediaQuery';

export default function AprendeBlocksHeader (props) {
	const {image, imageAlt, displayForm} = props.attributes;
	const menuItems = JSON.parse(props.attributes.menuItems);
	const primaryCTA = JSON.parse(props.attributes.primaryCTA);
	const secondaryCTA = JSON.parse(props.attributes.secondaryCTA);

	const isDesktop = useMediaQuery('(min-width: 769px)');

	const handleScrollToElement = (sectionID) => {
		if (!sectionID) {
			return;
		}

		const elements = document.querySelectorAll((`[data-section-id="${sectionID}"]`));

		if (elements?.length > 1) {
			elements[1].scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<section className="block b-header bg-secondary-100" data-apt-e-seen="1" data-apt-key="b-header-l-standard">
			<div className="container d-flex justify-between p-s">
				<div className="b-header_logo d-flex">
					<img src={image} alt={imageAlt} />
				</div>

				{isDesktop && (
					<div className="b-header_menu-items gap-s d-flex align-center">
						{menuItems && menuItems.map((item, index) => (
							<div key={index} data-item={index}>
								{item.menuTitle && (
									<Button 
										type="text" 
										color="secondary"
										data={{
											'data-section-id': item?.menuID,
											'data-slug': JSON.stringify(item.menuTitle),
										}}
										onClick={() => handleScrollToElement(item?.menuID)}>
											{item.menuTitle}
									</Button>
								)}
							</div>
						))}
					</div>
				)}

				<div className="b-header_actions d-flex align-center gap-s">
					{primaryCTA && primaryCTA.text && (
						displayForm ? (
							<Button href="#" size="sm">{primaryCTA.text}</Button> 
						) : (
							<Button href={primaryCTA.url} size="sm">{primaryCTA.text}</Button>
						)
					)}

					{secondaryCTA && secondaryCTA.text && isDesktop && ( 
						<Button href={secondaryCTA?.url} size="sm" type="text">{secondaryCTA.text}</Button>
					)}
				</div>
			</div>
		</section>
	);
}

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
