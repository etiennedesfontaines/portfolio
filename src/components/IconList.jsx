import React from "react";
import styled from "styled-components";

//components
import LayoutRow from "./LayoutRow";
import LayoutColumn from "./LayoutColumn";

const IconList = ({ icons, fillParent }) => {
	return (
		<StyledIconList fillParent={fillParent}>
			<LayoutRow justify="space-between" gap="1.6rem" wrap="wrap">
				{icons.map((icon) => {
					return (
						<li key={icon.name}>
							<LayoutColumn align="center" gap="0.4rem">
								<img src={icon.iconImage} />
								<p>{icon.name}</p>
							</LayoutColumn>
						</li>
					);
				})}
			</LayoutRow>
		</StyledIconList>
	);
};

const StyledIconList = styled.ul`
	width: 100%;
	padding: 0 0.8rem;

	p {
		font-size: 0.8rem;
		text-align: center;
	}
	@media screen and (min-width: 1200px) {
		img {
			width: 3.2rem;
		}
		p {
			font-size: 1.2rem;
		}
	}
`;

export default IconList;
