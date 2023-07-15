import React from "react";
import styled from "styled-components";
import Image from "./Image";

//components
import LayoutColumn from "./LayoutColumn";

const TestimonialCard = ({
	isMoile,
	imageSrc,
	imageAltText,
	imageWidth,
	title,
	testimonial,
	author,
}) => {
	return (
		<Card className="testimonial-card">
			<LayoutColumn align="center" gap="1.6rem">
				<Image imageSrc={imageSrc} width={imageWidth} altText={imageAltText} />
				<h3>{title}</h3>
				<p>{testimonial}</p>
				<p className="author">{author}</p>
			</LayoutColumn>
		</Card>
	);
};

const Card = styled.div`
	width: 100%;
	text-align: center;
	padding: 1.6rem 0;
	.author {
		font-weight: 500;
		padding-bottom: 1.6rem;
	}
	p {
		text-align: center;
	}

	@media screen and (min-width: 1200px) {
		border-radius: 1.6rem;
		padding: 2.4rem 1.6rem;
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
			0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);

		h3 {
			font-size: 2rem;
		}
	}
`;
export default TestimonialCard;
