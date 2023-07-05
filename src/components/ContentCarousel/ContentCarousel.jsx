import React from "react";
import { Carousel } from "react-responsive-carousel";

//Components
import TestimonialCard from "../TestimonialCard";

//Images

import testimonialImage from "../../images/tetimonials-profile-placeholder.jpg";

//Data
import { testimonials } from "../../portfolioDatabase";

//Styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./contentCarousel.scss";

const ContentCarousel = () => {
	return (
		<Carousel showThumbs={false} showStatus={false} infiniteLoop>
			{/* <div>
				<img src={testimonialImage} />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					odit sapiente corporis non officiis dicta alias consequuntur impedit.
					Perspiciatis, doloremque?
				</p>
			</div>
			<div>
				<img src={testimonialImage} />
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam velit
					nesciunt necessitatibus, deserunt illum recusandae?
				</p>
			</div>
			<div>
				<TestimonialCard
					imageSrc={testimonials[0].imageUrl}
					imageWidth="12.4rem"
					title={testimonials[0].title}
					testimonial={testimonials[0].testimonial}
					author={testimonials[0].author}
				/>
			</div> */}
			{/* {testimonials.map((testimonialObject) => {
				return (
					<div>
						<TestimonialCard
							imageSrc={testimonialObject.imageUrl}
							imageWidth="12.4rem"
							title={testimonialObject.title}
							testimonial={testimonialObject.testimonial}
							author={testimonialObject.author}
						/>
					</div>
				);
			})} */}
			<div>
				<TestimonialCard
					imageSrc={testimonialImage}
					imageWidth="12.4rem"
					title="Team Leader, Fast Learner, Joyous to work with"
					testimonial="Lorem ipsum dolor sit amet consectetur. Turpis at auctor nisl commodo sit. Elementum fermentum ultrices ac nisl volutpat libero laoreet massa etiam. Pharetra pellentesque lectus a in ipsum sodales."
					author="Daniel Forsthofer - Tutto Food Co."
				/>
			</div>
			{/* <div>
				<TestimonialCard
					imageSrc={testimonialImage}
					imageWidth="12.4rem"
					title="Team Leader, Fast Learner, Joyous to work with"
					testimonial="Lorem ipsum dolor sit amet consectetur. Turpis at auctor nisl commodo sit. Elementum fermentum ultrices ac nisl volutpat libero laoreet massa etiam. Pharetra pellentesque lectus a in ipsum sodales."
					author="Daniel Forsthofer - Tutto Food Co."
				/>
			</div> */}
		</Carousel>
	);
};

export default ContentCarousel;
