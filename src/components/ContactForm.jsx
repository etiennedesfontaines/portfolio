import React from "react";
import styled from "styled-components";

const ContactForm = () => {
	return (
		<Form name="contact-form" method="POST" data-netlify="true">
			<label for="name">
				<input type="text" id="name" name="name" placeholder="Name" required />
			</label>
			<label for="email">
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					required
				/>
			</label>
			<label for="tel">
				<input type="tel" id="tel" name="tel" placeholder="Contact Number" />
			</label>
			<label for="message">
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
			outline-color: #02549d;
		}
	}

	textarea {
		height: 9.6rem;
	}

	input[type="submit"] {
		width: max-content;
		margin: auto;
		color: white;
		background-color: #02549d;
	}
`;

export default ContactForm;
