import { gql } from '@apollo/client';
import useHeaders from './hooks/useHeaders';

export default function AprendeBlocksText (props) {
	const {title} = props.attributes;
	const headersData = useHeaders();

	return (
		<section
			className="block b-text-v2 l-image-right bg-white pb-3xl pt-3xl"
			id="" data-apt-e-seen="1" data-apt-key="b-text-v2-l-image-right">

			{headersData?.country === 'AR' && (
				<div className="container heading-3 m-l">This text will only be visible to users from AR</div>
			)}

			<div className="container">
				<div className="row justify-center direction-row-r">
					<div className="col-4 col-md-3 col-lg-5">
						<div className="b-text-v2_image">
							<picture className="c-image image-mask"
									 style={{'--aspect-ratio': '66.6666666667%'}}>
								<source media="(max-width: 397px)"
										data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello.png"
										srcSet="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello.png"/>
								<source media="(max-width: 330px)"
										data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-330x185.png"
										srcSet="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-330x185.png"/>
								<source media="(max-width: 292px)"
										data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-292x164.png"
										srcSet="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-292x164.png"/>
								<source media="(max-width: 328px)"
										data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-328x184.png"
										srcSet="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-328x184.png"/>
								<source media="(max-width: 288px)"
										data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-288x162.png"
										srcSet="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-288x162.png"/>
								<source media="(max-width: 16px)"
										data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-16x9.png"
										srcSet="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-16x9.png"/>
								<img decoding="async" width="397"
									 height="224"
									 src="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello.png"
									 className="img-fluid entered lazyloaded"
									 alt=""
									 data-lazy-srcset="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello.png 397w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-330x185.png 330w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-292x164.png 292w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-328x184.png 328w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-288x162.png 288w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-16x9.png 16w"
									 lazy="1"
									 data-lazy-sizes="(max-width: 397px) 100vw, 397px"
									 data-lazy-src="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello.png"
									 data-ll-status="loaded"
									 sizes="(max-width: 397px) 100vw, 397px"
									 srcSet="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello.png 397w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-330x185.png 330w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-292x164.png 292w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-328x184.png 328w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-288x162.png 288w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-16x9.png 16w"/>
								<noscript><img decoding="async" width="397"
											   height="224"
											   src="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello.png"
											   className="img-fluid" alt=""
											   srcSet="https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello.png 397w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-330x185.png 330w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-292x164.png 292w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-328x184.png 328w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-288x162.png 288w, https://qa.aprende.dev/wp-content/uploads/2024/06/RemarketingSello-16x9.png 16w"
											   loading="lazy" lazy="1"
											   sizes="(max-width: 397px) 100vw, 397px"/>
								</noscript>
							</picture>


						</div>
					</div>

					<div
						className="col-4 col-md-5 col-lg-7 d-flex direction-column justify-center align-end pl-l pr-l text-box">
						<h2 className="c-heading mb-m"
							dangerouslySetInnerHTML={{__html: title}}/>


						<a className="c-button btn-primary btn-lg b-text-v2_button mt-xl"
						   target="" href="#" data-apt-e-clicked="1"
						   data-apt-key="b-text-v2-l-image-right-button"
						   data-apt-action="" data-component="1">
							<span>Completar registro</span>
						</a>

					</div>
				</div>
			</div>
		</section>
	);
}

AprendeBlocksText.displayName = 'AprendeBlocksText';

AprendeBlocksText.fragments = {
	entry: gql`
        fragment AprendeBlocksTextFragment on AprendeBlocksText {
            attributes {
                title
                className
            }
        }
	`,
	key: `AprendeBlocksTextFragment`,
};