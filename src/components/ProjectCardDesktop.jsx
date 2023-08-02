import React from "react";
import styled from "styled-components";

//components:
import LayoutRow from "./LayoutRow";
import LayoutColumn from "./LayoutColumn";
import Header from "./Header";
import Image from "./Image";
import IconList from "./IconList";
import { colours } from "../styles/styleVariables";

const ProjectCardDesktop = ({
	title,
	image,
	altText,
	description,
	technologies,
	links,
	swapOrder,
}) => {
	const resetScroll = (e) => {
		const scrollableContainer = e.target.querySelector(".scrollable-container");
		if (scrollableContainer) {
			scrollableContainer.scrollTop = 0;
		}
	};
	return (
		<Card swapOrder={swapOrder} onMouseLeave={(e) => resetScroll(e)}>
			<LayoutRow justify="space-between" gap="2.4rem" width="100%">
				<div className="project-image-container">
					<Image
						imageSrc={image}
						altText={altText}
						width="100%"
						height="auto"
						radius="1.6rem"
					/>
				</div>
				<LayoutColumn
					justify="space-between"
					align="center"
					gap="1.6rem"
					width="46%"
				>
					<Header hTag="h3" title={title} noMargin />
					<div className="scrollable-container">
						<p className="description">{description}</p>
					</div>
					<div className="technologies">
						<Header hTag="h4" title="Technologies" noMargin noLine />
						<IconList icons={technologies} />
					</div>
					<LayoutRow justify="space-evenly" width="100%">
						<a href={links[0]} target="_blank" rel="noreferrer noopener">
							Github
						</a>
						<a href={links[1]} target="_blank" rel="noreferrer noopener">
							Live Site
						</a>
					</LayoutRow>
				</LayoutColumn>
			</LayoutRow>
		</Card>
	);
};

const Card = styled.div`
	padding: 2.4rem;
	border-radius: 1.6rem;
	background-color: rgba(220, 233, 251, 0.13);
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
		0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2);

	.project-image-container {
		background-color: transparent;
		width: 54%;
		display: flex;
		align-items: center;
		order: ${(props) => props.swapOrder && "2"};
		border-radius: 1.6rem;
	}

	.header {
		align-self: center;
		.line {
			opacity: 0.5;
		}
	}

	.description {
		text-align: center;
		font-size: 1.4rem;
		transform: ${(props) => props.swapOrder && "rotateY(180deg)"};
	}

	.technologies {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	a {
		background-color: rgba(255, 255, 255, 0.4);
		font-size: 1.2rem;
		width: 12rem;
		padding: 0.4rem 0.8rem;
		border-radius: 8px;
		box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
			0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
		text-decoration: none;
		cursor: pointer;
		transition: all 0.5s ease;
		&:hover {
			background-color: ${colours.primaryColour};
			color: ${colours.white};
		}
	}
	.scrollable-container {
		width: 100%;
		height: 10.8rem;
		padding: 0 0.4rem;
		overflow: -moz-scrollbars-vertical;
		overflow-y: scroll; /* Standard syntax */
		overflow-y: -webkit-scrollbar; /* Chrome, Safari, Opera */
		overflow-y: scrollbar; /* Internet Explorer 10+ */
		overflow-y: -ms-scrollbar; /* Internet Explorer (old versions) */
		overflow-y: -moz-scrollbars-vertical; /* Firefox */
		transform: ${(props) => props.swapOrder && "rotateY(180deg)"};
	}

	.scrollable-container::-webkit-scrollbar {
		width: 0.8rem;
	}

	.scrollable-container::-webkit-scrollbar-track {
		border-radius: 0.8rem;
		background: rgba(220, 233, 251, 1);
	}

	.scrollable-container::-webkit-scrollbar-thumb {
		border-radius: 0.8rem;
		background-color: rgba(2, 84, 157, 0.2);
	}

	.scrollable-container::-webkit-scrollbar-thumb:hover {
		background-color: rgba(2, 84, 157, 0.4);
	}

	/* Scrollbar styles for Firefox */
	.scrollable-container {
		scrollbar-width: thin;
	}

	.scrollable-container::-webkit-scrollbar {
		width: 0.8rem;
	}

	.scrollable-container::-webkit-scrollbar-track {
		border-radius: 0.8rem;
		background: rgba(220, 233, 251, 1);
	}

	.scrollable-container::-webkit-scrollbar-thumb {
		border-radius: 0.8rem;
		background-color: rgba(2, 84, 157, 0.2);
	}

	.scrollable-container::-webkit-scrollbar-thumb:hover {
		background-color: rgba(2, 84, 157, 0.4);
	}
	@media screen and (min-width: 1400px) and (orientation: landscape) {
		.description {
			font-size: 1.6rem;
		}
		a {
			font-size: 1.4rem;
		}
	}
	@media screen and (min-width: 1600px) and (min-height: 1100px) and (orientation: landscape) {
		.description {
			font-size: 1.8rem;
		}
		a {
			font-size: 1.6rem;
		}
	}
`;

export default ProjectCardDesktop;
