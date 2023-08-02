import React from "react";
import styled from "styled-components";

//components
import LayoutColumn from "./LayoutColumn";

const TestimonialCard = ({
	isMoile,
	imageSrc,
	imageAltText,
	title,
	testimonial,
	author,
}) => {
	return (
		<Card className="testimonial-card">
			<LayoutColumn
				justify={isMoile ? "flex-start" : "space-between"}
				align="center"
				gap="1.6rem"
				height="100%"
			>
				<div className="image-border">
					<img
						className="testimonial-image"
						src={imageSrc}
						alt={imageAltText}
					/>
				</div>
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
	padding: 1.6rem 0 2.4rem 0;

	.testimonial-image {
		max-width: 8rem;
		max-height: 8rem;
		border-radius: 100%;
	}
	.image-border {
		border-radius: 100%;
		padding: 0.8rem;
		background-color: rgba(220, 233, 251, 0.4);
	}
	p {
		text-align: center;
	}

	h3 {
		font-size: 1.4rem;
	}

	.author {
		font-size: 1rem;
		font-weight: 500;
	}

	@media screen and (min-width: 360px) {
		.testimonial-image {
			max-width: 12em;
			max-height: 12rem;
		}
		h3 {
			font-size: 1.6rem;
		}
		.author {
			font-size: 1.2rem;
		}
	}
	@media screen and (min-width: 460px) {
		.testimonial-image {
			max-width: 14rem;
			max-height: 14rem;
		}
		h3 {
			font-size: 2rem;
		}
		.author {
			font-size: 1.4rem;
		}
	}

	@media screen and (min-width: 800px) {
		.testimonial-image {
			max-width: 16rem;
			max-height: 16rem;
		}
		h3 {
			font-size: 2.2rem;
		}
		.author {
			font-size: 1.6rem;
		}
	}

	//Desktop:

	@media screen and (min-width: 1024px) and (orientation: landscape) {
		border-radius: 1.6rem;
		padding: 2.4rem 1.6rem;
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
			0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);

		.testimonial-image {
			max-width: 14rem;
			max-height: 14rem;
		}

		h3 {
			font-size: 1.6rem;
		}
		p {
			font-size: 1.4rem;
		}
		.author {
			font-size: 1.2rem;
		}
	}
	@media screen and (min-width: 1400px) and (orientation: landscape) {
		h3 {
			font-size: 2rem;
		}
		.testimonial-image {
			max-width: 16rem;
			max-height: 16rem;
		}
		p {
			font-size: 1.6rem;
		}
		.author {
			font-size: 1.4rem;
		}
	}
	@media screen and (min-width: 1600px) and (min-height: 1100px) and (orientation: landscape) {
		h3 {
			font-size: 2.4rem;
		}
		.testimonial-image {
			max-width: 18rem;
			max-height: 18rem;
		}
		p {
			font-size: 1.8rem;
		}
		.author {
			font-size: 1.6rem;
		}
	}
`;
export default TestimonialCard;
