import Button from '@aprende-com/design-system/components/Button';
import Card from '../../../components/card/index';

const Standard = ({props}) => {
	const {title, subtitle} = props.attributes;
	const benefitsItems = JSON.parse(props.attributes.benefitsItems);
	const linkData = JSON.parse(props.attributes.linkData);

	return (
		<section className="block b-benefits-v2 l-standard bg-white" data-apt-e-seen="1" data-apt-key="b-benefits-v2-l-blurbs-icon">
			<div className="container">
				<div className="b-benefits-v2_heading mb-2xl mx-auto ta-center col-lg-8 p-0">
					<p className="c-heading heading-3 gap-s">{title}</p>
					<p className="pt-s">{subtitle}</p>
				</div>

				<div className="b-benefits-v2_container d-flex mt-xl">
					{benefitsItems && benefitsItems.map((item, index) => (
						<div
							key={index}
							className="b-benefits-v2_item col-4 col-md-3 col-lg-4"
							data-slug={`benefit-item-${index}`}
							data-col={index}
						>
							<Card
								image={{
									source: item.imageUrl,
									aspect: "16:9",
									container: true,
									alt: item.benefitsTitle || "",
								}}
								title={item.benefitsTitle || ""}
								text={item.benefitsText || ""}
							/>
						</div>
					))}
				</div>

                {linkData.url && linkData.text && (
					<a
						href={linkData.url}
						target={linkData.newTab ? '_blank' : '_self'}
						data-slug={JSON.stringify(linkData.text)}
					>
						{linkData.text}
					</a>
				)}
			</div>
		</section>
	);
};

export default Standard;
