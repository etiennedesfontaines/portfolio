import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//styles
import { colours, fonts } from "../styles/styleVariables";

const Header = ({ title, subTitle = null, hTag = "h1", noMargin, noLine }) => {
	const HeadingTag = hTag;

	return (
		<StyledHeader
			className="header"
			noMargin={noMargin}
			subTitle={subTitle}
			noLine={noLine}
		>
			<HeadingTag>{title}</HeadingTag>
			<div className="line"></div>
			<p className="subtitle">{subTitle}</p>
		</StyledHeader>
	);
};

Header.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	hTag: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
};

const StyledHeader = styled.header`
	margin: ${(props) => (props.noMargin ? "0" : "0.8rem 0")};

	.line {
		width: 100%;
		height: 0.1rem;
		background-color: ${colours.secondaryColour};
		margin-top: 0.2rem;
		display: ${(props) => (props.noLine ? "none" : "block")};
	}

	.subtitle {
		display: ${(props) => (props.subTitle ? "block" : "none")};
		font-family: ${fonts.headingFont};
		font-size: 1.4rem;
		font-weight: 500;
		margin-top: 0.8rem;
		letter-spacing: 0.04rem;
	}

	@media screen and (min-width: 360px) {
		margin: ${(props) => (props.noMargin ? "0" : "1.6rem 0")};
		.subtitle {
			font-size: 1.8rem;
			letter-spacing: 0.04rem;
		}
	}

	@media screen and (min-width: 460px) {
		margin: ${(props) => (props.noMargin ? "0" : "2rem 0")};
		.subtitle {
			font-size: 2.6rem;
			font-weight: 300;
		}
	}

	@media screen and (min-width: 800px) {
		margin: ${(props) => (props.noMargin ? "0" : "2.4rem 0")};
		.subtitle {
			font-size: 3.4rem;
		}
	}

	@media screen and (min-width: 1024px) and (orientation: landscape) {
		margin: ${(props) => (props.noMargin ? "0" : "0.8rem 0")};
		.subtitle {
			font-size: 2.6rem;
			margin: 0.8rem 0;
		}
		.line {
			height: 0.2rem;
		}
	}
	@media screen and (min-width: 1400px) and (orientation: landscape) {
		.subtitle {
			font-size: 3.2rem;
		}
	}
`;

export default Header;
