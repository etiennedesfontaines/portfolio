import React, { useState } from "react";
import styled from "styled-components";
import "./HamburgerIcon.scss";
import { colours } from "../../styles/styleVariables";

const HamburgerIcon = ({ burgerMenuIsActive, setBurgerMenuIsActive }) => {
	return (
		<Hamburger
			className="hamburger-icon"
			onClick={() => setBurgerMenuIsActive((currentState) => !currentState)}
		>
			<Bar
				className={`hamburger-icon__bar hamburger-icon__bar--top${
					burgerMenuIsActive ? "--active" : ""
				}`}
			></Bar>
			<Bar
				className={`hamburger-icon__bar hamburger-icon__bar--middle${
					burgerMenuIsActive ? "--active" : ""
				}`}
			></Bar>
			<Bar
				className={`hamburger-icon__bar hamburger-icon__bar--bottom${
					burgerMenuIsActive ? "--active" : ""
				}`}
			></Bar>
		</Hamburger>
	);
};

const Hamburger = styled.div`
	width: 2rem;
	height: 2.4rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	@media screen and (min-width: 460px) {
		width: 2.4rem;
		height: 2.8rem;
	}
	@media screen and (min-width: 600px) {
		width: 2.8rem;
		height: 3.2rem;
	}
	@media screen and (max-width: 1023px) and (max-height: 900px) and (orientation: landscape) {
		width: 2rem;
		height: 2.4rem;
	}
`;

const Bar = styled.div`
	width: 100%;
	height: 12.5%;
	border-radius: 0.8rem;
	background-color: ${colours.textColour};
`;

export default HamburgerIcon;
