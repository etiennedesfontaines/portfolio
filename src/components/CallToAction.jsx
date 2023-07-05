import React from "react";
import styled from "styled-components";

const CallToAction = () => {
	return <CTA>Let's Talk!</CTA>;
};

const CTA = styled.button`
	background-color: #02549d;
	color: #f6f6f5;
	padding: 0.4rem 1.6rem;
	border-radius: 0.8rem;
	border: none;
	border-color: white;
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
		0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	position: absolute;
	bottom: 16%;
	left: 50%;
	transform: translate(-50%, 50%);
	/* position: fixed;
	top: 90vh;
	left: 75%; */

	/* display: none; */
`;

export default CallToAction;
