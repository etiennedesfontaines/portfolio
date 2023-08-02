import React from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import { colours } from "../styles/styleVariables";

const Wave = () => {
	return (
		<StyledWave
			width="1681"
			height="265"
			viewBox="0 0 1681 265"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1680.18 256.237C1471.57 256.237 1479.16 8.34805 1263.46 8.34805C1047.75 8.34805 1042.44 256.237 837.182 256.237C631.927 256.237 633.965 8.34805 419.939 8.34805C205.913 8.34805 209.686 256.237 0.176514 256.237"
				stroke={colours.highlightColour}
				strokeWidth="12"
			/>
		</StyledWave>
	);
};

const StyledWave = styled.svg`
	position: absolute;
	top: 30%;
	z-index: -1;
	opacity: 0.3;
	display: none;
`;

export default Wave;
