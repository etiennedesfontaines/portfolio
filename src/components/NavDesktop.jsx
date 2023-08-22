import React from "react";
import styled from "styled-components";

//components
import LayoutRow from "./LayoutRow";

//styles
import { colours } from "../styles/styleVariables";

//images
import logo from "../logo/logo.svg";

//Resume
import Resume from "../resume/Desfontaines_Etienne_Resume.pdf";

const NavDesktop = ({ activeSection }) => {
	const handleDocumentScroll = (event, targetId) => {
		event.preventDefault();

		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			const navHeight = window.innerHeight * 0.1;
			const targetOffset = targetElement.offsetTop - navHeight;

			window.scrollTo({ top: targetOffset, behavior: "smooth" });
		}
	};
	return (
		<StyledNav>
			<LayoutRow justify="space-between" align="center" height="100%">
				<a onClick={(e) => handleDocumentScroll(e, "#about")} href="#about">
					<img src={logo} alt="Logo" className="logo" />
				</a>

				<ul>
					<LayoutRow gap="3.2rem">
						<li>
							<a
								onClick={(e) => handleDocumentScroll(e, "#about")}
								href="#about"
							>
								About
							</a>
							<div
								className={
									activeSection === "about" ? "line line--active" : "line"
								}
							></div>
						</li>
						<li>
							<a
								onClick={(e) => handleDocumentScroll(e, "#skills")}
								href="#skills"
							>
								Skills
							</a>
							<div
								className={
									activeSection === "skills" ? "line line--active" : "line"
								}
							></div>
						</li>
						<li>
							<a
								onClick={(e) => handleDocumentScroll(e, "#projects")}
								href="#projects"
							>
								Projects
							</a>
							<div
								className={
									activeSection === "projects" ? "line line--active" : "line"
								}
							></div>
						</li>
						<li>
							<a
								onClick={(e) => handleDocumentScroll(e, "#testimonials")}
								href="#testimonials"
							>
								Testimonials
							</a>
							<div
								className={
									activeSection === "testimonials"
										? "line line--active"
										: "line"
								}
							></div>
						</li>
						<li>
							<a
								onClick={(e) => handleDocumentScroll(e, "#contact")}
								href="#contact"
							>
								Contact
							</a>
							<div
								className={
									activeSection === "contact" ? "line line--active" : "line"
								}
							></div>
						</li>
						<li>
							<a href={Resume} download>
								Download My Résumé
							</a>
							<div className="line line--active--blue"></div>
						</li>
					</LayoutRow>
				</ul>
			</LayoutRow>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	position: sticky;
	inset: 0;
	height: 10vh;
	background-color: rgba(220, 233, 251, 0.2);
	padding: 0 6rem;
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
		0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
	z-index: 10;
	.logo {
		width: 4rem;
	}
	a {
		text-transform: uppercase;
		font-size: 1.4rem;
		cursor: pointer;
	}
	.line {
		height: 0.16rem;
		width: 100%;
		background-color: ${colours.secondaryColour};
		opacity: 0;
	}
	.line--active {
		opacity: 1;
	}
	.line--active--blue {
		opacity: 0.2;
		background-color: ${colours.primaryColour};
	}

	@media screen and (min-width: 1200px) and (orientation: landscape) {
		padding: 0 10rem;
	}
	@media screen and (min-width: 1200px) and (min-height: 800px) and (orientation: landscape) {
		padding: 0 12rem;
	}

	@media screen and (min-width: 1400px) and (orientation: landscape) {
		padding: 0 16rem;
		.logo {
			width: 4.4rem;
		}
		a {
			font-size: 1.8rem;
		}
	}
	@media screen and (min-width: 1600px) and (min-height: 1100px) and (orientation: landscape) {
		padding: 0 20rem;
		.logo {
			width: 4.8rem;
		}
		a {
			font-size: 2rem;
		}
	}
	@media screen and (min-width: 1700px) and (orientation: landscape) {
		padding: 0 24rem;
	}

	@media screen and (min-width: 1800px) and (orientation: landscape) {
		padding: 0 32rem;
	}
`;

export default NavDesktop;
