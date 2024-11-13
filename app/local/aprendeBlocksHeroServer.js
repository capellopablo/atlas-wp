import { headers } from 'next/headers';
import AprendeBlocksHero from '../../wp-blocks/index';

export default async function AprendeBlocksHero(props) {
	const headersInstance = headers();

	return (
		<AprendeBlocksHero props={props} headersInstance={headersInstance} />
	);
}
