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
import linkedin from "./icons/linkdin-icon.svg";
import gitHubIcon from "./icons/github-icon.svg";
import exercismIcon from "./icons/exercism-icon.svg";
import frontedMentoreIcon from "./icons/frontend-mentore-icon.svg";
import twitterIcon from "./icons/twitter-icon.svg";

//ProjectImages:
import twoAngelsImage from "./images/projects/two-angels.jpg";
import memoryImage from "./images/projects/memory.jpg";
import paletteProImage from "./images/projects/palette-pro.jpg";
import vibraSonicImage from "./images/projects/vibrasonic.jpg";
import portfolioImage from "./images/projects/portfolio.jpg";

//ProfileImages:
import danielForsthoferProfile from "./images/people/daniel-forsthofer-profile.jpg";
import emileDesfontainesProfile from "./images/people/emile-desfontaines-profile.jpg";
import kabeloAndBuntuProfile from "./images/people/kabelo-and-buntu-profile.jpg";

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
	},
	{ iconImage: sassIcon, name: "Sass" },
	{ iconImage: apiIcon, name: "Api" },
	{ iconImage: figmaIcon, name: "Figma" },
	{
		iconImage: styledComponentsIcon,
		name: "Styled Components",
	},
];

export const socialIcons = [
	{
		iconImage: linkedin,
		link: "https://www.linkedin.com/in/etienne-desfontaines-818349284/",
		name: "linkedin icon",
	},
	{
		iconImage: gitHubIcon,
		link: "https://github.com/etiennedesfontaines",
		name: "github icon",
	},
	{
		iconImage: exercismIcon,
		link: "https://exercism.org/profiles/etiennedesfontaines",
		name: "exercism icon",
	},
	{
		iconImage: frontedMentoreIcon,
		link: "https://www.frontendmentor.io/profile/etiennedesfontaines",
		name: "front-end mentore icon",
	},
	{
		iconImage: twitterIcon,
		link: "https://twitter.com/etdesfont",
		name: "twitter icon",
	},
];

export const projects = [
	{
		title: "TwoAngels",
		image: twoAngelsImage,
		imageAltText:
			"TwoAngels website homepage. A blue nav-bar sits above a guest house on the water's edge. The house is set into a backdrop of trees. It has a tanned wooden facade with a sky blue roof and windows. At the base of the house is a stone wall with a jetty that leads into a body of blue water.",
		description:
			"A captivating marketing website for a seaside guest house and its accompanying cottages in Knysna, South Africa. It focuses on using compelling language and alluring imagery to entice users to book their dream holiday. And it provides a convenient means for visitors to make inquiries. A truly beautfiul destination - have a look and book your dream holiday today.",
		roles: "UI Designer, Art Director, Copywriter, Developer.",
		technologies: [
			{ iconImage: htmlIcon, name: "HTML5" },
			{ iconImage: cssIcon, name: "CSS" },
			{ iconImage: sassIcon, name: "Sass" },
			{ iconImage: javascriptIcon, name: "Javascript" },
			{ iconImage: jQueryIcon, name: "jQuery" },
			{ iconImage: apiIcon, name: "Api" },
			{ iconImage: figmaIcon, name: "Figma" },
		],
		links: [
			"https://github.com/etiennedesfontaines/TwoAngels",
			"https://twoangels.co.za/",
		],
	},
	{
		title: "Memory",
		image: memoryImage,
		imageAltText:
			"A memory-game website homepage. The background is a beautifully illustrated childs room. There are toys on the floor and a little girl drawing on the wall. The memory playing cards are dealt onto the wall. Two of them are face up, showing charming illustrations of animals.",
		description:
			"A charming, illustrated version of the classic memory-card game - pairs. Its adorable illustrations and engaging game screen will keep your children entertained for hours. And the different difficulty options make it a delightful experience for players of all ages. I focused primarily on JavaScript, helping me hone essential concepts such as event handling, DOM manipulation, randomisation, score keeping and game logic. Come immerse yourself in this nostalgic card game and put your recall abilities to the test!",
		roles: "UI Designer, Copywriter, Developer.",
		technologies: [
			{ iconImage: htmlIcon, name: "HTML5" },
			{ iconImage: cssIcon, name: "CSS" },
			{ iconImage: sassIcon, name: "Sass" },
			{ iconImage: javascriptIcon, name: "Javascript" },
			{ iconImage: figmaIcon, name: "Figma" },
		],
		links: [
			"https://github.com/etiennedesfontaines/memory",
			"https://pairs-concerntration-memory-game.netlify.app/",
		],
	},
	{
		title: "PalettePro",
		image: paletteProImage,
		imageAltText: "The user interface of a colour palette website.",
		description:
			"A colour palette, showcasing five colours, each displaying their unique hex code. The colors run vertically, each taking up an equally 5th of the frame. The bottom fifth of the frame contains controls for manipulating, saving and recalling colour palettes.",
		roles: "Developer",
		technologies: [
			{ iconImage: htmlIcon, name: "HTML5" },
			{ iconImage: cssIcon, name: "CSS" },
			{ iconImage: sassIcon, name: "Sass" },
			{ iconImage: javascriptIcon, name: "Javascript" },
		],
		links: [
			"https://github.com/etiennedesfontaines/palette-pro",
			"https://main--palette-pro.netlify.app/",
		],
	},
	{
		title: "vibraSonic",
		image: vibraSonicImage,
		imageAltText: "The user interface of a web based music player.",
		description:
			"A minimalist web-based music player that allows you to enjoy a collection of handpicked songs through a simple and intuitive interface. The player showcases album covers, artist information, and song names. You can play, pause, and skip tracks, or seek specific parts of a song using the time control. I built it as a guided exercise in learning the fundamentals of React. While the project itself was a simple exercise, it helped me understand React syntax and gain insights into component based development. Jump in and chill-out to some chill-hop beats.",
		roles: "Developer.",
		technologies: [
			{ iconImage: reactIcon, name: "React" },
			{ iconImage: javascriptIcon, name: "Javascript" },
			{ iconImage: cssIcon, name: "CSS" },
			{ iconImage: sassIcon, name: "Sass" },
		],
		links: [
			"https://github.com/etiennedesfontaines/vibraSonic-music-player",
			"https://vibra-sonic-music-player.netlify.app/",
		],
	},
	{
		title: "My Portfolio",
		image: portfolioImage,
		imageAltText:
			"Etienne Desfontaines wearing stylish gold rimmed spectacles and a light blue collard shirt.",
		description:
			"You're looking at it - my frontend development portfolio website. Intentionally elegant and easy to navigate, it serves as a little window into me as a person, and as a developer. I designed and built it to showcase my skills, and encourage a future of exciting opportunities and collaborations. So if the shoe fits, don't hesitate to get in touch!",
		roles: "UI Designer, Copywriter, Developer.",
		technologies: [
			{ iconImage: reactIcon, name: "React" },
			{ iconImage: javascriptIcon, name: "Javascript" },
			{ iconImage: cssIcon, name: "CSS" },
			{ iconImage: sassIcon, name: "Sass" },
			{ iconImage: styledComponentsIcon, name: "Styled" },
			{ iconImage: framerMotionIcon, name: "Framer Motion" },
		],
		links: ["https://github.com/etiennedesfontaines/portfolio", "#home"],
	},
];

