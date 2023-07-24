import React from "react";
import styled from "styled-components";

//components
import LayoutRow from "./LayoutRow";
import LayoutColumn from "./LayoutColumn";

//data
import { skillIcons } from "../portfolioDatabase";

const Skills = ({ isMobile }) => {
	return (
		<SkillList>
			<LayoutRow justify="space-between" wrap="wrap">
				{skillIcons.map((icon) => {
					return (
						<li key={icon.name}>
							<LayoutColumn align="center" gap={isMobile ? "0.4rem" : "0.8rem"}>
								<img src={icon.iconImage} />
								<p className="icon-name">{icon.name}</p>
							</LayoutColumn>
						</li>
					);
				})}
			</LayoutRow>
		</SkillList>
	);
};

const SkillList = styled.ul`
	width: 100%;
	li {
		padding: 0.8rem 0;
		flex-basis: calc((100% / 4 - 1.6rem));
		margin-bottom: 0.4rem 0;
	}
	.icon-name {
		font-size: 0.8rem;
		text-align: center;
		letter-spacing: 0.04rem;
		color: black;
	}

	@media screen and (min-width: 360px) {
		.icon-name {
			font-size: 1rem;
		}
	}

	@media screen and (min-width: 460px) {
		li {
			margin: 0.6rem 0;
		}
		img {
			width: 2.8rem;
		}
	}
	@media screen and (min-width: 800px) {
		li {
			margin-bottom: 0.8rem 0;
		}
		img {
			width: 3.2rem;
		}
		.icon-name {
			font-size: 1.2rem;
		}
	}
	@media screen and (min-width: 1400px) and (orientation: landscape) {
		img {
			width: 3.6rem;
		}
		.icon-name {
			font-size: 1.4rem;
		}
	}
	@media screen and (min-width: 1600px) and (min-height: 1100px) and (orientation: landscape) {
		img {
			width: 4rem;
		}
		.icon-name {
			font-size: 1.6rem;
		}
	}
`;

export default Skills;
