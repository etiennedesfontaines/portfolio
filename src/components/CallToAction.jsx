import React from "react";
import styled from "styled-components";

//styles:
import { colours } from "../styles/styleVariables";

const CallToAction = () => {
	const handleDocumentScroll = (event, targetId) => {
		event.preventDefault();

		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			const navHeight = window.innerHeight * 0.1;
			const targetOffset = targetElement.offsetTop - navHeight;

			window.scrollTo({ top: targetOffset, behavior: "smooth" });
		}
	};

	return (
		<CTA>
			<a onClick={(e) => handleDocumentScroll(e, "#contact")} href="#contact">
				Let's Talk!
			</a>
		</CTA>
	);
};

const CTA = styled.button`
	position: absolute;
	bottom: 2.6rem;
	left: 50%;
	transform: translateX(-50%);
	padding: 0.4rem 2rem;
	background-color: ${colours.primaryColour};
	border-radius: 0.8rem;
	border: 0.1rem solid ${colours.white};
	box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
		0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		background-color: ${colours.hovorColour};
	}

	a {
		color: ${colours.white};
	}

	@media screen and (min-width: 460px) {
		a {
			font-size: 1.4rem;
		}
	}
	@media screen and (min-width: 800px) {
		bottom: 3.8rem;
		a {
			font-size: 1.6rem;
		}
	}

	//DESKTOP:

	@media screen and (min-width: 1024px) and (orientation: landscape) {
		position: relative;
		bottom: unset;
		left: unset;
		transform: unset;
		padding: 0.8rem 1.6rem;
		a {
			font-size: 1.2rem;
		}
	}
	@media screen and (min-width: 1400px) and (orientation: landscape) {
		a {
			font-size: 1.4rem;
		}
	}
	@media screen and (min-width: 1600px) and (min-height: 1100px) and (orientation: landscape) {
		a {
			font-size: 1.6rem;
		}
	}
`;

export default CallToAction;
