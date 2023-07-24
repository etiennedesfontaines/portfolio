import React from "react";
import styled from "styled-components";

const Image = ({
	imageSrc,
	altText,
	width,
	minWidth,
	height,
	radius,
	frameImage,
	objectFit,
	objectPosition,
}) => {
	return (
		<ImageContainer
			width={width}
			minWidth={minWidth}
			height={height}
			radius={radius}
			frameImage={frameImage}
			objectFit={objectFit}
			objectPosition={objectPosition}
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
	border-radius: ${(props) => props.radius && props.radius};
	img {
		width: 100%;
		height: 100%;
		object-fit: ${(props) => props.objectFit && props.objectFit};
		object-position: ${(props) => props.objectPosition && props.objectPosition};
	}

	//frame Image
	padding: ${(props) => props.frameImage && "2rem"};
	background-color: ${(props) =>
		props.frameImage && "rgba(220, 233, 251, 0.3)"};

	img {
		border-radius: ${(props) => props.frameImage && "0.8rem"};
	}

	@media screen and (min-width: 800px) {
		padding: ${(props) => props.frameImage && "3.2rem"};

		img {
			border-radius: ${(props) => props.frameImage && "1.6rem"};
		}
	}

	@media screen and (min-width: 1024px) and (orientation: landscape) {
		padding: ${(props) => props.frameImage && "1.6rem"};
		border-radius: ${(props) => props.frameImage && "1.6rem"};
		img {
			border-radius: ${(props) => props.frameImage && "1.2rem"};
		}
	}
	@media screen and (min-width: 1400px) and (orientation: landscape) {
		img {
			border-radius: ${(props) => props.frameImage && "1.6rem"};
		}
	}
`;

export default Image;
