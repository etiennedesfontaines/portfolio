import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Header = ({ title, subTitle, hideSubtitle, hTag = "h1", noMargin }) => {
	const HeadingTag = hTag;

	return (
		<StyledHeader hideSubheading={hideSubtitle} noMargin={noMargin}>
			<HeadingTag>{title}</HeadingTag>
			<div className="line"></div>
			<p>{subTitle}</p>
		</StyledHeader>
	);
};

Header.propTypes = {
	hideSubheading: PropTypes.bool,
	hTag: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
};

const StyledHeader = styled.header`
	margin-top: ${(props) => (props.noMargin ? "0" : "1.6rem")};
	text-align: center;

	.line {
		width: 100%;
		height: 0.1rem;
		background-color: #eda47f;
		margin-top: 0.2rem;
	}

	p {
		font-family: "Playfair Display", serif;
		font-size: 1.2rem;
		font-weight: 500;
		margin-top: 0.8rem;
		display: ${(props) => (props.hideSubtitle ? "none" : "block")};
	}
`;

export default Header;
