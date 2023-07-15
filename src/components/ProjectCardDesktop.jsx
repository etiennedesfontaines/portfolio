import React from "react";
import styled from "styled-components";

//components:
import LayoutRow from "./LayoutRow";
import LayoutColumn from "./LayoutColumn";
import Header from "./Header";
import Image from "./Image";
import IconList from "./IconList";

const ProjectCardDesktop = ({
	title,
	image,
	altText,
	description,
	technologies,
	links,
	swapOrder,
}) => {
	return (
		<Card swapOrder={swapOrder}>
			<LayoutRow justify="space-between" gap="2.4rem">
				<div className="project-image-container">
					<Image imageSrc={image} altText={altText} />
				</div>
				<LayoutColumn align="center" gap="2.4rem">
					<Header hTag="h3" title={title} noMargin />
					<p className="description">{description}</p>
					<Header hTag="h4" title="Technologies" noMargin />
					<IconList icons={technologies} />
					<LayoutRow justify="center" gap="2.4rem">
						<a href={links[0]} target="_blank">
							Github
						</a>
						<a href={links[1]} target="_blank">
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
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
		0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2);

	.project-image-container {
		min-width: 48%;
		order: ${(props) => props.swapOrder && "2"};
		border-radius: 1.6rem;
	}

	.description {
		text-align: center;
	}
	a {
		width: 12rem;
		padding: 0.8rem 1.6rem;
		border-radius: 8px;
		border: 1px solid #e6e6e6;
		text-decoration: none;
		cursor: pointer;
	}
`;

export default ProjectCardDesktop;
