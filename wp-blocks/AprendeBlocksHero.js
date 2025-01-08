import { gql } from '@apollo/client';
import  Button  from '@aprende-com/design-system/components/Button';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function AprendeBlocksHero (props) {
	const {title, subtitle, cta, ctaUrl, openForm, secondCta, secondCtaUrl, image, imageAlt} = props.attributes;

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
						<div className="b-hero-v2_wrapper_content--text col-lg-6 d-flex direction-column">
							<h1 className="c-heading mb-s" dangerouslySetInnerHTML={{__html: title}}/>
							<div className="text-l mb-m" dangerouslySetInnerHTML={{__html: subtitle}}/>
							<div className="d-flex gap-l">
							{cta && (
								<Button
									className="btn-primary btn-md"
									onClick={handleOpenModal}
								>
									{cta}
								</Button>
							)}
							{secondCta && (
								<Button
									className="btn-primary-text btn-md"
									onClick={function noRefCheck() {}}
								>
									{secondCta}
								</Button>
							)}
							</div>
						</div>
						<div className="b-hero-v2_wrapper_content--image col-lg-6">
							<picture>
								<source
								srcSet={image}
								media="(max-width: 397px)"/>
								<img
								height="224"
								src={image}
								className="img-fluid" alt={imageAlt}
								srcSet={image}
								loading="lazy" lazy="1"
								sizes="(max-width: 397px) 100vw, 397px"/>
							</picture>
						</div>
					</div>
				</div>
			</div>
			<Modal isOpen={isOpen} onClose={handleModalClose}>
				<h5>¡Hola! Este es un modal de prueba 👋</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
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
