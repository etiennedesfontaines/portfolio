import React from "react";
import styled from "styled-components";

//components
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = ({ isMobile, burgerMenuIsActive, setBurgerMenuIsActive }) => {
	return (
		<NavContainer>
			<StyledNavBar>
				<img src="#" alt="Logo" className="logo" />
				<HamburgerIcon
					burgerMenuIsActive={burgerMenuIsActive}
					setBurgerMenuIsActive={setBurgerMenuIsActive}
				/>
			</StyledNavBar>
			<Nav>
				<HamburgerMenu
					burgerMenuIsActive={burgerMenuIsActive}
					setBurgerMenuIsActive={setBurgerMenuIsActive}
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
`;

const StyledNavBar = styled.div`
	position: fixed;
	inset: 0;
	height: 10vh;
	background-color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.8rem;
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
		0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
	z-index: 10;
`;

const Nav = styled.nav`
	position: absolute;
	top: 10vh;
	left: 0;
	right: 0;
`;

export default NavBar;
