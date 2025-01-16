import Image from '../../../components/image/index'; // Image component

const Blurbs = ({props}) => {
	const {blurbsTitle, blurbsSubtitle} = props.attributes;
	const blurbsItems = JSON.parse(props.attributes.blurbsItems);

	return (
		<section className="block b-benefits-v2 l-blurbs-icon bg-white" data-apt-e-seen="1" data-apt-key="b-benefits-v2-l-blurbs-icon">
			<div className="b-benefits-v2_content d-flex align-center direction-column">
				<span className="d-block">
					<p className="c-heading heading-2 gap-s">{blurbsTitle}</p>
					<p>{blurbsSubtitle}</p>
				</span>
				<div className="b-benefits-v2_items d-flex direction-column">
					{blurbsItems && blurbsItems.map((item, index) => (
						<div
							key={index}
							className="col-4 col-md-3 col-lg-4"
							data-slug={`benefit-item-${index}`}
							data-col={index}
						>
							<Image source={item.blurbsImageUrl} alt={item.blurbsTitle || ""} container={false} />

							{item.blurbsTitle && <p className="c-heading heading-3 gap-s">{item.blurbsTitle}</p>}
							{item.blurbsText && <span className="gap-s">{item.blurbsText}</span>}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blurbs;
