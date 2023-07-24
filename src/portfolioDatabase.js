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

//ProjectImages:
import twoAngelsImage from "./images/projects/two-angels.jpg";
import memoryImage from "./images/projects/memory.jpg";
import paletteProImage from "./images/projects/palette-pro.jpg";
import vibraSonicImage from "./images/projects/vibra-sonic.jpg";

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
	{
		iconImage: linkdInIcon,
		link: "https://www.linkedin.com/in/etienne-desfontaines-818349284/",
	},
	{ iconImage: gitHubIcon, link: "https://github.com/etiennedesfontaines" },
	{
		iconImage: exercismIcon,
		link: "https://exercism.org/profiles/etiennedesfontaines",
	},
	{
		iconImage: frontedMentoreIcon,
		link: "https://www.frontendmentor.io/profile/etiennedesfontaines",
	},
	{ iconImage: twitterIcon, link: "https://twitter.com/etdesfont" },
];

export const projects = [
	{
		title: "TwoAngels",
		image: twoAngelsImage,
		description:
			"A captivating marketing website for a seaside guest house and its accompanying cottages in Knysna, South Africa. It focuses on using compelling language and alluring imagery to entice users to book their dream holiday. And it provides a convenient means for visitors to make inquiries. Have a look and book your dream holiday today.",
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
		description:
			"A charming, illustrated version of the classic memory-card game - pairs. Its adorable illustrations and engaging game screen will keep your children entertained for hours. And the different difficulty options make it a delightful experience for players of all ages. I intentionally excluded HTML to focus solely on JavaScript, helping me hone essential concepts such as event handling, DOM manipulation, randomisation, score keeping and game logic. Come immerse yourself in this nostalgic card game and put your recall abilities to the test!",
		roles: "UI Designer, Copywriter, Developer.",
		technologies: [
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
		description:
			"An easy to use web-based colour tool that lets you effortlessly generate, select, and save captivating colour palettes for your designs. Explore an endless array of possibilities by randomly generating colours, or fine-tuning hues, saturation, and brightness to find exactly what you're looking for. With PalettePro, you can curate and save your favourite palettes, ensuring easy access for future projects. Seamlessly copying hex codes with a single click allows you to swiftly integrate your chosen colours into your projects. Let PalettePro help unlock your creativity and elevate your designs.",
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
			"https://vibrasonic-music-player.netlify.app/",
		],
	},
];

export const testimonials = [
	{
		imageUrl: danielForsthoferProfile,
		title: "A versatile professional, proactive, resourceful and adaptable",
		testimonial:
			"Etienne proved to be a high-functioning, versatile professional, able to dive headfirst into unforeseen challenges with an unerring commitment that exceeded our wildest expectations. His proactive attitude towards tackling problems was a testament to his resourcefulness and adaptability. He has left an indelible mark on our operations and set a benchmark for future employees. He comes comes with the highest possible recommendation",
		author: "Daniel Forsthofer | Business Owner - Tutto Food Co.",
	},
	{
		imageUrl: emileDesfontainesProfile,
		title: "Proactively pushing the boundries of his own knowledge",
		testimonial:
			"I've had the pleasure of mentoring Etienne through much of his journey into learning web development. During this time he has developed an in-depth understanding of html and css, and has made great progress with Javascript and React. He has a natural ability to translate visual designs and functional specifications into highly performant and responsive sites, and is consistently and proactively pushing the boundaries of his own knowledge.",
		author: "Emile Desfontaines | Sofware Engineer - OFS",
	},
	{
		imageUrl: kabeloAndBuntuProfile,
		title: "Kindness, Leadership, integrity and Remarkable Character",
		testimonial:
			"We are immensely grateful for Etiennes' invaluable guidance and mentorship during our ownership of Crust Almighty. His expertise in operations management, contract negotiation, and finance tracking proved instrumental to our success. His selfless dedication, patient teaching, and unwavering support helped us develop the skills necessary to run a business.  We recommend him for any team role that values kindness, leadership, integrity and remarkable character.",
		author: "Kabelo & Buntu | Business Owners - Crust Almighty",
	},
];
