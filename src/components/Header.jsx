import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//styles
import { colours, fonts } from "../styles/styleVariables";

const Header = ({
	title,
	subTitle = null,
	hTag = "h1",
	noMargin,
	alignText,
}) => {
	const HeadingTag = hTag;

	return (
		<StyledHeader noMargin={noMargin} alignText={alignText} subTitle={subTitle}>
			<HeadingTag>{title}</HeadingTag>
			<div className="line"></div>
			<p>{subTitle}</p>
		</StyledHeader>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	hTag: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
};

const StyledHeader = styled.header`
	margin-top: ${(props) => (props.noMargin ? "0" : "1.6rem")};
	text-align: ${(props) => props.alignText};

	.line {
		width: 100%;
		height: 0.1rem;
		background-color: ${colours.secondaryColour};
		margin-top: 0.2rem;
	}

	p {
		display: ${(props) => (props.subTitle ? "block" : "none")};
		font-family: ${fonts.headingFont};
		font-size: 1.2rem;
		font-weight: 500;
		margin-top: 0.8rem;
	}
	@media screen and (min-width: 1200px) {
		p {
			font-size: 2.4rem;
			margin-top: 1.6rem;
		}
		.line {
			height: 0.2rem;
		}
	}
`;

export default Header;
