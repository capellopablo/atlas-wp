import React, { useRef, useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import BackgroundImageHero from './background';
import Form from './form';
import useHeaders from '../hooks/useHeaders';

export default function AprendeBlocksHero (props) {
	const {title: initialTitle, subtitle} = props.attributes;
	const [title, setTitle] = useState(initialTitle);

	const headersData = useHeaders();

	const ref = useRef();

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const utmValue = params.get('utm_term');
		if (utmValue) {
			setTitle(utmValue.replace(/^./, firstLetter => firstLetter.toUpperCase()));
		}

		if (!ref?.current) {
			return;
		}

		let headingElement = ref.current,
			headerElement = document.querySelector('header.header_box'),
			padding = 90,
			headingPosition = '';

		if (!headingElement) {
			return;
		}

		const handleHeadingPosition = () => {

			let viewportHeight = (window.innerHeight - padding);

			if (headerElement) {
				headingPosition = (viewportHeight - headerElement.offsetHeight);
			} else {
				headingPosition = viewportHeight;
			}

			return (headingPosition < headingElement.offsetHeight
					? (headingElement.style.height = `${headingPosition}px`)
					: (headingElement.style.height = 'initial')
			);
		};

		handleHeadingPosition();
		window.addEventListener('resize', handleHeadingPosition);
	}, [ref]);

	return (
		<section
			className="block b-hero-v2 l-standard bg-white has-bg-image has-bg-image-mobile bg-image-center"
			id=""
			data-apt-e-seen="1"
			data-apt-key="b-hero-v2-l-standard"

		>
			<div className="b-hero-v2_container standard">
				<BackgroundImageHero/>

				<div
					className="b-hero-v2_block-foreground pb-m b-hero-v2_l-standard">
					<div
						className="content m-0 text-white content__heading col-lg-8 col-md-12 pt-s pr-m pb-l pl-m   "
						style={{height: 'initial'}} ref={ref}>

						<h1 className="c-heading" dangerouslySetInnerHTML={{__html: title}}/>

						<h4 className="mt-l">This a dynamic heading with country {headersData.country}, region {headersData.region} with timezone {headersData.timezone}</h4>

						<div className="content_subtitle mt-m mx-0"><p dangerouslySetInnerHTML={{__html: subtitle}}/></div>

						<div
							className="content_extra d-flex direction-column mt-m">

							<div
								className="content_extra_icons d-flex direction-column wrap-wrap gap-s">
								<div
									className="content_extra_icon d-flex align-center gap-2xs text-m pr-s content_extra_rating">
									<div className="c-rating">
										<div className="c-icon">
											<svg width="24px" height="24px"
												 viewBox="0 0 24 24">
												<mask id="mask_66d9c9a12ab6a"
													  style={{maskType: 'alpha'}}
													  maskUnits="userSpaceOnUse"
													  x="0" y="0" width="24"
													  height="24">
													<rect width="24" height="24"
														  fill="#D9D9D9"></rect>
												</mask>
												<g mask="url(#mask_66d9c9a12ab6a)">
													<path
														d="M12 18.7552L7.15274 21.8127C6.9386 21.9554 6.71473 22.0166 6.48113 21.9962C6.24753 21.9758 6.04313 21.8943 5.86792 21.7516C5.69272 21.6089 5.55645 21.4305 5.45912 21.2165C5.36178 21.0025 5.34232 20.763 5.40072 20.498L6.68553 14.7193L2.39308 10.8362C2.19841 10.6528 2.07674 10.4439 2.02808 10.2094C1.97941 9.97503 1.99401 9.74572 2.07188 9.5215C2.14975 9.29728 2.26655 9.11383 2.42228 8.97115C2.57802 8.82846 2.79215 8.73674 3.06469 8.69597L8.72956 8.17619L10.9196 2.7338C11.0169 2.4892 11.1678 2.30575 11.3722 2.18345C11.5766 2.06115 11.7859 2 12 2C12.2141 2 12.4234 2.06115 12.6278 2.18345C12.8322 2.30575 12.9831 2.4892 13.0804 2.7338L15.2704 8.17619L20.9353 8.69597C21.2078 8.73674 21.422 8.82846 21.5777 8.97115C21.7335 9.11383 21.8503 9.29728 21.9281 9.5215C22.006 9.74572 22.0206 9.97503 21.9719 10.2094C21.9233 10.4439 21.8016 10.6528 21.6069 10.8362L17.3145 14.7193L18.5993 20.498C18.6577 20.763 18.6382 21.0025 18.5409 21.2165C18.4435 21.4305 18.3073 21.6089 18.1321 21.7516C17.9569 21.8943 17.7525 21.9758 17.5189 21.9962C17.2853 22.0166 17.0614 21.9554 16.8473 21.8127L12 18.7552Z"
														fill="#E59E00"></path>
												</g>
											</svg>

										</div>

										<div className="c-icon">
											<svg width="24px" height="24px"
												 viewBox="0 0 24 24">
												<mask id="mask_66d9c9a12ac8d"
													  style={{maskType: 'alpha'}}
													  maskUnits="userSpaceOnUse"
													  x="0" y="0" width="24"
													  height="24">
													<rect width="24" height="24"
														  fill="#D9D9D9"></rect>
												</mask>
												<g mask="url(#mask_66d9c9a12ac8d)">
													<path
														d="M12 18.7552L7.15274 21.8127C6.9386 21.9554 6.71473 22.0166 6.48113 21.9962C6.24753 21.9758 6.04313 21.8943 5.86792 21.7516C5.69272 21.6089 5.55645 21.4305 5.45912 21.2165C5.36178 21.0025 5.34232 20.763 5.40072 20.498L6.68553 14.7193L2.39308 10.8362C2.19841 10.6528 2.07674 10.4439 2.02808 10.2094C1.97941 9.97503 1.99401 9.74572 2.07188 9.5215C2.14975 9.29728 2.26655 9.11383 2.42228 8.97115C2.57802 8.82846 2.79215 8.73674 3.06469 8.69597L8.72956 8.17619L10.9196 2.7338C11.0169 2.4892 11.1678 2.30575 11.3722 2.18345C11.5766 2.06115 11.7859 2 12 2C12.2141 2 12.4234 2.06115 12.6278 2.18345C12.8322 2.30575 12.9831 2.4892 13.0804 2.7338L15.2704 8.17619L20.9353 8.69597C21.2078 8.73674 21.422 8.82846 21.5777 8.97115C21.7335 9.11383 21.8503 9.29728 21.9281 9.5215C22.006 9.74572 22.0206 9.97503 21.9719 10.2094C21.9233 10.4439 21.8016 10.6528 21.6069 10.8362L17.3145 14.7193L18.5993 20.498C18.6577 20.763 18.6382 21.0025 18.5409 21.2165C18.4435 21.4305 18.3073 21.6089 18.1321 21.7516C17.9569 21.8943 17.7525 21.9758 17.5189 21.9962C17.2853 22.0166 17.0614 21.9554 16.8473 21.8127L12 18.7552Z"
														fill="#E59E00"></path>
												</g>
											</svg>

										</div>

										<div className="c-icon">
											<svg width="24px" height="24px"
												 viewBox="0 0 24 24">
												<mask id="mask_66d9c9a12ad55"
													  style={{maskType: 'alpha'}}
													  maskUnits="userSpaceOnUse"
													  x="0" y="0" width="24"
													  height="24">
													<rect width="24" height="24"
														  fill="#D9D9D9"></rect>
												</mask>
												<g mask="url(#mask_66d9c9a12ad55)">
													<path
														d="M12 18.7552L7.15274 21.8127C6.9386 21.9554 6.71473 22.0166 6.48113 21.9962C6.24753 21.9758 6.04313 21.8943 5.86792 21.7516C5.69272 21.6089 5.55645 21.4305 5.45912 21.2165C5.36178 21.0025 5.34232 20.763 5.40072 20.498L6.68553 14.7193L2.39308 10.8362C2.19841 10.6528 2.07674 10.4439 2.02808 10.2094C1.97941 9.97503 1.99401 9.74572 2.07188 9.5215C2.14975 9.29728 2.26655 9.11383 2.42228 8.97115C2.57802 8.82846 2.79215 8.73674 3.06469 8.69597L8.72956 8.17619L10.9196 2.7338C11.0169 2.4892 11.1678 2.30575 11.3722 2.18345C11.5766 2.06115 11.7859 2 12 2C12.2141 2 12.4234 2.06115 12.6278 2.18345C12.8322 2.30575 12.9831 2.4892 13.0804 2.7338L15.2704 8.17619L20.9353 8.69597C21.2078 8.73674 21.422 8.82846 21.5777 8.97115C21.7335 9.11383 21.8503 9.29728 21.9281 9.5215C22.006 9.74572 22.0206 9.97503 21.9719 10.2094C21.9233 10.4439 21.8016 10.6528 21.6069 10.8362L17.3145 14.7193L18.5993 20.498C18.6577 20.763 18.6382 21.0025 18.5409 21.2165C18.4435 21.4305 18.3073 21.6089 18.1321 21.7516C17.9569 21.8943 17.7525 21.9758 17.5189 21.9962C17.2853 22.0166 17.0614 21.9554 16.8473 21.8127L12 18.7552Z"
														fill="#E59E00"></path>
												</g>
											</svg>

										</div>

										<div className="c-icon">
											<svg width="24px" height="24px"
												 viewBox="0 0 24 24">
												<mask id="mask_66d9c9a12adf3"
													  style={{maskType: 'alpha'}}
													  maskUnits="userSpaceOnUse"
													  x="0" y="0" width="24"
													  height="24">
													<rect width="24" height="24"
														  fill="#D9D9D9"></rect>
												</mask>
												<g mask="url(#mask_66d9c9a12adf3)">
													<path
														d="M12 18.7552L7.15274 21.8127C6.9386 21.9554 6.71473 22.0166 6.48113 21.9962C6.24753 21.9758 6.04313 21.8943 5.86792 21.7516C5.69272 21.6089 5.55645 21.4305 5.45912 21.2165C5.36178 21.0025 5.34232 20.763 5.40072 20.498L6.68553 14.7193L2.39308 10.8362C2.19841 10.6528 2.07674 10.4439 2.02808 10.2094C1.97941 9.97503 1.99401 9.74572 2.07188 9.5215C2.14975 9.29728 2.26655 9.11383 2.42228 8.97115C2.57802 8.82846 2.79215 8.73674 3.06469 8.69597L8.72956 8.17619L10.9196 2.7338C11.0169 2.4892 11.1678 2.30575 11.3722 2.18345C11.5766 2.06115 11.7859 2 12 2C12.2141 2 12.4234 2.06115 12.6278 2.18345C12.8322 2.30575 12.9831 2.4892 13.0804 2.7338L15.2704 8.17619L20.9353 8.69597C21.2078 8.73674 21.422 8.82846 21.5777 8.97115C21.7335 9.11383 21.8503 9.29728 21.9281 9.5215C22.006 9.74572 22.0206 9.97503 21.9719 10.2094C21.9233 10.4439 21.8016 10.6528 21.6069 10.8362L17.3145 14.7193L18.5993 20.498C18.6577 20.763 18.6382 21.0025 18.5409 21.2165C18.4435 21.4305 18.3073 21.6089 18.1321 21.7516C17.9569 21.8943 17.7525 21.9758 17.5189 21.9962C17.2853 22.0166 17.0614 21.9554 16.8473 21.8127L12 18.7552Z"
														fill="#E59E00"></path>
												</g>
											</svg>

										</div>

										<div className="c-icon">
											<svg width="24px" height="24px"
												 viewBox="0 0 24 24">
												<mask id="mask_66d9c9a12ae85"
													  style={{maskType: 'alpha'}}
													  maskUnits="userSpaceOnUse"
													  x="0" y="0" width="24"
													  height="24">
													<rect width="24" height="24"
														  fill="#D9D9D9"></rect>
												</mask>
												<g mask="url(#mask_66d9c9a12ae85)">
													<path
														d="M12 18.7552L7.15274 21.8127C6.9386 21.9554 6.71473 22.0166 6.48113 21.9962C6.24753 21.9758 6.04313 21.8943 5.86792 21.7516C5.69272 21.6089 5.55645 21.4305 5.45912 21.2165C5.36178 21.0025 5.34232 20.763 5.40072 20.498L6.68553 14.7193L2.39308 10.8362C2.19841 10.6528 2.07674 10.4439 2.02808 10.2094C1.97941 9.97503 1.99401 9.74572 2.07188 9.5215C2.14975 9.29728 2.26655 9.11383 2.42228 8.97115C2.57802 8.82846 2.79215 8.73674 3.06469 8.69597L8.72956 8.17619L10.9196 2.7338C11.0169 2.4892 11.1678 2.30575 11.3722 2.18345C11.5766 2.06115 11.7859 2 12 2C12.2141 2 12.4234 2.06115 12.6278 2.18345C12.8322 2.30575 12.9831 2.4892 13.0804 2.7338L15.2704 8.17619L20.9353 8.69597C21.2078 8.73674 21.422 8.82846 21.5777 8.97115C21.7335 9.11383 21.8503 9.29728 21.9281 9.5215C22.006 9.74572 22.0206 9.97503 21.9719 10.2094C21.9233 10.4439 21.8016 10.6528 21.6069 10.8362L17.3145 14.7193L18.5993 20.498C18.6577 20.763 18.6382 21.0025 18.5409 21.2165C18.4435 21.4305 18.3073 21.6089 18.1321 21.7516C17.9569 21.8943 17.7525 21.9758 17.5189 21.9962C17.2853 22.0166 17.0614 21.9554 16.8473 21.8127L12 18.7552Z"
														fill="#ADBFD2"></path>
													<path
														d="M11.9998 18.7552L7.15261 21.8127C6.93848 21.9554 6.71462 22.0166 6.48102 21.9962C6.24742 21.9758 6.04303 21.8943 5.86783 21.7516C5.69263 21.6089 5.55637 21.4305 5.45903 21.2165C5.3617 21.0025 5.34224 20.763 5.40064 20.498L6.68542 14.7193L2.39307 10.8362C2.19841 10.6528 2.07674 10.4439 2.02808 10.2094C1.97941 9.97503 1.99401 9.74572 2.07188 9.5215C2.14974 9.29728 2.26654 9.11383 2.42227 8.97115C2.578 8.82846 2.79213 8.73674 3.06466 8.69597L8.72939 8.17619L10.9194 2.7338C11.0167 2.4892 11.1676 2.30575 11.372 2.18345C11.5764 2.06115 11.7856 2 11.9998 2C12.0003 2.36681 11.9998 18.7552 11.9998 18.7552Z"
														fill="#E59E00"></path>
												</g>
											</svg>

										</div>

									</div>

									(4,5) 2014 opiniones
								</div>
								<div
									className="content_extra_icon d-flex align-center text-m pr-s">
									Clases 100% virtuales
								</div>
							</div>
						</div>
					</div>

					<div
						className="b-hero-form b-hero-form__has-skeleton-loader col-md-12 p-m">
						<div className="r-lead-form_component">
							<Form/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

AprendeBlocksHero.displayName = 'AprendeBlocksHero';

AprendeBlocksHero.fragments = {
	entry: gql`
        fragment AprendeBlocksHeroFragment on AprendeBlocksHero {
            attributes {
                title
                subtitle
                className
            }
        }
	`,
	key: `AprendeBlocksHeroFragment`,
};
