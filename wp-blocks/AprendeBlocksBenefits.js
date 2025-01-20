import { gql } from '@apollo/client';
import Button from '@aprende-com/design-system/components/Button';

export default function AprendeBlocksBenefits (props) {
	const {title} = props.attributes;

	return (
		<section
			className="block b-benefits-v2 l-blurbs-icon bg-secondary-700 hide-us-fl"
			data-section-id="benefits-standard-block" data-apt-e-seen="1"
			data-apt-key="b-benefits-v2-l-blurbs-icon">
			<div className="container">
				<div
					className="b-benefits-v2_heading mb-2xl mx-auto ta-center col-lg-8 p-0">
					<h2 className="c-heading mb-m" dangerouslySetInnerHTML={{__html: title}}/>


				</div>

				<div className="b-benefits-v2_container mt-xl">
					<div className="row justify-center">
						<div
							className="col-4 col-md-3 col-lg-4 b-benefits-v2_item gap-m d-flex "
							data-slug="estudia-a-tu-ritmo" data-col="0">

							<div
								className="b-benefits-v2_item d-flex c-standard_icon container-simple">
								<picture className="c-image">
									<img decoding="async" width="72" height="72"
										 src="https://qa.aprende.dev/wp-content/uploads/2022/10/alarm1.5x1.svg"
										 className="img-fluid entered lazyloaded"
										 alt="" srcSet="" lazy="1"
										 data-lazy-src="https://qa.aprende.dev/wp-content/uploads/2022/10/alarm1.5x1.svg"
										 data-ll-status="loaded"/>
									<noscript><img decoding="async" width="72"
												   height="72"
												   src="https://qa.aprende.dev/wp-content/uploads/2022/10/alarm1.5x1.svg"
												   className="img-fluid" alt=""
												   srcSet="" loading="lazy"
												   lazy="1"/></noscript>
								</picture>


								<div
									className="b-benefits-v2_content d-flex gap-2xs direction-column">
									<h2 className="c-heading heading-5 b-benefits-v2_title">Estudia
										a tu Ritmo</h2>

									<div className="b-benefits-v2_blurbs-text">
										<p>Tú decides cuándo y dónde. Estudia
											desde tu casa como si estuvieras en
											el salón de clases sin perderte de
											nada.</p>

									</div>
								</div>
							</div>

						</div>
						<div
							className="col-4 col-md-3 col-lg-4 b-benefits-v2_item gap-m d-flex "
							data-slug="crece-junto-a-los-mejores-expertos"
							data-col="1">

							<div
								className="b-benefits-v2_item d-flex c-standard_icon container-simple">
								<picture className="c-image">
									<img decoding="async" width="72" height="72"
										 src="https://qa.aprende.dev/wp-content/uploads/2022/10/support_agent1.5x1.svg"
										 className="img-fluid entered lazyloaded"
										 alt="expertos" srcSet="" lazy="1"
										 data-lazy-src="https://qa.aprende.dev/wp-content/uploads/2022/10/support_agent1.5x1.svg"
										 data-ll-status="loaded"/>
									<noscript><img decoding="async" width="72"
												   height="72"
												   src="https://qa.aprende.dev/wp-content/uploads/2022/10/support_agent1.5x1.svg"
												   className="img-fluid"
												   alt="expertos" srcSet=""
												   loading="lazy" lazy="1"/>
									</noscript>
								</picture>


								<div
									className="b-benefits-v2_content d-flex gap-2xs direction-column">
									<h2 className="c-heading heading-5 b-benefits-v2_title">Crece
										junto a los mejores expertos</h2>

									<div className="b-benefits-v2_blurbs-text">
										<p>Aprende de nuestros expertos
											disponibles en todo momento para
											asesorarte y resolver tus dudas.</p>

									</div>
								</div>
							</div>

						</div>
						<div
							className="col-4 col-md-3 col-lg-4 b-benefits-v2_item gap-m d-flex "
							data-slug="obten-tu-certificado" data-col="2">

							<div
								className="b-benefits-v2_item d-flex c-standard_icon container-simple">
								<picture className="c-image">
									<img decoding="async" width="72" height="72"
										 src="https://qa.aprende.dev/wp-content/uploads/2022/10/history_edu_2colors1.5x1.svg"
										 className="img-fluid entered lazyloaded"
										 alt="" srcSet="" lazy="1"
										 data-lazy-src="https://qa.aprende.dev/wp-content/uploads/2022/10/history_edu_2colors1.5x1.svg"
										 data-ll-status="loaded"/>
									<noscript><img decoding="async" width="72"
												   height="72"
												   src="https://qa.aprende.dev/wp-content/uploads/2022/10/history_edu_2colors1.5x1.svg"
												   className="img-fluid" alt=""
												   srcSet="" loading="lazy"
												   lazy="1"/></noscript>
								</picture>


								<div
									className="b-benefits-v2_content d-flex gap-2xs direction-column">
									<h2 className="c-heading heading-5 b-benefits-v2_title">Obtén
										tu certificado</h2>

									<div className="b-benefits-v2_blurbs-text">
										<p>Al finalizar tus estudios, recibirás
											un certificado digital que avala tus
											habilidades y te destaca en el
											mercado laboral.</p>

									</div>
								</div>
							</div>

						</div>
						<div
							className="col-4 col-md-3 col-lg-4 b-benefits-v2_item gap-m d-flex "
							data-slug="forma-parte-de-nuestra-comunidad"
							data-col="3">

							<div
								className="b-benefits-v2_item d-flex c-standard_icon container-simple">
								<picture className="c-image">
									<source media="(max-width: 72px)"
											data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups.png"
											srcSet="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups.png"/>
									<source media="(max-width: 16px)"
											data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups-16x16.png"
											srcSet="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups-16x16.png"/>
									<img decoding="async" width="72" height="72"
										 src="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups.png"
										 className="img-fluid entered lazyloaded"
										 alt=""
										 data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups.png 72w, https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups-16x16.png 16w"
										 lazy="1"
										 data-lazy-sizes="(max-width: 72px) 100vw, 72px"
										 data-lazy-src="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups.png"
										 data-ll-status="loaded"
										 sizes="(max-width: 72px) 100vw, 72px"
										 srcSet="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups.png 72w, https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups-16x16.png 16w"/>
									<noscript><img decoding="async" width="72"
												   height="72"
												   src="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups.png"
												   className="img-fluid" alt=""
												   srcSet="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups.png 72w, https://qa.aprende.dev/wp-content/uploads/2023/02/icon-groups-16x16.png 16w"
												   loading="lazy" lazy="1"
												   sizes="(max-width: 72px) 100vw, 72px"/>
									</noscript>
								</picture>


								<div
									className="b-benefits-v2_content d-flex gap-2xs direction-column">
									<h2 className="c-heading heading-5 b-benefits-v2_title">Forma
										parte de nuestra comunidad</h2>

									<div className="b-benefits-v2_blurbs-text">
										<p>Conéctate con otros estudiantes y
											comparte ideas y conocimientos en
											nuestros exclusivos grupos de
											Facebook.</p>

									</div>
								</div>
							</div>

						</div>
						<div
							className="col-4 col-md-3 col-lg-4 b-benefits-v2_item gap-m d-flex "
							data-slug="practica-lo-aprendido" data-col="4">

							<div
								className="b-benefits-v2_item d-flex c-standard_icon container-simple">
								<picture className="c-image">
									<source media="(max-width: 72px)"
											data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square.png"
											srcSet="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square.png"/>
									<source media="(max-width: 16px)"
											data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square-16x16.png"
											srcSet="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square-16x16.png"/>
									<img decoding="async" width="72" height="72"
										 src="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square.png"
										 className="img-fluid entered lazyloaded"
										 alt=""
										 data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square.png 72w, https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square-16x16.png 16w"
										 lazy="1"
										 data-lazy-sizes="(max-width: 72px) 100vw, 72px"
										 data-lazy-src="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square.png"
										 data-ll-status="loaded"
										 sizes="(max-width: 72px) 100vw, 72px"
										 srcSet="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square.png 72w, https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square-16x16.png 16w"/>
									<noscript><img decoding="async" width="72"
												   height="72"
												   src="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square.png"
												   className="img-fluid" alt=""
												   srcSet="https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square.png 72w, https://qa.aprende.dev/wp-content/uploads/2023/02/icon-edit-square-16x16.png 16w"
												   loading="lazy" lazy="1"
												   sizes="(max-width: 72px) 100vw, 72px"/>
									</noscript>
								</picture>


								<div
									className="b-benefits-v2_content d-flex gap-2xs direction-column">
									<h2 className="c-heading heading-5 b-benefits-v2_title">Practica
										lo aprendido</h2>

									<div className="b-benefits-v2_blurbs-text">
										<p>Refuerza tus habilidades con
											proyectos prácticos aplicados a
											casos reales en cada curso.</p>

									</div>
								</div>
							</div>

						</div>
						<div
							className="col-4 col-md-3 col-lg-4 b-benefits-v2_item gap-m d-flex "
							data-slug="acceso-ilimitado-a-clases-en-vivo"
							data-col="5">

							<div
								className="b-benefits-v2_item d-flex c-standard_icon container-simple">
								<picture className="c-image">
									<img decoding="async" width="72" height="72"
										 src="https://qa.aprende.dev/wp-content/uploads/2022/10/smart_display1.5x1.svg"
										 className="img-fluid entered lazyloaded"
										 alt="" srcSet="" lazy="1"
										 data-lazy-src="https://qa.aprende.dev/wp-content/uploads/2022/10/smart_display1.5x1.svg"
										 data-ll-status="loaded"/>
									<noscript><img decoding="async" width="72"
												   height="72"
												   src="https://qa.aprende.dev/wp-content/uploads/2022/10/smart_display1.5x1.svg"
												   className="img-fluid" alt=""
												   srcSet="" loading="lazy"
												   lazy="1"/></noscript>
								</picture>


								<div
									className="b-benefits-v2_content d-flex gap-2xs direction-column">
									<h2 className="c-heading heading-5 b-benefits-v2_title">Acceso
										ilimitado a clases en vivo</h2>

									<div className="b-benefits-v2_blurbs-text">
										<p>Complementa tu aprendizaje con clases
											interactivas dirigidas por expertos
											cualquier día de la semana.</p>

									</div>
								</div>
							</div>

						</div>

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
                className
            }
        }
	`,
	key: `AprendeBlocksBenefitsFragment`,
};
