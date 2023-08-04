import React, { useState } from "react";
import styled from "styled-components";

//data
import { colours } from "../styles/styleVariables";
import LayoutColumn from "./LayoutColumn";

const ContactForm = ({ isMobile }) => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const form = event.target;
			const formData = new FormData(form);

			// Replace 'your-form-endpoint' with your Netlify form submission endpoint
			const response = await fetch("/", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				setIsSubmitted(true);
			} else {
				console.error("Form submission failed");
				// You can handle error cases here, show an error message, etc.
			}
		} catch (error) {
			console.error("Form submission error:", error);
		}
	};

	return (
		<Form
			onSubmit={handleSubmit}
			name="contact"
			method="POST"
			netlify="true"
			isSubmitted={isSubmitted}
		>
			<input type="hidden" name="form-name" value="contact" />
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
				<input type="submit" name="submit" value="Get In Touch" />
			</LayoutColumn>

			{isSubmitted && (
				<div className="submission-successful">
					<div>
						<h3>Submission Successful!</h3>
						<p>
							Thank you for getting in touch. <br /> I will respond to your
							enquiry shortly.
						</p>
						<p>Warmly, Etienne.</p>
					</div>
				</div>
			)}
		</Form>
	);
};

const Form = styled.form`
	position: relative;
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
		opacity: ${(props) => props.isSubmitted && "0"};
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

	.submission-successful {
		position: absolute;
		inset: 0;
		z-index: 100;
		background-color: ${colours.white};
		border-radius: 0.8rem;
		box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
			0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2);

		div {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			background-color: rgba(220, 233, 251, 0.2);
			border-radius: 0.8rem;

			h3 {
				margin-bottom: 1.2rem;
			}
			p + p {
				margin-top: 1.2rem;
			}
		}
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
