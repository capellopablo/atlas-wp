import { gql } from '@apollo/client';
import Button from '@aprende-com/design-system/components/Button';

export default function AprendeBlocksFooter (props) {
	const {image, imageAlt, text} = props.attributes;
	const footerItems = JSON.parse(props.attributes.footerItems);

	return (
		<section className="block b-footer l-standard bg-white pb-xl pt-xl" data-apt-e-seen="1" data-apt-key="b-footer-v2-l-standard">
			<div className="container d-flex align-center justify-between pt-m">
				<div className="b-footer_logo d-flex">
					<img src={image} alt={imageAlt} />
				</div>
				<div className="b-footer_items gap-s d-flex align-center justify-center">
					{footerItems && footerItems.map((item, index) => (
						<div key={index} data-item={index}>
							{item?.link?.text && (
								<Button
									href={item?.link?.url}
									type="text"
									color="secondary"
									data={{
										'data-slug': JSON.stringify(item.link.text),
									}}
								>
								{item.link.text}
								</Button>
							)}
						</div>
					))}
					<p>{text}</p>
				</div>
			</div>
		</section>
	);
}

AprendeBlocksFooter.displayName = 'AprendeBlocksFooter';

AprendeBlocksFooter.fragments = {
	entry: gql`
        fragment AprendeBlocksFooterFragment on AprendeBlocksFooter {
            attributes {
				image
				imageAlt
                text
                footerItems
            }
        }
	`,
	key: `AprendeBlocksFooterFragment`,
};