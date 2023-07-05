//Frameworks and Libraries
import React, { useState } from "react";

//components
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import Section from "./components/Section";
import CallToAction from "./components/CallToAction";
import IconList from "./components/IconList";
import ProjectCard from "./components/ProjectCard";
import ContentCarousel from "./components/ContentCarousel/ContentCarousel";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

//Data
import { socialIcons, technologyIcons, projects } from "./portfolioDatabase";

//styles:
import "./styles/globalStyles.scss";

function App() {
	const [isMobile, setIsMobiel] = useState(false);
	const [burgerMenuIsActive, setBurgerMenuIsActive] = useState(false);

	return (
		<>
			<NavBar
				isMobile={isMobile}
				burgerMenuIsActive={burgerMenuIsActive}
				setBurgerMenuIsActive={setBurgerMenuIsActive}
			/>
			<main>
				<Home />

				<CallToAction />

				<Section>
					<Header title="Hello World" hTag="h2" hideSubtitle />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
						voluptatibus et obcaecati, id aut, ex alias, magnam cupiditate eum
						quia accusantium neque quis iusto sint necessitatibus veniam
						voluptates reiciendis.Quasi exercitationem quibusdam similique culpa
						veniam adipisci eveniet neque incidunt repellendus a.
					</p>
					<p>
						Voluptates vel aliquam quisquam, quasi, tenetur veritatis provident
						dignissimos rerum temporibus omnis dolorem voluptatibus tempora sunt
						tempore atque illum totam quae reiciendis officiis? Quasi
						exercitationem quibusdam similique culpa veniam adipisci eveniet
						neque incidunt repellendus a.
					</p>
					<IconList icons={socialIcons} columns="5" />
				</Section>

				<Section id="skills">
					<Header title="Skills" hTag="h2" hideSubtitle />
					<IconList icons={technologyIcons} columns="4" />
				</Section>

				<Section id="projects">
					<Header title="My Creations" hTag="h2" hideSubtitle />
					<ul>
						{projects.map((project) => (
							<li>
								<ProjectCard
									title={project.title}
									image={project.image}
									description={project.description}
									technologies={project.technologies}
									links={project.links}
									columns={project.technologies.length}
								/>
							</li>
						))}
					</ul>
				</Section>

				<Section id="testimonials">
					<Header title="Testimonials" hTag="h2" hideSubtitle />
					<ContentCarousel />
				</Section>

				<Section id="contact">
					<Header title="Get In Touch" hTag="h2" hideSubtitle></Header>
					<p>
						Lorem ipsum dolor sit amet consectetur. Eu ipsum montes massa dui
						tincidunt eget. Eget felis neque etiam senectus. Consectetur eget
						cursus laoreet elementum vel est ut mauris. Pellentesque interdum
						amet elementum sit semper viverra enim libero vel est ut.
					</p>
					<ContactForm />
				</Section>
			</main>
			<Footer />
		</>
	);
}

export default App;
