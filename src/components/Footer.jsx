import React from "react";
import styled from "styled-components";

//components
import LayoutColumn from "./LayoutColumn";
import SocialIconList from "./SocialIconList";

//data
import { fonts } from "../styles/styleVariables";

const Footer = ({ isMobile }) => {
	return (
		<StyledFooter>
			<LayoutColumn gap="1.6rem">
				{isMobile && <SocialIconList />}
				<LayoutColumn gap="0.4rem" align="center">
					<small>@2023 Etienne Desfontaines - all rights reserved.</small>
					<a href="">Privacy Policy</a>
					<a href="">Sitemap</a>
				</LayoutColumn>
			</LayoutColumn>
		</StyledFooter>
	);
};

const StyledFooter = styled.div`
	padding: 1.6rem 0.8rem;
	margin-top: 1.6rem;
	small {
		font-family: ${fonts.bodyFont};
	}
	a {
		font-size: 0.8rem;
	}

	@media screen and (min-width: 1200px) {
		a,
		small {
			font-size: 1.2rem;
		}
	}
`;

export default Footer;
