import { gql } from '@apollo/client';
import Accordion from '@aprende-com/design-system/components/Accordion';

export default function AprendeBlocksAccordion (props) {
	const {title, accordionItems} = props.attributes;

	// Ensure that accordionItems is an array of objects and format it accordingly
	const accordionItemsFormated = (() => {
		if (typeof accordionItems === 'string') {
			try {
				const parsedData = JSON.parse(accordionItems);
				return Array.isArray(parsedData)
					? parsedData.map(item => ({
						content: item.accordionText,
						label: item.accordionTitle,
					}))
					: [];
			} catch (error) {
				console.error('Error parsing accordionItems JSON:', error);
			return [];
			}
		}

		return Array.isArray(accordionItems)
			? accordionItems.map(item => ({
				content: item.accordionText,
				label: item.accordionTitle,
			}))
			: [];
		})();

	return (
		<section 
			className="block b-accordion-v2 l-default margin-t-b"
			id="b-accordion-v2"
			data-apt-e-seen="1"
			data-apt-key="b-accordion-v2-l-default">
			<div className="container">
				{title && (
					<div className="b-accordion-v2_heading ta-center mb-m mx-auto col-lg-8 p-0">
						<h3 className="c-heading text-secondary" dangerouslySetInnerHTML={{__html: title}}/>
					</div>
				)}
				{accordionItemsFormated.length > 0 && (
					<div className="b-accordion-v2_container mx-auto my-0">
						<Accordion
							accordions={accordionItemsFormated}
							className="gap-xsmall text-m"
						/>
					</div>
				)}
			</div>
		</section>
	);
}

AprendeBlocksAccordion.displayName = 'AprendeBlocksAccordion';

AprendeBlocksAccordion.fragments = {
	entry: gql`
        fragment AprendeBlocksAccordionFragment on AprendeBlocksAccordion {
            attributes {
                title
				accordionItems
                className
            }
        }
	`,
	key: `AprendeBlocksAccordionFragment`,
};
