import { gql } from '@apollo/client';
import Button from '@aprende-com/design-system/components/Button';
import Card from '../components/card/index';

export default function AprendeBlocksBenefits (props) {
	const {title, subtitle} = props.attributes;
	const benefitsItems = JSON.parse(props.attributes.benefitsItems);

console.log('benefitsItems', benefitsItems)

	return (
	<section
		className="block b-benefits-v2 l-standard bg-white"
		id=""
		data-apt-e-seen="1"
		data-apt-key="b-benefits-v2-l-blurbs-icon"
	>
		<div className="container">
			<div className="b-benefits-v2_heading mb-2xl mx-auto ta-center col-lg-8 p-0">
				<h3 className="c-heading heading-3 gap-s" dangerouslySetInnerHTML={{ __html: title }} />
				<p className="c-heading heading-5 gap-l" dangerouslySetInnerHTML={{ __html: subtitle }} />
			</div>

			<div className="b-benefits-v2_container mt-xl">
				<div className="col-4 col-md-3 col-lg-4 ">
					{benefitsItems && benefitsItems.map((item, index) => (
						<div
							key={index}
							className="b-benefits-v2_item"
							data-slug={`benefit-item-${index}`}
							data-col={index}
						>
						<Card
							image={{
								source: item.imageUrl,
								aspect: "16:9",
								container: false,
								alt: item.benefitsTitle || "",
							}}
							title={item.benefitsTitle || ""}
							text={item.benefitsText || ""}
						/>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>

	);
}

AprendeBlocksBenefits.displayName = 'AprendeBlocksBenefits';

AprendeBlocksBenefits.fragments = {
	entry: gql`
        fragment AprendeBlocksBenefitsFragment on AprendeBlocksBenefits {
            attributes {
                title
				subtitle
                className
				benefitsItems
            }
        }
	`,
	key: `AprendeBlocksBenefitsFragment`,
};
