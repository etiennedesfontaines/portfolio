//Frameworks and Libraries
import React, { useState, useEffect } from "react";

//components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Section from "./components/Section";
import LayoutColumn from "./components/LayoutColumn";
import Image from "./components/Image";
import CallToAction from "./components/CallToAction";
import SocialIconList from "./components/SocialIconList";
import Skills from "./components/Skills";
import ProjectCardMobile from "./components/ProjectCardMobile";
import ProjectCardDesktop from "./components/ProjectCardDesktop";
import TestimonialCard from "./components/TestimonialCard";
import ContentCarousel from "./components/ContentCarousel/ContentCarousel";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
//
import Wave from "./components/Wave";

//Data
import { projects, testimonials } from "./portfolioDatabase";
//images
import chevronDown from "./icons/chevron-down.svg";
import etienneDesfontainesProfile from "./images/people/etienne-desfontaines-profile.jpg";
//styles:
import "./styles/globalStyles.scss";
import LayoutRow from "./components/LayoutRow";

function App() {
	//variables
	let isPortrait = window.matchMedia("(orientation: portrait)").matches;
	let isSmallScreen = window.matchMedia("(max-width: 1023px)").matches;
	//state
	const [isMobile, setIsMobile] = useState(isPortrait || isSmallScreen);
	const [burgerMenuIsActive, setBurgerMenuIsActive] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			isPortrait = window.matchMedia("(orientation: portrait)").matches;
			isSmallScreen = window.matchMedia("(max-width: 1023px)").matches;
			setIsMobile(isPortrait || isSmallScreen);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (burgerMenuIsActive) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
	}, [burgerMenuIsActive]);

	return (
		<>
			<NavBar
				isMobile={isMobile}
				burgerMenuIsActive={burgerMenuIsActive}
				setBurgerMenuIsActive={setBurgerMenuIsActive}
			/>
			<main>
				{isMobile ? (
					<>
						<Section id="home" isFullScreen>
							<LayoutColumn align="center" gap="1.6rem" height="100%">
								<Header
									title="Etienne Desfontaines"
									subTitle="Frontend Developer"
									noMargin
								/>
								<div className="container">
									<Image
										imageSrc={etienneDesfontainesProfile}
										altText="Confident frontend developer wearing gold-rimmed spectacles with calm, blue eyes, and a light blue collard shirt."
										frameImage
										objectFit="cover"
										objectPosition="center top"
									/>
									<CallToAction />
								</div>
								<img
									className="chevron--down"
									src={chevronDown}
									alt="chevron pointing down"
								/>
							</LayoutColumn>
						</Section>

						<Section id="about">
							<LayoutColumn align="center" gap="1.6rem">
								<Header title="Hello World" hTag="h2" />

								<p>
									"I'm a London based Front-End Developer with a strong drive
									for continuous learning and self-improvement. Through two
									years of self-guided study, and a few freelance projects, I've
									cultivated skills in web development, UI design and
									copywriting. I enjoy playful illustrations, language,
									animation, and bringing beautiful designs to life with code.
								</p>
								<p>
									Driven by my passion for human behaviour, health, and
									environmental sustainability, I want to contribute to
									technology that has a positive impact on the world. I'm eager
									to join a company whose focus aligns with my values, where I
									can learn and grow, whilst making a significant and meaningful
									contribution to the lives of others."
								</p>
								<SocialIconList />
							</LayoutColumn>
						</Section>
					</>
				) : (
					<Section id="about" isFullScreen>
						<LayoutRow height="100%" gap="2.4%">
							<LayoutColumn
								align="flex-start"
								justify="space-evenly"
								maxWidth="56%"
							>
								<Header
									title="Etienne Desfontaines"
									subTitle="Frontend Developer"
									noMargin
								/>

								<p className="biography">
									"I'm a London based Front-End Developer with a strong drive
									for continuous learning and self-improvement. Through two
									years of self-guided study, and a few freelance projects, I've
									cultivated skills in web development, UI design and
									copywriting. I enjoy playful illustrations, language,
									animation, and bringing beautiful designs to life with code.
								</p>
								<p className="biography">
									Driven by my passion for human behaviour, health, and
									environmental sustainability, I want to contribute to
									technology that has a positive impact on the world. I'm eager
									to join a company whose focus aligns with my values, where I
									can learn and grow, whilst making a significant and meaningful
									contribution to the lives of others."
								</p>

								<SocialIconList />
								<CallToAction />
							</LayoutColumn>
							<Image
								imageSrc={etienneDesfontainesProfile}
								altText="Confident frontend developer wearing gold-rimmed spectacles with calm, blue eyes, and a light blue collard shirt."
								frameImage
								objectFit="cover"
								objectPosition="center top"
							/>
						</LayoutRow>
					</Section>
				)}

				<Section id="skills">
					<LayoutColumn align="center" gap={isMobile ? "1.6rem" : "4.8rem"}>
						<Header title="Skills" hTag="h2" />
						<Skills />
						<Wave />
					</LayoutColumn>
				</Section>

				<Section id="projects">
					<LayoutColumn align="center" gap={isMobile ? "1.6rem" : "4.8rem"}>
						<Header title="My Creations" hTag="h2" />
						<ul>
							<LayoutColumn gap={isMobile ? "2.4rem" : "6.4rem"}>
								{projects.map((project, index) => (
									<li key={index}>
										{isMobile ? (
											<ProjectCardMobile
												title={project.title}
												image={project.image}
												altText={project.imageAltText}
												description={project.description}
												technologies={project.technologies}
												roles={project.roles}
												links={project.links}
												key={project.title}
											/>
										) : (
											<ProjectCardDesktop
												title={project.title}
												image={project.image}
												altText={project.imageAltText}
												description={project.description}
												technologies={project.technologies}
												roles={project.roles}
												links={project.links}
												swapOrder={(index + 1) % 2 === 0}
												key={project.title}
											/>
										)}
									</li>
								))}
							</LayoutColumn>
						</ul>
					</LayoutColumn>
				</Section>

				<Section id="testimonials">
					<LayoutColumn align="center" gap={isMobile ? "1.6rem" : "4.8rem"}>
						<Header title="Testimonials" hTag="h2" />
						{isMobile ? (
							<ContentCarousel />
						) : (
							<LayoutRow justify="space-between" gap="2.4rem" width="100%">
								{testimonials.map((testimonialObject, index) => (
									<TestimonialCard
										key={index}
										imageSrc={testimonialObject.imageUrl}
										imageAltText={testimonialObject.imageAltText}
										title={testimonialObject.title}
										testimonial={testimonialObject.testimonial}
										author={testimonialObject.author}
									/>
								))}
							</LayoutRow>
						)}
					</LayoutColumn>
				</Section>

				<Section id="contact">
					<LayoutColumn align="center" gap={isMobile ? "1.6rem" : "3.2rem"}>
						<Header title="Get In Touch" hTag="h2"></Header>

						<p>
							If you have any questions about me or my projects, or would like
							to talk technology, psychology, sustainability or health and
							wellness, don't hesitate to drop me a line. Thanks for stopping by
							and I hope to hear from you soon!
						</p>

						<ContactForm isMobile={isMobile} />
					</LayoutColumn>
				</Section>
			</main>
			<Footer isMobile={isMobile} />
		</>
	);
}

export default App;
