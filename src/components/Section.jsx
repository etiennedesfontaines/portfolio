//Frameworks and Libraries
import React from "react";
import styled from "styled-components";

const Section = ({ children, id, isFullScreen }) => {
	return (
		<StyledSection
			id={id}
			className={isFullScreen ? "section section--is-full-screen" : "section"}
			isFullScreen={isFullScreen}
		>
			{children}
		</StyledSection>
	);
};

const StyledSection = styled.div`
	padding: 2.4rem 0.8rem;

	&.section--is-full-screen {
		padding: 2.4rem 0rem 2.4rem 0rem;
		height: 90vh;
	}

	@media screen and (min-width: 600px) {
		padding: 7.2rem;
	}

	@media screen and (min-width: 800px) {
		padding: 8rem 12rem;
	}

	//should this query be 1024 rather?
	@media screen and (min-width: 996px) {
		padding: 12rem 16rem;
	}

	//DESKTOP

	@media screen and (min-width: 1024px) and (orientation: landscape) {
		padding: 10rem 6rem;

		&.section--is-full-screen {
			padding: 10rem 6rem;
		}
	}

	@media screen and (min-width: 1200px) and (orientation: landscape) {
		padding: 10rem;

		&.section--is-full-screen {
			padding: 10rem;
		}
	}
	@media screen and (min-width: 1200px) and (min-height: 800px) and (orientation: landscape) {
		padding: 16rem 12rem;

		&.section--is-full-screen {
			padding: 16rem 12rem;
		}
	}

	@media screen and (min-width: 1300px) and (orientation: landscape) {
		padding: 12rem;

		&.section--is-full-screen {
			padding: 12rem;
		}
	}
	@media screen and (min-width: 1400px) and (orientation: landscape) {
		padding: 16rem;

		&.section--is-full-screen {
			padding: 16rem;
		}
	}
	@media screen and (min-width: 1400px) and (min-height: 1000px) and (orientation: landscape) {
		padding: 20rem 16rem;

		&.section--is-full-screen {
			padding: 20rem 16rem;
		}
	}
	@media screen and (min-width: 1600px) and (min-height: 1100px) and (orientation: landscape) {
		padding: 24rem 20rem;

		&.section--is-full-screen {
			padding: 24rem 20rem;
		}
	}
	@media screen and (min-width: 1700px) and (orientation: landscape) {
		padding: 24rem;

		&.section--is-full-screen {
			padding: 24rem;
		}
	}
	@media screen and (min-width: 1700px) and (min-height: 1200px) and (orientation: landscape) {
		padding: 28rem 24rem;

		&.section--is-full-screen {
			padding: 28rem 24rem;
		}
	}
	@media screen and (min-width: 1800px) and (orientation: landscape) {
		padding: 20rem 32rem;

		&.section--is-full-screen {
			padding: 20rem 32rem;
		}
	}
`;

export default Section;
