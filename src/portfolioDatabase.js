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
import memoryImage from "./images/memory.jpg";
import danProfileImage from "./images/tetimonials-profile-placeholder.jpg";

export const skillIcons = [
	{ iconImage: htmlIcon, name: "HTML5" },
	{ iconImage: cssIcon, name: "CSS" },
	{ iconImage: javascriptIcon, name: "Javascript" },
	{ iconImage: reactIcon, name: "React" },
	{ iconImage: gitIcon, name: "Git" },
	{ iconImage: jQueryIcon, name: "jQuery" },
	{ iconImage: cliIcon, name: "Cli" },
	{
		iconImage: framerMotionIcon,
		name: "Framer Motion",
		className: "skillIcon",
	},
	{ iconImage: sassIcon, name: "Sass", className: "skillIcon" },
	{ iconImage: apiIcon, name: "Api", className: "skillIcon" },
	{ iconImage: figmaIcon, name: "Figma", className: "skillIcon" },
	{
		iconImage: styledComponentsIcon,
		name: "Styled Components",
		className: "skillIcon",
	},
];

export const socialIcons = [
	{ iconImage: linkdInIcon, link: "" },
	{ iconImage: gitHubIcon, link: "" },
	{ iconImage: exercismIcon, link: "" },
	{ iconImage: frontedMentoreIcon, link: "" },
	{ iconImage: twitterIcon, link: "" },
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
	{
		title: "Memory",
		image: memoryImage,
		description:
			"Lorem ipsum dolor sit amet consectetur. Fames in hac dictumst commodo velit a cras sapien ante. Purus sodales id non tincidunt amet. A tortor consequat viverra ut vel. Lacinia sed ut libero integer.",
		technologies: [
			{ iconImage: htmlIcon, name: "HTML5" },
			{ iconImage: cssIcon, name: "CSS" },
			{ iconImage: sassIcon, name: "Sass" },
			{ iconImage: javascriptIcon, name: "Javascript" },
		],
		links: ["#", "#"],
	},
	{
		title: "Memory",
		image: memoryImage,
		description:
			"Lorem ipsum dolor sit amet consectetur. Fames in hac dictumst commodo velit a cras sapien ante. Purus sodales id non tincidunt amet. A tortor consequat viverra ut vel. Lacinia sed ut libero integer.",
		technologies: [
			{ iconImage: htmlIcon, name: "HTML5" },
			{ iconImage: cssIcon, name: "CSS" },
			{ iconImage: sassIcon, name: "Sass" },
			{ iconImage: javascriptIcon, name: "Javascript" },
		],
		links: ["#", "#"],
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
	{
		imageUrl: danProfileImage,
		title: "Team Leader, Fast Learner, Joyous to work with",
		testimonial:
			"Lorem ipsum dolor sit amet consectetur. Turpis at auctor nisl commodo sit. Elementum fermentum ultrices ac nisl volutpat libero laoreet massa etiam. Pharetra pellentesque lectus a in ipsum sodales.",
		author: "Daniel Forsthofer - Tutto food Co.",
	},
	{
		imageUrl: danProfileImage,
		title: "Team Leader, Fast Learner, Joyous to work with",
		testimonial:
			"Lorem ipsum dolor sit amet consectetur. Turpis at auctor nisl commodo sit. Elementum fermentum ultrices ac nisl volutpat libero laoreet massa etiam. Pharetra pellentesque lectus a in ipsum sodales.",
		author: "Daniel Forsthofer - Tutto food Co.",
	},
];
