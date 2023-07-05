//Frameworks and Libraries
import React from "react";
import styled from "styled-components";

const Section = ({ children, id }) => {
	return <StyledSection id={id}>{children}</StyledSection>;
};

const StyledSection = styled.div`
	padding: 1.6rem 0.8rem;
	margin: 1.6rem 0 1.6rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
`;

export default Section;
