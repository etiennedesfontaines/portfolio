import React from "react";
import styled from "styled-components";
import Image from "./Image";

const TestimonialCard = ({
	imageSrc,
	imageWidth,
	title,
	testimonial,
	author,
}) => {
	return (
		<Card className="testimonial-card">
			<Image imageSrc={imageSrc} width={imageWidth} />
			<h3>{title}</h3>
			<p>{testimonial}</p>
			<p className="author">{author}</p>
		</Card>
	);
};

const Card = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.6rem;
	text-align: center;
	padding: 1.6rem 0;
	.author {
		font-weight: 500;
		padding-bottom: 1.6rem;
	}
`;
export default TestimonialCard;
