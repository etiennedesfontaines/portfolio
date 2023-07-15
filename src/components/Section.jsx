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

	@media screen and (min-width: 1200px) {
		padding: 8rem 12.8rem;

		&.section--is-full-screen {
			padding: 8rem 12.8rem;
		}
	}
`;

export default Section;
