import { gql } from '@apollo/client';
import  Button  from '@aprende-com/design-system/components/Button';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function AprendeBlocksHero ({attributes}) {
	const {title, subtitle, cta, ctaUrl, openForm, secondCta, secondCtaUrl, image, imageAlt} = attributes;

	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => setIsOpen(true);
	const handleModalClose = () => setIsOpen(false);

	return (
		<section
			className="block b-hero-v2 l-standard  mt-2xl mb-2xl"
			id="" data-apt-e-seen="1" data-apt-key="b-hero-v2-l-standard">
			<div className="container">
				<div className="b-hero-v2_wrapper d-flex justify-center">
					<div className="b-hero-v2_wrapper_content d-flex direction-column align-center">
						<div className={`b-hero-v2_wrapper_content--text col-lg-${image ? '6' : '12'} d-flex direction-column`}>
							{title && (
								<h1 className="c-heading mb-s">{title}</h1>
							)}
							{subtitle && (
								<div className="text-l mb-m">{subtitle}</div>
							)}
							<div className="d-flex gap-m">
							{cta && (
								<Button
									className="btn-primary btn-md"
									onClick={openForm ? handleOpenModal : undefined}
									href={!openForm ? ctaUrl : undefined}
								>
									{cta}
								</Button>
							)}
							{secondCta && (
								<Button
									className="btn-primary-text btn-md"
									href={secondCtaUrl}
								>
									{secondCta}
								</Button>
							)}
							</div>
						</div>
						{image && (
							<div className="b-hero-v2_wrapper_content--image col-lg-6 p-0">
								<picture>
									<source
									srcSet={image}
									/>
									<img
									src={image}
									alt={imageAlt}
									loading="lazy" lazy="1"
									/>
								</picture>
							</div>
						)}
					</div>
				</div>
			</div>
			<Modal isOpen={isOpen} onClose={handleModalClose}>
				<h5>¡Hola! Este es un modal de prueba</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</Modal>
		</section>
	);
}

AprendeBlocksHero.displayName = 'AprendeBlocksHero';

AprendeBlocksHero.fragments = {
	entry: gql`
		fragment AprendeBlocksHeroFragment on AprendeBlocksHero {
			attributes {
				title,
				subtitle,
				cta,
				ctaUrl,
				openForm,
				secondCta,
				secondCtaUrl,
				image,
				imageAlt,
				className
			}
		}
	`,
	key: `AprendeBlocksHeroFragment`,
};
