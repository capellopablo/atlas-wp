/** Layouts */
import Standard from './layouts/standard';
import Blurbs from './layouts/blurbs';

const Benefits = ({props}) => {
	const {layout} = props.attributes;

	return (
		<>
			{layout === 'standard' && <Standard props={props} />}
			{layout === 'blurbs' && <Blurbs props={props} />}
		</>
	);
};

export default Benefits;
