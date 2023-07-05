import React from "react";
import styled from "styled-components";
import IconList from "./IconList";

import { socialIcons } from "../portfolioDatabase";

const Footer = () => {
	return (
		<StyledFooter>
			<IconList icons={socialIcons} columns="5" />
			<div>
				<small>@2023 Etienne Desfontaines - all rights reserved.</small>
				<a href="">Privacy Policy</a>
				<a href="">Sitemap</a>
			</div>
		</StyledFooter>
	);
};

const StyledFooter = styled.div`
	padding: 1.6rem 0.8rem;
	margin-top: 1.6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.4rem;
	}
	small,
	a {
		font-size: 0.8rem;
	}
`;

export default Footer;
