import React from "react";
import styled from "styled-components";

//data
import { colours } from "../styles/styleVariables";
import LayoutColumn from "./LayoutColumn";

const ContactForm = ({ isMobile }) => {
	return (
		<Form
			name="contact-form"
			method="POST"
			data-netlify="true"
			action="/"
			onSubmit={handleSubmit}
			netlify-honeypot="bot-field"
		>
			<LayoutColumn gap={isMobile ? "2.4rem" : "3.2rem"}>
				<label htmlFor="name">
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Name"
						required
					/>
				</label>
				<label htmlFor="email">
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						required
					/>
				</label>
				<label htmlFor="tel">
					<input type="tel" id="tel" name="tel" placeholder="Contact Number" />
				</label>
				<label htmlFor="message">
					<textarea
						name="message"
						id="message"
						placeholder="Message"
					></textarea>
				</label>
				<input type="hidden" name="form-name" value="contact-form" />
				<input type="submit" value="Get In Touch" />
			</LayoutColumn>
		</Form>
	);
};

const Form = styled.form`
	width: 100%;

	input,
	textarea {
		width: 100%;
		font-family: Montserrat;
		font-size: 1.2rem;
		border: none;
		border-radius: 0.8rem;
		box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
			0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
		padding: 0.4rem 1.6rem;
		background-color: rgba(220, 233, 251, 0.1);
		color: ${colours.textColour};
		:focus {
			outline-color: ${colours.primaryColour};
		}
	}

	textarea {
		height: 9.6rem;
	}

	input[type="submit"] {
		width: max-content;
		margin: auto;
		color: ${colours.white};
		background-color: ${colours.primaryColour};
		border: 0.1rem solid ${colours.white};
	}

	@media screen and (min-width: 360px) {
		input,
		textarea {
			font-size: 1.4rem;
		}
		input[type="submit"] {
			font-size: 1.2rem;
		}
	}

	@media screen and (min-width: 460px) {
		input,
		textarea {
			font-size: 1.6rem;
		}
		input[type="submit"] {
			font-size: 1.4rem;
		}
	}

	@media screen and (min-width: 800px) {
		input,
		textarea {
			font-size: 1.8rem;
		}
		input[type="submit"] {
			font-size: 1.6rem;
		}
	}

	//Desktop:

	@media screen and (min-width: 1024px) and (orientation: landscape) {
		width: 100%;
		gap: 2.4rem;

		input,
		textarea {
			font-size: 1.4rem;
			border-radius: 1.6rem;
			padding: 0.8rem 1.6rem;
		}
		textarea {
			height: 19.2rem;
		}

		input[type="submit"] {
			width: 100%;
			font-size: 1.2rem;
			cursor: pointer;
			transition: all 0.5s ease;
			&:hover {
				background-color: ${colours.hovorColour};
			}
		}
	}
	@media screen and (min-width: 1400px) and (orientation: landscape) {
		input,
		textarea {
			font-size: 1.6rem;
		}

		input[type="submit"] {
			font-size: 1.4rem;
		}
	}
	@media screen and (min-width: 1600px) and (min-height: 1100px) and (orientation: landscape) {
		input,
		textarea {
			font-size: 1.8rem;
		}

		input[type="submit"] {
			font-size: 1.6rem;
		}
	}
`;

export default ContactForm;
