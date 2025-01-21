import { gql } from '@apollo/client';
import Benefits from './benefits/index';

export default function AprendeBlocksBenefits (props) {
	return (
		<Benefits props={props} />
	);
}

AprendeBlocksBenefits.displayName = 'AprendeBlocksBenefits';

AprendeBlocksBenefits.fragments = {
	entry: gql`
		fragment AprendeBlocksBenefitsFragment on AprendeBlocksBenefits {
			attributes {
				layout
				title
				subtitle
				className
				benefitsItems
				linkData
				blurbsItems
				blurbsTitle
				blurbsSubtitle
				background
			}
		}
	`,
	key: `AprendeBlocksBenefitsFragment`,
};
