import React from "react";
import styled from "styled-components";

//components
import LayoutRow from "./LayoutRow";

//data
import { socialIcons } from "../portfolioDatabase";

const SocialIconList = () => {
	return (
		<IconList>
			<LayoutRow justify="center">
				{socialIcons.map((icon) => {
					return (
						<li key={icon.iconImage}>
							<a href={icon.link}>
								<img src={icon.iconImage} />
							</a>
						</li>
					);
				})}
			</LayoutRow>
		</IconList>
	);
};

const IconList = styled.ul`
	li {
		padding: 0 0.8rem;
	}

	@media screen and (min-width: 1200px) {
		img {
			width: 3.2rem;
		}
	}
`;

export default SocialIconList;
