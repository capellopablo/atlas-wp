import { gql } from '@apollo/client';

export default function AprendeBlocksJumbotron (props) {
	const {title} = props.attributes;

	return (
		<section
			className="block b-jumbotron-v2 l-standard bg-image-center mt-2xl mb-2xl"
			id="" data-apt-e-seen="1" data-apt-key="b-jumbotron-v2-l-standard">
			<div className="container">
				<div
					className="b-jumbotron-v2_wrapper bg-tertiary-100 justify-center ">
					<div className="b-jumbotron-v2_block-background">
					</div>

					<div
						className="b-jumbotron-v2_block-foreground b-jumbotron-v2_l-standard">

						<div
							className="b-jumbotron-v2_content d-flex direction-column align-center ta-center">
							<div className="b-jumbotron-v2_heading">
								<h2 className="c-heading mb-m" dangerouslySetInnerHTML={{__html: title}}/>


							</div>


							<a className="c-button btn-primary btn-lg mt-l"
							   target="" href="#" data-apt-e-clicked="1"
							   data-apt-key="b-jumbotron-v2-l-standard"
							   data-apt-action="" data-component="1">
								<span>Quiero conocer precios</span>
							</a>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

AprendeBlocksJumbotron.displayName = 'AprendeBlocksJumbotron';

AprendeBlocksJumbotron.fragments = {
	entry: gql`
        fragment AprendeBlocksJumbotronFragment on AprendeBlocksJumbotron {
            attributes {
                title
                className
            }
        }
	`,
	key: `AprendeBlocksJumbotronFragment`,
};
