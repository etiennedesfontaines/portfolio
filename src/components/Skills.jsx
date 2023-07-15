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
								<p>{icon.name}</p>
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

		p {
			font-size: 0.8rem;
			text-align: center;
		}
	}
	@media screen and (min-width: 1200px) {
		li {
			flex-basis: calc((100% / 6 - 1.6rem));
			margin: 2.4rem 0;

			p {
				font-size: 1.6rem;
			}
			img {
				width: 4.8rem;
			}
		}
	}
`;

export default Skills;
