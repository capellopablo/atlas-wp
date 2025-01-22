import { gql } from '@apollo/client';
import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function AprendeBlocksCustomGrid (props) {
	const {
		title,
		customGridItems,
		setSlider,
	} = props.attributes;

	const gridItemsParsed = JSON.parse(customGridItems);
	const countItems = gridItemsParsed.length;

	const swiperRef = useRef(null);

	return (
		<section className="block b-custom-grid-v2 l-standard hide-us-fl" id=""
				data-apt-e-seen="1"
				data-apt-key="b-custom-grid-v2-l-standard">
			<div className="container">
				<div className="d-flex justify-center direction-column mb-l">
					{(title) && (
						<h3 className="c-heading ta-center m-auto"
							dangerouslySetInnerHTML={{__html: title}}/>
					)}
				</div>

				{setSlider ? (
					<Swiper
						grabCursor={true}
						slidesPerView={4}
						slidesPerGroup={1}
						spaceBetween={16}
						initialSlide={1}
						pagination={{
							clickable: true,
							dynamicBullets: true,
							renderBullet: (index, className) => {
								const activeIndex = Math.floor(swiperRef.current?.activeIndex / swiperRef.current?.params.slidesPerGroup) || 0; // Calcula el índice activo del grupo
								const totalGroups = Math.ceil(gridItemsParsed.length / swiperRef.current?.params.slidesPerGroup); // Número total de grupos
					
								// Mostrar siempre 3 bullets:
								// - Primer grupo: el primer bullet es activo.
								// - Grupos intermedios: el bullet central es activo.
								// - Último grupo: el último bullet es activo.
								const isActive =
									(index === 0 && activeIndex === 0) || // Primer grupo
									(index === 2 && activeIndex === totalGroups - 1) || // Último grupo
									(index === 1 && activeIndex > 0 && activeIndex < totalGroups - 1); // Grupo intermedio
					
								return `<span class="${className} ${isActive ? 'swiper-pagination-bullet-active' : ''}"></span>`;
							},
							// renderBullet: (index, className) => {
							// 	// Renderiza un máximo de 3 bullets visibles
							// 	if (index < 3) {
							// 		return `<span class="${className}"></span>`;
							// 	}
							// 	return '';
							// },
						}}
						onSwiper={(swiper) => (swiperRef.current = swiper)} // Referencia para calcular el índice activo

						modules={[Pagination]}
						breakpoints={{
							0: {
								slidesPerView: 2,
								slidesPerGroup: 1,
								spaceBetween: 16,
							},
							768: {
								slidesPerView: 4,
								slidesPerGroup: 1,
								spaceBetween: 24,
								initialSlide: 0,
							},
						}}
						className={`custom-grid-swiper ${countItems < 4 && 'centered'}`}
					>
						{gridItemsParsed.map((item, index) => (
							<SwiperSlide key={index}>
								<div className="custom-grid-item">
									{item.imageUrl && (
										<div className="image-container mb-md">
											<img 
												src={item.imageUrl}
												alt="image custom grid"
												className="c-image"
											/>
										</div> 
									)}
									{item.customGridTitle && (
										<div className="mt-s ta-center">
											<p 
												className="text-s"
												dangerouslySetInnerHTML={{ __html: item.customGridTitle }}
											/>
										</div>
									)}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				) : 
                <div className={`mt-xl custom-grid-container ${countItems < 4 && `grid-${countItems}-fr`}`}>
					{gridItemsParsed.map((item, index) => (
						<div key={index} className="custom-grid-item">
							{item.imageUrl && (
								<div className="image-container mb-md">
									<img 
										src={item.imageUrl}
										alt="image custom grid"
										className="c-image"
									/>
								</div> 
							)} 
							{item.customGridTitle && (
								<div className="col-lg-12 ta-center mt-s">
									<p 
										className="text-s"
										dangerouslySetInnerHTML={{ __html: item.customGridTitle }}
									/>
								</div>
							)}
						</div>
					))}
					</div>
				}
			</div>
		</section>
	);
}

AprendeBlocksCustomGrid.displayName = 'AprendeBlocksCustomGrid';

AprendeBlocksCustomGrid.fragments = {
	entry: gql`
        fragment AprendeBlocksCustomGridFragment on AprendeBlocksCustomGrid {
            attributes {
                title
                className
				customGridItems
				setSlider
            }
        }
	`,
	key: `AprendeBlocksCustomGridFragment`,
};
