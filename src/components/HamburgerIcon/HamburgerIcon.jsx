import React, { useState } from "react";
import styled from "styled-components";
import "./HamburgerIcon.scss";

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
	height: 2.4rem;
	width: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const Bar = styled.div`
	width: 100%;
	height: 12.5%;
	border-radius: 0.8rem;
	background-color: black;
`;

export default HamburgerIcon;
