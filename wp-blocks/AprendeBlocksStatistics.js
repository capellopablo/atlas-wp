import { gql } from '@apollo/client';

export default function AprendeBlocksStatistics (props) {
	const {title} = props.attributes;

	return (
		<section className="block b-statistics-v2 l-standard bg-white d-none"
				 id="" data-apt-e-seen="1"
				 data-apt-key="b-statistics-v2-l-standard">
			<div className="container">
				<div
					className="b-statistics-v2_heading mb-xl mx-auto p-0 ta-center">
					<h2 className="c-heading b-statistics-v2_title mb-m">
						<p dangerouslySetInnerHTML={{__html: title}}/></h2>


				</div>

				<div className="row justify-center gap-m ta-center">
					<div className="col-4 col-lg-3">
						<div className="column_container">
							<div
								className="column_card_number heading-1 text-secondary-600">95%
							</div>

							<div
								className="column_card_text p1 text-m heading-regular">de
								nuestros estudiantes han mejorado su calidad de
								vida gracias a Aprende Institute.
							</div>

						</div>
					</div>
					<div className="col-4 col-lg-3">
						<div className="column_container">
							<div
								className="column_card_number heading-1 text-secondary-600">78%
							</div>

							<div
								className="column_card_text p1 text-m heading-regular">de
								quienes buscaban emprender iniciaron su propio
								negocio.
							</div>

						</div>
					</div>
					<div className="col-4 col-lg-3">
						<div className="column_container">
							<div
								className="column_card_number heading-1 text-secondary-600">51%
							</div>

							<div
								className="column_card_text p1 text-m heading-regular">de
								nuestros graduados afirma haber aumentado sus
								ingresos u obtenido un ascenso.
							</div>

						</div>
					</div>
				</div>

			</div>
		</section>
	);
}

AprendeBlocksStatistics.displayName = 'AprendeBlocksStatistics';

AprendeBlocksStatistics.fragments = {
	entry: gql`
        fragment AprendeBlocksStatisticsFragment on AprendeBlocksStatistics {
            attributes {
                title
                className
            }
        }
	`,
	key: `AprendeBlocksStatisticsFragment`,
};
