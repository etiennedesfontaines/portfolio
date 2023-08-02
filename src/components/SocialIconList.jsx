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
							<a href={icon.link} target="_blank" rel="noreferrer">
								<img src={icon.iconImage} alt={icon.name} />
							</a>
						</li>
					);
				})}
			</LayoutRow>
		</IconList>
	);
};

const IconList = styled.ul`
	padding: 0.4rem 0 0 0;

	a {
		cursor: pointer;
	}
	li {
		padding: 0 0.8rem;
	}

	@media screen and (min-width: 460px) {
		padding: 0.8rem 0 0 0;
		li {
			padding: 0 1.2rem;
		}
		img {
			width: 2.8rem;
		}
	}

	@media screen and (min-width: 800px) {
		padding: 1.6rem 0 0 0;
		li {
			padding: 0 1.6;
		}
		img {
			width: 3.2rem;
		}
	}

	@media screen and (min-width: 1024px) and (orientation: landscape) {
		padding: 0;
		li:first-child {
			padding-left: 0;
		}
		img {
			width: 2.4rem;
			/* width: 3.2rem;	 */
		}
	}
	@media screen and (min-width: 1400px) and (orientation: landscape) {
		img {
			width: 2.8rem;
		}
	}
	@media screen and (min-width: 1600px) and (min-height: 1100px) and (orientation: landscape) {
		img {
			width: 3.2rem;
		}
	}
`;

export default SocialIconList;
