import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

//Components
import TestimonialCard from "../TestimonialCard";

//Data
import { testimonials } from "../../portfolioDatabase";

//Styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./contentCarousel.scss";

const ContentCarousel = () => {
	return (
		<CarouselContainer>
			<Carousel
				showThumbs={false}
				showStatus={false}
				showArrows={false}
				infiniteLoop
			>
				{testimonials.map((testimonialObject) => {
					return (
						<div key={testimonialObject.author}>
							<TestimonialCard
								imageSrc={testimonialObject.imageUrl}
								imageWidth="12.4rem"
								title={testimonialObject.title}
								testimonial={testimonialObject.testimonial}
								author={testimonialObject.author}
							/>
						</div>
					);
				})}
			</Carousel>
		</CarouselContainer>
	);
};

const CarouselContainer = styled.div`
	width: 100%;
`;

export default ContentCarousel;
