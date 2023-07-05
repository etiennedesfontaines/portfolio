import { v4 as uuidv4 } from "uuid";

//Technology Icons:
import htmlIcon from "./icons/html-icon.svg";
import cssIcon from "./icons/css-icon.svg";
import javascriptIcon from "./icons/javaScript-icon.svg";
import reactIcon from "./icons/react-icon.svg";
import gitIcon from "./icons/git-icon.svg";
import jQueryIcon from "./icons/jquery-icon.svg";
import cliIcon from "./icons/cli-icon.svg";
import framerMotionIcon from "./icons/framer-motion-icon.svg";
import sassIcon from "./icons/sass-icon.svg";
import apiIcon from "./icons/api-icon.svg";
import figmaIcon from "./icons/figma-icon.svg";
import styledComponentsIcon from "./icons/styled-components-icon.svg";

//Social Icons:
import linkdInIcon from "./icons/linkdin-icon.svg";
import gitHubIcon from "./icons/github-icon.svg";
import exercismIcon from "./icons/exercism-icon.svg";
import frontedMentoreIcon from "./icons/frontend-mentore-icon.svg";
import twitterIcon from "./icons/twitter-icon.svg";

//Images:
import twoAngelsImage from "./images/two-agnels.jpg";
import danProfileImage from "./images/tetimonials-profile-placeholder.jpg";

export const technologyIcons = [
	{ iconImage: htmlIcon, name: "HTML5" },
	{ iconImage: cssIcon, name: "CSS" },
	{ iconImage: javascriptIcon, name: "Javascript" },
	{ iconImage: reactIcon, name: "React" },
	{ iconImage: gitIcon, name: "Git" },
	{ iconImage: jQueryIcon, name: "jQuery" },
	{ iconImage: cliIcon, name: "Cli" },
	{ iconImage: framerMotionIcon, name: "Framer Motion" },
	{ iconImage: sassIcon, name: "Sass" },
	{ iconImage: apiIcon, name: "Api" },
	{ iconImage: figmaIcon, name: "Figma" },
	{ iconImage: styledComponentsIcon, name: "Styled Components" },
];

export const socialIcons = [
	{ iconImage: linkdInIcon },
	{ iconImage: gitHubIcon },
	{ iconImage: exercismIcon },
	{ iconImage: frontedMentoreIcon },
	{ iconImage: twitterIcon },
];

export const projects = [
	{
		title: "TwoAngels",
		image: twoAngelsImage,
		description:
			"Lorem ipsum dolor sit amet consectetur. Fames in hac dictumst commodo velit a cras sapien ante. Purus sodales id non tincidunt amet. A tortor consequat viverra ut vel. Lacinia sed ut libero integer.",
		technologies: [
			{ iconImage: htmlIcon, name: "HTML5" },
			{ iconImage: cssIcon, name: "CSS" },
			{ iconImage: sassIcon, name: "Sass" },
			{ iconImage: javascriptIcon, name: "Javascript" },
			{ iconImage: jQueryIcon, name: "jQuery" },
			{ iconImage: apiIcon, name: "Api" },
		],
		links: [
			"https://github.com/etiennedesfontaines/TwoAngels",
			"https://twoangels.co.za/",
		],
	},
];

export const testimonials = [
	{
		imageUrl: danProfileImage,
		title: "Team Leader, Fast Learner, Joyous to work with",
		testimonial:
			"Lorem ipsum dolor sit amet consectetur. Turpis at auctor nisl commodo sit. Elementum fermentum ultrices ac nisl volutpat libero laoreet massa etiam. Pharetra pellentesque lectus a in ipsum sodales.",
		author: "Daniel Forsthofer - Tutto food Co.",
	},
];
