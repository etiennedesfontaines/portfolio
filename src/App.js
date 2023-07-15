//Frameworks and Libraries
import React, { useState, useEffect, useRef } from "react";

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

//Data
import { projects, testimonials } from "./portfolioDatabase";
//images
import chevronDown from "./icons/chevron-down.svg";
import profileImage from "./images/profile_2.jpg";

//styles:
import "./styles/globalStyles.scss";
import LayoutRow from "./components/LayoutRow";

function App() {
	//state
	const [isMobile, setIsMobile] = useState(
		window.matchMedia("(max-width: 767px)").matches
	);

	const [burgerMenuIsActive, setBurgerMenuIsActive] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 767px)");
		const handleResize = () => {
			setIsMobile(mediaQuery.matches);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

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
								<Image imageSrc={profileImage} altText="#" />
								<CallToAction />
								<img src={chevronDown} alt="chevron pointing down" />
							</LayoutColumn>
						</Section>

						<Section id="about">
							<LayoutColumn align="center" gap="1.6rem">
								<Header title="Hello World" hTag="h2" />

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
									voluptatibus et obcaecati, id aut, ex alias, magnam cupiditate
									eum quia accusantium neque quis iusto sint necessitatibus
									veniam voluptates reiciendis.Quasi exercitationem quibusdam
									similique culpa veniam adipisci eveniet neque incidunt
									repellendus a.
								</p>
								<p>
									Voluptates vel aliquam quisquam, quasi, tenetur veritatis
									provident dignissimos rerum temporibus omnis dolorem
									voluptatibus tempora sunt tempore atque illum totam quae
									reiciendis officiis? Quasi exercitationem quibusdam similique
									culpa veniam adipisci eveniet neque incidunt repellendus a.
								</p>
								<SocialIconList />
							</LayoutColumn>
						</Section>
					</>
				) : (
					<Section id="about" isFullScreen>
						<LayoutRow height="100%" gap="6.4rem">
							<LayoutColumn
								align="flex-start"
								justify="space-between"
								maxWidth="60%"
							>
								<Header
									title="Etienne Desfontaines"
									subTitle="Frontend Developer"
									noMargin
								/>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
									voluptatibus et obcaecati, id aut, ex alias, magnam cupiditate
									eum quia accusantium neque quis iusto sint necessitatibus
									veniam voluptates reiciendis.Quasi exercitationem quibusdam
									similique culpa veniam adipisci eveniet neque incidunt
									repellendus a.
								</p>
								<p>
									Voluptates vel aliquam quisquam, quasi, tenetur veritatis
									provident dignissimos rerum temporibus omnis dolorem
									voluptatibus tempora sunt tempore atque illum totam quae
									reiciendis officiis? Quasi exercitationem quibusdam similique
									culpa veniam adipisci eveniet neque incidunt repellendus a.
								</p>
								<SocialIconList />
								<CallToAction />
							</LayoutColumn>
							<Image imageSrc={profileImage} altText="#" />
							{/* <img src={chevronDown} alt="chevron pointing down" /> */}
						</LayoutRow>
					</Section>
				)}

				<Section id="skills">
					<LayoutColumn align="center" gap={isMobile ? "1.6rem" : "4.8rem"}>
						<Header title="Skills" hTag="h2" />
						<Skills />
					</LayoutColumn>
				</Section>

				<Section id="projects">
					<LayoutColumn align="center" gap={isMobile ? "1.6rem" : "4.8rem"}>
						<Header title="My Creations" hTag="h2" />
						<ul>
							<LayoutColumn gap={isMobile ? "1.6rem" : "4.8rem"}>
								{projects.map((project, index) => (
									<li key={index}>
										{isMobile ? (
											<ProjectCardMobile
												title={project.title}
												image={project.image}
												description={project.description}
												technologies={project.technologies}
												links={project.links}
												key={project.title}
											/>
										) : (
											<ProjectCardDesktop
												title={project.title}
												image={project.image}
												description={project.description}
												technologies={project.technologies}
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
							<LayoutRow justify="space-between" gap="2.4rem">
								{" "}
								{testimonials.map((testimonialObject, index) => (
									<TestimonialCard
										key={index}
										imageSrc={testimonialObject.imageUrl}
										imageWidth="16rem"
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
					<LayoutColumn align="center" gap={isMobile ? "1.6rem" : "4.8rem"}>
						<Header title="Get In Touch" hTag="h2"></Header>
						{isMobile ? (
							<>
								<p>
									Lorem ipsum dolor sit amet consectetur. Eu ipsum montes massa
									dui tincidunt eget. Eget felis neque etiam senectus.
									Consectetur eget cursus laoreet elementum vel est ut mauris.
									Pellentesque interdum amet elementum sit semper viverra enim
									libero vel est ut.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur. Eu ipsum montes massa
									dui tincidunt eget. Eget felis neque etiam senectus.
									Consectetur eget cursus laoreet elementum vel est ut mauris.
									elementum sit semper viverra enim libero vel est ut.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur. Eu ipsum montes massa
									dui tincidunt eget.
								</p>
								<ContactForm />
							</>
						) : (
							<LayoutRow gap="2.4rem">
								<LayoutColumn
									align="flex-start"
									justify="space-between"
									gap="2.4rem"
									maxWidth="50%"
								>
									<p>
										Lorem ipsum dolor sit amet consectetur. Eu ipsum montes
										massa dui tincidunt eget. Eget felis neque etiam senectus.
										Consectetur eget cursus laoreet elementum vel est ut mauris.
										Pellentesque interdum amet elementum sit semper viverra enim
										libero vel est ut.
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur. Eu ipsum montes
										massa dui tincidunt eget. Eget felis neque etiam senectus.
										Consectetur eget cursus laoreet elementum vel est ut mauris.
										elementum sit semper viverra enim libero vel est ut.{" "}
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur. Eu ipsum montes
										massa dui tincidunt eget.
									</p>
									<SocialIconList />
								</LayoutColumn>
								<ContactForm />
							</LayoutRow>
						)}
					</LayoutColumn>
				</Section>
			</main>
			<Footer isMobile={isMobile} />
		</>
	);
}

export default App;
