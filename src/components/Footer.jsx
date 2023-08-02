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
				<SocialIconList />
				<LayoutColumn gap="0.4rem" align="center">
					<small>@2023 Etienne Desfontaines - all rights reserved.</small>
					<a href="#home" target="_blank" rel="noreferrer noopener">
						Privacy Policy
					</a>
					<a href="#home">Sitemap</a>
				</LayoutColumn>
			</LayoutColumn>
		</StyledFooter>
	);
};

const StyledFooter = styled.div`
	padding: 2.4rem 0.8rem;
	background-color: rgba(220, 233, 251, 0.2);

	small {
		font-family: ${fonts.bodyFont};
	}
	a {
		font-size: 0.8rem;
	}

	@media screen and (min-width: 460px) {
		small,
		a {
			font-size: 1rem;
		}
	}

	@media screen and (min-width: 800px) {
		a,
		small {
			font-size: 1.2rem;
		}
	}

	@media screen and (min-width: 1024px) and (orientation: landscape) {
		a,
		small {
			font-size: 1rem;
		}
	}
`;

export default Footer;
