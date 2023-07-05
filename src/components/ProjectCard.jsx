import React from "react";
import styled from "styled-components";

//components:
import Image from "./Image";
import Header from "./Header";
import IconList from "./IconList";

const ProjectCard = ({
	title,
	image,
	description,
	technologies,
	links,
	columns,
}) => {
	return (
		<Card>
			<Header hTag="h3" title={title} hideSubtitle noMargin />
			<Image imageSrc={image} />
			<p className="description">{description}</p>
			<Header hTag="h4" title="Technologies" hideSubtitle noMargin />
			<IconList icons={technologies} columns={columns} fillParent />
			<LinkContainer>
				<a href={links[0]} target="_blank">
					Github
				</a>
				<a href={links[1]} target="_blank">
					Live Site
				</a>
			</LinkContainer>
		</Card>
	);
};

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.6rem;
	padding: 1.6rem 0rem;
	border-radius: 0.8rem;
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
		0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2);

	.description {
		padding: 0 0.8rem;
	}
`;

const LinkContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 1.6rem;

	a {
		width: 8rem;
		padding: 0.4rem 1.6rem;
		border-radius: 8px;
		border: 1px solid #e6e6e6;
		text-decoration: none;
		cursor: pointer;
	}
`;

export default ProjectCard;
