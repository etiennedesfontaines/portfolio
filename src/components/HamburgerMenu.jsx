import React from "react";
import styled from "styled-components";

const HamburgerMenu = ({ burgerMenuIsActive, setBurgerMenuIsActive }) => {
	return (
		<NavLinks burgerMenuIsActive={burgerMenuIsActive}>
			<li>
				<a href="#home">Home</a>
				<div className="line"></div>
			</li>
			<li>
				<a href="#about">About</a>
				<div className="line"></div>
			</li>
			<li>
				<a href="#skills">Skills</a>
				<div className="line"></div>
			</li>
			<li>
				<a href="#projects">Projects</a>
				<div className="line"></div>
			</li>
			<li>
				<a href="#testimonials">Testimonials</a>
				<div className="line"></div>
			</li>
			<li>
				<a href="#contact">Contact</a>
				<div className="line"></div>
			</li>
		</NavLinks>
	);
};

const NavLinks = styled.ul`
	position: absolute;
	inset: 0;
	height: 90vh;
	padding: 1.6rem 0.8rem;
	display: flex;
	flex-direction: column;
	background-color: white;
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
		background-color: #333;
		margin-top: 0.4rem;
	}
`;

export default HamburgerMenu;
