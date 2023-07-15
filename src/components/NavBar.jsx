import React, { useState, useEffect } from "react";

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
				console.log(entries);
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// console.log(entry.target.id);
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
		<>
			{isMobile ? (
				<NavMobile
					burgerMenuIsActive={burgerMenuIsActive}
					setBurgerMenuIsActive={setBurgerMenuIsActive}
					activeSection={activeSection}
				/>
			) : (
				<NavDesktop activeSection={activeSection} />
			)}
		</>
	);
};

export default NavBar;
