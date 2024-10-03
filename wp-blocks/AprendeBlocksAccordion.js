import { gql } from '@apollo/client';

export default function AprendeBlocksAccordion (props) {
	const {title} = props.attributes;

	return (
		<section className="block b-accordion-v2 l-two-columns hide-us-fl" id=""
				 data-apt-e-seen="1"
				 data-apt-key="b-accordion-v2-l-two-columns">
			<div className="container">
				<div
					className="b-accordion-v2_heading  ta-start  mb-l mx-auto col-lg-8 p-0">
					<h2 className="c-heading"
						dangerouslySetInnerHTML={{__html: title}}/>


				</div>

				<div className="b-accordion-v2_container br-s elevation-1">
					<ul className="c-accordion" data-component="1">
						<div
							className="columns-container d-grid justify-between">
							<div className="columns-container_left br-s"
								 data-slug="col-1">
								<li className="c-accordion_item p-l"
									key="necesito-tener-conocimientos-previos-para-comenzar"
									data-row="0" data-component="1"
									data-apt-e-toggled="1"
									data-apt-key="c-accordion">
									<button className="c-accordion_button">
										<div
											className="c-accordion_button_label">¿Necesito
											tener conocimientos previos para
											comenzar?
										</div>
										<div
											className="c-icon c-accordion_button_icon">
											<svg width="24px" height="24px"
												 viewBox="0 0 32 32">
												<mask id="mask_66d9c9a13571c"
													  style={{maskType: 'alpha'}}
													  maskUnits="userSpaceOnUse"
													  x="0" y="0" width="32"
													  height="32">
													<rect width="32" height="32"
														  fill="#D9D9D9"></rect>
												</mask>
												<g mask="url(#mask_66d9c9a13571c)">
													<path
														d="M16.0017 19.9333C15.8239 19.9333 15.6572 19.9056 15.5017 19.85C15.3461 19.7945 15.2017 19.7 15.0684 19.5667L8.93503 13.4333C8.69058 13.1889 8.56836 12.8778 8.56836 12.5C8.56836 12.1222 8.69058 11.8111 8.93503 11.5667C9.17947 11.3222 9.49058 11.2 9.86836 11.2C10.2461 11.2 10.5572 11.3222 10.8017 11.5667L16.0017 16.7667L21.2017 11.5667C21.4461 11.3222 21.7572 11.2 22.135 11.2C22.5128 11.2 22.8239 11.3222 23.0684 11.5667C23.3128 11.8111 23.435 12.1222 23.435 12.5C23.435 12.8778 23.3128 13.1889 23.0684 13.4333L16.935 19.5667C16.8017 19.7 16.6572 19.7945 16.5017 19.85C16.3461 19.9056 16.1795 19.9333 16.0017 19.9333Z"
														fill="#1B2631"></path>
												</g>
											</svg>

										</div>

									</button>
									<div className="c-accordion_content"><p>¡No
										te
										preocupes si eres principiante!
										Todos <strong>nuestros programas están
											pensados para que puedas aprender
											sin
											importar tu nivel de
											conocimientos.</strong> Además,
										tendrás el acompañamiento constante de
										nuestros expertos que te ayudarán
										durante
										tu aprendizaje.</p></div>
								</li>

								<li className="c-accordion_item p-l"
									key="que-necesito-para-comenzar"
									data-row="1"
									data-component="1" data-apt-e-toggled="1"
									data-apt-key="c-accordion">
									<button className="c-accordion_button">
										<div
											className="c-accordion_button_label">¿Qué
											necesito para comenzar?
										</div>
										<div
											className="c-icon c-accordion_button_icon">
											<svg width="24px" height="24px"
												 viewBox="0 0 32 32">
												<mask id="mask_66d9c9a135854"
													  style={{maskType: 'alpha'}}
													  maskUnits="userSpaceOnUse"
													  x="0" y="0" width="32"
													  height="32">
													<rect width="32" height="32"
														  fill="#D9D9D9"></rect>
												</mask>
												<g mask="url(#mask_66d9c9a135854)">
													<path
														d="M16.0017 19.9333C15.8239 19.9333 15.6572 19.9056 15.5017 19.85C15.3461 19.7945 15.2017 19.7 15.0684 19.5667L8.93503 13.4333C8.69058 13.1889 8.56836 12.8778 8.56836 12.5C8.56836 12.1222 8.69058 11.8111 8.93503 11.5667C9.17947 11.3222 9.49058 11.2 9.86836 11.2C10.2461 11.2 10.5572 11.3222 10.8017 11.5667L16.0017 16.7667L21.2017 11.5667C21.4461 11.3222 21.7572 11.2 22.135 11.2C22.5128 11.2 22.8239 11.3222 23.0684 11.5667C23.3128 11.8111 23.435 12.1222 23.435 12.5C23.435 12.8778 23.3128 13.1889 23.0684 13.4333L16.935 19.5667C16.8017 19.7 16.6572 19.7945 16.5017 19.85C16.3461 19.9056 16.1795 19.9333 16.0017 19.9333Z"
														fill="#1B2631"></path>
												</g>
											</svg>

										</div>

									</button>
									<div className="c-accordion_content"><p>Si
										tienes un <strong>dispositivo con
											conexión
											a internet y motivación por
											aprender</strong>, tienes todo lo
										necesario para comenzar a crecer y
										perfeccionar tu pasión.</p></div>
								</li>

								<li className="c-accordion_item p-l"
									key="cuanto-tiempo-al-dia-tengo-que-dedicarle"
									data-row="2" data-component="1"
									data-apt-e-toggled="1"
									data-apt-key="c-accordion">
									<button className="c-accordion_button">
										<div
											className="c-accordion_button_label">¿Cuánto
											tiempo al día tengo que dedicarle?
										</div>
										<div
											className="c-icon c-accordion_button_icon">
											<svg width="24px" height="24px"
												 viewBox="0 0 32 32">
												<mask id="mask_66d9c9a1359d8"
													  style={{maskType: 'alpha'}}
													  maskUnits="userSpaceOnUse"
													  x="0" y="0" width="32"
													  height="32">
													<rect width="32" height="32"
														  fill="#D9D9D9"></rect>
												</mask>
												<g mask="url(#mask_66d9c9a1359d8)">
													<path
														d="M16.0017 19.9333C15.8239 19.9333 15.6572 19.9056 15.5017 19.85C15.3461 19.7945 15.2017 19.7 15.0684 19.5667L8.93503 13.4333C8.69058 13.1889 8.56836 12.8778 8.56836 12.5C8.56836 12.1222 8.69058 11.8111 8.93503 11.5667C9.17947 11.3222 9.49058 11.2 9.86836 11.2C10.2461 11.2 10.5572 11.3222 10.8017 11.5667L16.0017 16.7667L21.2017 11.5667C21.4461 11.3222 21.7572 11.2 22.135 11.2C22.5128 11.2 22.8239 11.3222 23.0684 11.5667C23.3128 11.8111 23.435 12.1222 23.435 12.5C23.435 12.8778 23.3128 13.1889 23.0684 13.4333L16.935 19.5667C16.8017 19.7 16.6572 19.7945 16.5017 19.85C16.3461 19.9056 16.1795 19.9333 16.0017 19.9333Z"
														fill="#1B2631"></path>
												</g>
											</svg>

										</div>

									</button>
									<div className="c-accordion_content">
										<p>Nuestros programas están pensados
											para
											que con solo <strong>30 minutos de
												estudio al día</strong> puedas
											obtener tu certificado en 3
											meses. <strong>Puedes comenzar a
												aprender cuando
												quieras</strong> y
											estudiar a tu ritmo dedicándole el
											tiempo que tengas disponible.</p>
									</div>
								</li>

							</div>
							<div className="columns-container_right br-s"
								 data-slug="col-2">
								<li className="c-accordion_item p-l"
									key="como-obtengo-mi-certificado"
									data-row="0"
									data-component="1" data-apt-e-toggled="1"
									data-apt-key="c-accordion">
									<button className="c-accordion_button">
										<div
											className="c-accordion_button_label">¿Cómo
											obtengo mi certificado?
										</div>
										<div
											className="c-icon c-accordion_button_icon">
											<svg width="24px" height="24px"
												 viewBox="0 0 32 32">
												<mask id="mask_66d9c9a135b0e"
													  style={{maskType: 'alpha'}}
													  maskUnits="userSpaceOnUse"
													  x="0" y="0" width="32"
													  height="32">
													<rect width="32" height="32"
														  fill="#D9D9D9"></rect>
												</mask>
												<g mask="url(#mask_66d9c9a135b0e)">
													<path
														d="M16.0017 19.9333C15.8239 19.9333 15.6572 19.9056 15.5017 19.85C15.3461 19.7945 15.2017 19.7 15.0684 19.5667L8.93503 13.4333C8.69058 13.1889 8.56836 12.8778 8.56836 12.5C8.56836 12.1222 8.69058 11.8111 8.93503 11.5667C9.17947 11.3222 9.49058 11.2 9.86836 11.2C10.2461 11.2 10.5572 11.3222 10.8017 11.5667L16.0017 16.7667L21.2017 11.5667C21.4461 11.3222 21.7572 11.2 22.135 11.2C22.5128 11.2 22.8239 11.3222 23.0684 11.5667C23.3128 11.8111 23.435 12.1222 23.435 12.5C23.435 12.8778 23.3128 13.1889 23.0684 13.4333L16.935 19.5667C16.8017 19.7 16.6572 19.7945 16.5017 19.85C16.3461 19.9056 16.1795 19.9333 16.0017 19.9333Z"
														fill="#1B2631"></path>
												</g>
											</svg>

										</div>

									</button>
									<div className="c-accordion_content"><p>Al
										graduarte, podrás <strong>descargar tu
											certificado en formato
											digital</strong> sin costo alguno y
										podrás seleccionar si lo prefieres en
										inglés o en español.</p></div>
								</li>

								<li className="c-accordion_item p-l"
									key="voy-a-poder-practicar-lo-aprendido"
									data-row="1" data-component="1"
									data-apt-e-toggled="1"
									data-apt-key="c-accordion">
									<button className="c-accordion_button">
										<div
											className="c-accordion_button_label">¿Voy
											a poder practicar lo aprendido?
										</div>
										<div
											className="c-icon c-accordion_button_icon">
											<svg width="24px" height="24px"
												 viewBox="0 0 32 32">
												<mask id="mask_66d9c9a135cc4"
													  style={{maskType: 'alpha'}}
													  maskUnits="userSpaceOnUse"
													  x="0" y="0" width="32"
													  height="32">
													<rect width="32" height="32"
														  fill="#D9D9D9"></rect>
												</mask>
												<g mask="url(#mask_66d9c9a135cc4)">
													<path
														d="M16.0017 19.9333C15.8239 19.9333 15.6572 19.9056 15.5017 19.85C15.3461 19.7945 15.2017 19.7 15.0684 19.5667L8.93503 13.4333C8.69058 13.1889 8.56836 12.8778 8.56836 12.5C8.56836 12.1222 8.69058 11.8111 8.93503 11.5667C9.17947 11.3222 9.49058 11.2 9.86836 11.2C10.2461 11.2 10.5572 11.3222 10.8017 11.5667L16.0017 16.7667L21.2017 11.5667C21.4461 11.3222 21.7572 11.2 22.135 11.2C22.5128 11.2 22.8239 11.3222 23.0684 11.5667C23.3128 11.8111 23.435 12.1222 23.435 12.5C23.435 12.8778 23.3128 13.1889 23.0684 13.4333L16.935 19.5667C16.8017 19.7 16.6572 19.7945 16.5017 19.85C16.3461 19.9056 16.1795 19.9333 16.0017 19.9333Z"
														fill="#1B2631"></path>
												</g>
											</svg>

										</div>

									</button>
									<div className="c-accordion_content"><p>¡Sin
										duda alguna! Durante el
										programa, <strong>podrás
											evaluar tus conocimientos </strong>realizando
										prácticas y entregarlas por la
										plataforma
									</p></div>
								</li>

								<li className="c-accordion_item p-l"
									key="que-son-y-como-puedo-acceder-a-las-clases-en-vivo"
									data-row="2" data-component="1"
									data-apt-e-toggled="1"
									data-apt-key="c-accordion">
									<button className="c-accordion_button">
										<div
											className="c-accordion_button_label">¿Qué
											son y cómo puedo acceder a las
											clases
											en vivo?
										</div>
										<div
											className="c-icon c-accordion_button_icon">
											<svg width="24px" height="24px"
												 viewBox="0 0 32 32">
												<mask id="mask_66d9c9a135e00"
													  style={{maskType: 'alpha'}}
													  maskUnits="userSpaceOnUse"
													  x="0" y="0" width="32"
													  height="32">
													<rect width="32" height="32"
														  fill="#D9D9D9"></rect>
												</mask>
												<g mask="url(#mask_66d9c9a135e00)">
													<path
														d="M16.0017 19.9333C15.8239 19.9333 15.6572 19.9056 15.5017 19.85C15.3461 19.7945 15.2017 19.7 15.0684 19.5667L8.93503 13.4333C8.69058 13.1889 8.56836 12.8778 8.56836 12.5C8.56836 12.1222 8.69058 11.8111 8.93503 11.5667C9.17947 11.3222 9.49058 11.2 9.86836 11.2C10.2461 11.2 10.5572 11.3222 10.8017 11.5667L16.0017 16.7667L21.2017 11.5667C21.4461 11.3222 21.7572 11.2 22.135 11.2C22.5128 11.2 22.8239 11.3222 23.0684 11.5667C23.3128 11.8111 23.435 12.1222 23.435 12.5C23.435 12.8778 23.3128 13.1889 23.0684 13.4333L16.935 19.5667C16.8017 19.7 16.6572 19.7945 16.5017 19.85C16.3461 19.9056 16.1795 19.9333 16.0017 19.9333Z"
														fill="#1B2631"></path>
												</g>
											</svg>

										</div>

									</button>
									<div className="c-accordion_content">
										<p>Disponemos de una gran variedad de
											horarios y días para anotarte a
											nuestras clases en vivo. En ellas
											tendrás tendrás la oportunidad
											de <strong>interactuar con otros
												estudiantes y expertos,
												descubrir
												nuevos temas y aclarar tus
												dudas</strong>. Es como en un
											salón, pero desde cualquier lugar,
											en
											el dispositivo que prefieras y en
											una <strong>videollamada de
												Zoom</strong>.</p></div>
								</li>

							</div>
						</div>
					</ul>

				</div>


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
                className
            }
        }
	`,
	key: `AprendeBlocksAccordionFragment`,
};
