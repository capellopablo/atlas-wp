import { gql } from '@apollo/client';

export default function AprendeBlocksDiploma (props) {
	const {title} = props.attributes;

	return (
		<section
			className="block b-diploma-v2 l-standard has-bg-image bg-image-center bg-tertiary-100"
			id="" data-apt-e-seen="1" data-apt-key="b-diploma-v2-l-standard">
			<div className="b-diploma-v2_background bg-white"></div>
			<div
				className="b-diploma-v2_wrapper container d-flex justify-center align-center direction-column">
				<div className="b-diploma-v2_diploma elevation-2">
					<img decoding="async"
						 src="https://qa.aprende.dev/wp-content/themes/aprende21/dist/images/certificado.webp?id=7320e6951fce1e257ba11ea0fde41b9e"
						 className="c-image entered lazyloaded"
						 data-lazy-src="https://qa.aprende.dev/wp-content/themes/aprende21/dist/images/certificado.webp?id=7320e6951fce1e257ba11ea0fde41b9e"
						 data-ll-status="loaded"/>
					<noscript><img decoding="async"
								   src="https://qa.aprende.dev/wp-content/themes/aprende21/dist/images/certificado.webp?id=7320e6951fce1e257ba11ea0fde41b9e"
								   className="c-image"/></noscript>
				</div>
				<div className="b-diploma-v2_content">
					<h2 className="c-heading" dangerouslySetInnerHTML={{__html: title}}/>

					<div className="b-diploma-v2_description">
						<p>Al finalizar tus estudios, te otorgamos un
							certificado
							en formato digital que avala los conocimientos
							adquiridos, ayudándote a destacar en el mercado
							laboral y abriéndote un mundo de posibilidades</p>

					</div>
				</div>
			</div>
		</section>
	);
}

AprendeBlocksDiploma.displayName = 'AprendeBlocksDiploma';

AprendeBlocksDiploma.fragments = {
	entry: gql`
        fragment AprendeBlocksDiplomaFragment on AprendeBlocksDiploma {
            attributes {
                title
                className
            }
        }
	`,
	key: `AprendeBlocksDiplomaFragment`,
};
