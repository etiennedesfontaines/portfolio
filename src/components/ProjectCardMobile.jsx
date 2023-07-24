import React from "react";
import styled from "styled-components";

//components:
import Image from "./Image";
import Header from "./Header";
import IconList from "./IconList";
import LayoutRow from "./LayoutRow";
import LayoutColumn from "./LayoutColumn";
import { colours } from "../styles/styleVariables";

const ProjectCardMobile = ({
	title,
	image,
	altText,
	description,
	technologies,
	roles = [],
	links,
	columns,
}) => {
	return (
		<ProjectCard>
			<LayoutColumn align="center" gap="1.6rem">
				<Header hTag="h3" title={title} hideSubtitle noMargin noLine />
				<div className="project-card__center">
					<Image imageSrc={image} altText={altText} radius="0" />
					<p className="description">{description}</p>
					{/* <p className="role">
						<span className="roles-heading">My Roles:</span> {roles}
					</p> */}

					<Header hTag="h4" title="Technologies" hideSubtitle noMargin noLine />
					<IconList icons={technologies} columns={columns} fillParent />
				</div>
				<LayoutRow justify="space-evenly" gap="2.4rem" width="100%">
					<a className="button" href={links[0]} target="_blank">
						Github
					</a>
					<a className="button" href={links[1]} target="_blank">
						Live Site
					</a>
				</LayoutRow>
			</LayoutColumn>
		</ProjectCard>
	);
};

const ProjectCard = styled.div`
	background-color: rgba(220, 233, 251, 0.2);
	padding: 1.6rem 0rem;
	border-radius: 0.8rem;
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
		0px 1px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2);

	.project-card__center {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.6rem;
		background-color: ${colours.white};
		padding-bottom: 1.6rem;
	}
	.description {
		padding: 0 0.8rem;
		background-color: ${colours.white};
	}
	.roles-heading {
		text-decoration: underline;
		font-weight: 500;
		padding-right: 0.4rem;
	}
	.button {
		width: 10rem;
		padding: 0.4rem 1.6rem;
		border-radius: 8px;
		border: 1px solid #e6e6e6;
		margin: 0.8rem;
		background-color: ${colours.white};
	}

	@media screen and (min-width: 460px) {
		.button {
			font-size: 1.4rem;
		}
	}
	@media screen and (min-width: 600px) {
		.description {
			padding: 0 1.6rem;
		}
	}
	@media screen and (min-width: 800px) {
		.button {
			font-size: 1.6rem;
			width: 14rem;
		}
	}
`;

export default ProjectCardMobile;
