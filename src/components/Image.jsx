import React from "react";
import styled from "styled-components";

const Image = ({ imageSrc, altText, width }) => {
	return (
		<ImageContainer width={width}>
			<img src={imageSrc} alt={altText} />
		</ImageContainer>
	);
};

const ImageContainer = styled.div`
	width: ${(props) => (props.width ? props.width : "100%")};
	height: auto;
	overflow: hidden;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`;

export default Image;
