import React from "react";
import styled from "styled-components";

//components
import LayoutColumn from "./LayoutColumn";

//styles
import { colours } from "../styles/styleVariables";

const HamburgerMenu = ({
	burgerMenuIsActive,
	setBurgerMenuIsActive,
	activeSection,
}) => {
	const handleDocumentScroll = (event, targetId) => {
		event.preventDefault();
		setBurgerMenuIsActive(false);

		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			const navHeight = window.innerHeight * 0.1;
			const targetOffset = targetElement.offsetTop - navHeight;
			setTimeout(() => {
				window.scrollTo({ top: targetOffset, behavior: "smooth" });
			}, 400);
		}
	};

	return (
		<NavLinks
			burgerMenuIsActive={burgerMenuIsActive}
			activeSection={activeSection}
		>
			<LayoutColumn>
				<li>
					<a onClick={(e) => handleDocumentScroll(e, "#home")} href="#home">
						Home
					</a>
					<div
						className={activeSection === "home" ? "line line--active" : "line"}
					></div>
				</li>
				<li>
					<a onClick={(e) => handleDocumentScroll(e, "#about")} href="#about">
						About
					</a>
					<div
						className={activeSection === "about" ? "line line--active" : "line"}
					></div>
				</li>
				<li>
					<a onClick={(e) => handleDocumentScroll(e, "#skills")} href="#skills">
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
							activeSection === "testimonials" ? "line line--active" : "line"
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
			</LayoutColumn>
		</NavLinks>
	);
};

const NavLinks = styled.ul`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 90vh;
	padding: 1.6rem 0.8rem;
	background-color: ${colours.white};
	transform: translateX(
		${(props) => (props.burgerMenuIsActive ? "0" : "-100%")}
	);
	transition: all 0.5s ease;

	li {
		padding: 1.6rem 0rem;
	}

	a {
		text-transform: uppercase;
		font-size: 1.6rem;
	}
	.line {
		width: 100%;
		height: 0.1rem;
		background-color: ${colours.textColour};
		margin-top: 0.4rem;
	}
	.line--active {
		background-color: ${colours.secondaryColour};
	}

	@media screen and (min-width: 460px) {
		a {
			font-size: 2rem;
		}
	}
	@media screen and (min-width: 800px) {
		li {
			padding: 2.4rem 0rem;
		}
		a {
			font-size: 2.2rem;
		}
		.line {
			margin-top: 0.8rem;
		}
	}
`;

export default HamburgerMenu;
