import React from "react";
import styled from "styled-components";

//components
import LayoutRow from "./LayoutRow";
import LayoutColumn from "./LayoutColumn";

const IconList = ({ icons, fillParent }) => {
	return (
		<StyledIconList fillParent={fillParent}>
			<LayoutRow justify="space-evenly" gap="1.6rem" wrap="wrap">
				{icons.map((icon) => {
					return (
						<li key={icon.name}>
							<LayoutColumn align="center" gap="0.4rem">
								<img src={icon.iconImage} alt="" />
								<p className="icon-name">{icon.name}</p>
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
	padding: 0.4rem 0.8rem;
	background-color: transparent;

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
		img {
			width: 2.8rem;
		}
	}
	@media screen and (min-width: 600px) {
		padding: 0.4rem 1.6rem;
	}
	@media screen and (min-width: 800px) {
		img {
			width: 3.2rem;
		}

		.icon-name {
			font-size: 1.4rem;
		}
	}
	@media screen and (min-width: 1024px) and (orientation: landscape) {
		padding: 0;
		img {
			width: 2.4rem;
		}

		.icon-name {
			font-size: 1.2rem;
		}
	}
	@media screen and (min-width: 1400px) and (orientation: landscape) {
		img {
			width: 2.8rem;
		}
		.icon-name {
			font-size: 1.2rem;
		}
	}
`;

export default IconList;
