import React from "react";
import styled from "styled-components";

//data
import { colours } from "../styles/styleVariables";

const ContactForm = () => {
	return (
		<Form name="contact-form" method="POST" data-netlify="true">
			<label htmlFor="name">
				<input type="text" id="name" name="name" placeholder="Name" required />
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
				<textarea name="message" id="message" placeholder="Message"></textarea>
			</label>
			<input type="submit" value="Get In Touch" contentEditable="true" />
		</Form>
	);
};

const Form = styled.form`
	align-self: stretch;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;

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
	@media screen and (min-width: 1200px) {
		width: 100%;
		gap: 2.4rem;

		input,
		textarea {
			font-size: 1.6rem;
			border-radius: 1.6rem;
			padding: 0.8rem 1.6rem;
		}

		input[type="submit"] {
			width: 100%;
		}
	}
`;

export default ContactForm;
