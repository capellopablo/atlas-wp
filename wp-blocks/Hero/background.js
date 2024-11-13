export default function BackgroundImageHero (props) {

	const currentImageSrc = props.country === 'AR' ? "https://qa.aprende.dev/wp-content/uploads/2022/03/V02_L_BARTENDER_HOSPITALIDAD_001-copia.webp" : "https://qa.aprende.dev/wp-content/uploads/2022/12/Hero-Desktop-COSMETOLOGIA-RMKT.webp"
	const currentImageSrcSet = props.country === 'AR' ? "https://qa.aprende.dev/wp-content/uploads/2022/03/V02_L_BARTENDER_HOSPITALIDAD_001-copia.webp 1920w, https://qa.aprende.dev/wp-content/uploads/2022/03/V02_L_BARTENDER_HOSPITALIDAD_001-copia-600x269.webp 600w, https://qa.aprende.dev/wp-content/uploads/2022/03/V02_L_BARTENDER_HOSPITALIDAD_001-copia-16x7.webp 16w, https://qa.aprende.dev/wp-content/uploads/2022/03/V02_L_BARTENDER_HOSPITALIDAD_001-copia-450x202.webp 450w, https://qa.aprende.dev/wp-content/uploads/2022/03/V02_L_BARTENDER_HOSPITALIDAD_001-copia-700x314.webp 700w, https://qa.aprende.dev/wp-content/uploads/2022/03/V02_L_BARTENDER_HOSPITALIDAD_001-copia-1400x627.webp 1400w" : "https://qa.aprende.dev/wp-content/uploads/2022/12/Hero-Desktop-COSMETOLOGIA-RMKT.webp 1920w, https://qa.aprende.dev/wp-content/uploads/2022/12/Hero-Desktop-COSMETOLOGIA-RMKT-600x269.webp 600w, https://qa.aprende.dev/wp-content/uploads/2022/12/Hero-Desktop-COSMETOLOGIA-RMKT-16x7.webp 16w, https://qa.aprende.dev/wp-content/uploads/2022/12/Hero-Desktop-COSMETOLOGIA-RMKT-450x202.webp 450w, https://qa.aprende.dev/wp-content/uploads/2022/12/Hero-Desktop-COSMETOLOGIA-RMKT-700x314.webp 700w, https://qa.aprende.dev/wp-content/uploads/2022/12/Hero-Desktop-COSMETOLOGIA-RMKT-1400x627.webp 1400w"

	return (
		<div
			className="b-hero-v2_block-background large_gradient  b-hero-v2_form-background ">
			<div className="image-desktop" style={{display: 'none'}}>
				<div className="progressive-image">
					<picture
						className="c-image progressive-image_picture progressive-image_picture__visible">
						<img width="1920" height="860" data-src="loaded"
							 className="img-fluid" alt="" data-srcset="loaded"
							 lazy="" sizes="(max-width: 1920px) 100vw, 1920px"
							 src={currentImageSrc}
							 srcSet={currentImageSrcSet} />
					</picture>

					<div
						className="c-image progressive-image_placeholder progressive-image_placeholder__hidden">
						<img decoding="async"
						     src={currentImageSrc}
							 width="16" height="7"
							 className="progressive-image_placeholder no-lazy"/>
					</div>
					<noscript><img decoding="async" width="1920" height="860"
								   src={currentImageSrc}
								   className="img-fluid" alt=""
								   srcSet={currentImageSrcSet}
								   lazy=""
								   sizes="(max-width: 1920px) 100vw, 1920px"/>
					</noscript>

				</div>
			</div>
			<div className="image-mobile">
				<div className="progressive-image">
					<picture
						className="c-image progressive-image_picture progressive-image_picture__visible">
						<img width="1554" height="979" data-src="loaded"
							 className="img-fluid" alt="" data-srcset="loaded"
							 lazy="" sizes="(max-width: 1554px) 100vw, 1554px"
							 src={currentImageSrc}
							 srcSet={currentImageSrcSet}/>
					</picture>

					<div
						className="c-image progressive-image_placeholder progressive-image_placeholder__hidden">
						<img decoding="async"
							 src={currentImageSrc}
							 width="16" height="10"
							 className="progressive-image_placeholder no-lazy"/>
					</div>
					<noscript><img decoding="async" width="1554" height="979"
								  src={currentImageSrc}
								   className="img-fluid" alt=""
								   srcSet={currentImageSrcSet}
								   lazy=""
								   sizes="(max-width: 1554px) 100vw, 1554px"/>
					</noscript>
				</div>
			</div>
		</div>
	);
}