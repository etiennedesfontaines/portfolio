import React, { useState, useEffect } from "react";
import styled from "styled-components";
//components
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const NavBar = ({ isMobile, burgerMenuIsActive, setBurgerMenuIsActive }) => {
	const [activeSection, setActiveSection] = useState(
		isMobile ? "home" : "about"
	);

	useEffect(() => {
		const sections = document.querySelectorAll(".section");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.25, rootMargin: "0px 0px 0px 0px" }
		);

		sections.forEach((section) => {
			observer.observe(section);
		});
	});
	return (
		<StyledNavBar>
			{isMobile ? (
				<NavMobile
					burgerMenuIsActive={burgerMenuIsActive}
					setBurgerMenuIsActive={setBurgerMenuIsActive}
					activeSection={activeSection}
				/>
			) : (
				<NavDesktop activeSection={activeSection} />
			)}
		</StyledNavBar>
	);
};

const StyledNavBar = styled.div`
	position: sticky;
	min-height: 10vh;
	inset: 0;
	z-index: 10;
	background-color: white;
`;

export default NavBar;
