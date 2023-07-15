import React from "react";
import styled from "styled-components";

//components
import LayoutRow from "./LayoutRow";

//styles
import { colours } from "../styles/styleVariables";

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
				<img src="#" alt="Logo" className="logo" />

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
	background-color: ${colours.white};
	padding: 0 12.8rem;
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
		0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
	z-index: 10;

	a {
		text-transform: uppercase;
		font-size: 1.6rem;
		cursor: pointer;
	}
	.line {
		height: 0.1rem;
		width: 100%;
		background-color: ${colours.secondaryColour};
		opacity: 0;
	}
	.line--active {
		opacity: 1;
	}
`;

export default NavDesktop;
