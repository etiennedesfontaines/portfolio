import React from "react";
import styled from "styled-components";

//components
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import HamburgerMenu from "./HamburgerMenu";

//images
import logo from "../logo/logo.svg";

const NavMobile = ({
	burgerMenuIsActive,
	setBurgerMenuIsActive,
	activeSection,
}) => {
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
		<NavContainer className="nav-mobile">
			<StyledNavBar>
				<a onClick={(e) => handleDocumentScroll(e, "#home")} href="#home">
					<img src={logo} alt="Logo" className="logo" />
				</a>
				<HamburgerIcon
					burgerMenuIsActive={burgerMenuIsActive}
					setBurgerMenuIsActive={setBurgerMenuIsActive}
				/>
			</StyledNavBar>
			<Nav>
				<HamburgerMenu
					burgerMenuIsActive={burgerMenuIsActive}
					setBurgerMenuIsActive={setBurgerMenuIsActive}
					activeSection={activeSection}
				/>
			</Nav>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	position: sticky;
	min-height: 10vh;
	inset: 0;
	z-index: 10;
	background-color: white;
`;

const StyledNavBar = styled.div`
	position: fixed;
	inset: 0;
	height: 10vh;
	background-color: rgba(220, 233, 251, 0.2);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.8rem;
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
		0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
	z-index: 10;

	.logo {
		width: 2.8rem;
		height: auto;
	}

	@media screen and (min-width: 460px) {
		.logo {
			width: 3.2rem;
		}
	}

	//check this
	@media screen and (min-width: 600px) {
		padding: 0rem 7.2rem;
		.logo {
			width: 3.6rem;
		}
	}

	@media screen and (min-width: 800px) {
		padding: 0rem 12rem;
	}
	@media screen and (max-width: 1023px) and (max-height: 900px) and (orientation: landscape) {
		.logo {
			width: 2.8rem;
		}
	}
`;

const Nav = styled.nav`
	position: absolute;
	top: 10vh;
	left: 0;
	right: 0;
`;

export default NavMobile;
