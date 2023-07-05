//Frameworks and Libraries
import React from "react";
import styled from "styled-components";

//components
import Image from "./Image";
import Header from "./Header";

//images
import profileImage from "../images/profile-placeholder.jpg";

//icons
import chevronDown from "../icons/chevron-down.svg";

const Home = () => {
	return (
		<Section>
			<Header title="Etienne Desfontaines" subTitle="Frontend Developer" />
			<Image
				imageSrc={profileImage}
				description="Description of my profile image"
			/>
			<img src={chevronDown} alt="chevron pointing down" />
		</Section>
	);
};

const Section = styled.div`
	height: 90vh;
	margin-bottom: 1.6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.6rem;
`;

export default Home;