export const testimonials = [
	{
		imageUrl: danielForsthoferProfile,
		imageAltText:
			"Tutto food co. business owner, Daniel Forsthofer, wearing a collard white t-shirt and a dark waist coat.",
		title: "A versatile professional, proactive, resourceful and adaptable",
		testimonial:
			"Etienne proved to be a high-functioning, versatile professional, able to dive headfirst into unforeseen challenges with an unerring commitment that exceeded our wildest expectations. His proactive attitude towards tackling problems was a testament to his resourcefulness and adaptability. He has left an indelible mark on our operations and set a benchmark for future employees. He comes comes with the highest possible recommendation",
		author: "Daniel Forsthofer | Business Owner - Tutto Food Co.",
	},
	{
		imageUrl: emileDesfontainesProfile,
		imageAltText:
			"Software engineer Emile Desfontaines, wearing a smart, blue, collard shirt.",
		title: "Proactively pushing the boundries of his own knowledge",
		testimonial:
			"I've had the pleasure of mentoring Etienne through much of his journey into learning web development. During this time he has developed an in-depth understanding of html and css, and has made great progress with Javascript and React. He has a natural ability to translate visual designs and functional specifications into highly performant and responsive sites, and is consistently and proactively pushing the boundaries of his own knowledge.",
		author: "Emile Desfontaines | Sofware Engineer - OFS",
	},
	{
		imageUrl: kabeloAndBuntuProfile,
		imageAltText:
			"The faces of two happy business owners, each wearing big smiles, black collard shirts and backward caps.",
		title: "Kindness, Leadership, integrity and Remarkable Character",
		testimonial:
			"We are immensely grateful for Etiennes' invaluable guidance and mentorship during our ownership of Crust Almighty. His expertise in operations management, contract negotiation, and finance tracking proved instrumental to our success. His selfless dedication, patient teaching, and unwavering support helped us develop the skills necessary to run a business.  We recommend him for any team role that values kindness, leadership, integrity and remarkable character.",
		author: "Kabelo & Buntu | Business Owners - Crust Almighty",
	},
];
