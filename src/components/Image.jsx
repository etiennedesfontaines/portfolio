import React from "react";
import styled from "styled-components";

const Image = ({ imageSrc, altText, width, minWidth, height }) => {
	return (
		<ImageContainer
			className="image"
			width={width}
			minWidth={minWidth}
			height={height}
		>
			<img src={imageSrc} alt={altText} />
		</ImageContainer>
	);
};

const ImageContainer = styled.div`
	width: ${(props) => (props.width ? props.width : "100%")};
	min-width: ${(props) => props.minWidth};
	height: ${(props) => (props.height ? props.height : "100%")};
	overflow: hidden;
	border-radius: 0.8rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (min-width: 1200px) {
		border-radius: 1.6rem;
	}
`;

export default Image;
