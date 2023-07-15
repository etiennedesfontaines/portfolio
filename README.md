# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

//unused code snippets to refer to:

//1. NavSignifiers

// const [activeSection, setActiveSection] = useState(
// isMobile ? "home" : "about"
// );
// const [navSignifiers, setNavSignifiers] = useState({
// home: false,
// about: false,
// skills: false,
// projects: false,
// testimonials: false,
// contact: false,
// });

    // //functions:
    // const handleNavSignifierOnScroll = () => {
    // 	const scrollPosition = window.scrollY + 100;
    // 	const sections = [
    // 		"home",
    // 		"about",
    // 		"skills",
    // 		"projects",
    // 		"testimonials",
    // 		"contact",
    // 	];

    // 	const active = sections.find((section) => {
    // 		const element = document.querySelector(`#${section}`);

    // 		if (element) {
    // 			const { offsetTop, offsetHeight } = element;
    // 			return (
    // 				scrollPosition >= offsetTop &&
    // 				scrollPosition < offsetTop + offsetHeight
    // 			);
    // 		}
    // 		return false;
    // 	});

    // 	setActiveSection(active);

    // 	const updatedNaveSignifiers = sections.reduce((obj, section) => {
    // 		obj[section] = section === active;
    // 		return obj;
    // 	}, {});

    // 	setNavSignifiers(updatedNaveSignifiers);
    // };

//2. IsMobile change of width and orientation:

    useEffect(() => {
    	const mediaQuery = window.matchMedia("(max-width: 767px)");
    	const handleResize = () => {
    		setIsMobile(mediaQuery.matches);
    	};

    	// const handleOrientationChange = () => {
    	// 	// Delay the execution to allow time for the window dimensions to update
    	// 	setTimeout(() => {
    	// 		setIsMobile(
    	// 			window.innerWidth <= 767 ||
    	// 				(window.innerWidth > 767 && window.innerHeight <= 767)
    	// 		);
    	// 	}, 100);
    	// };

    	// Add the event listeners
    	window.addEventListener("resize", handleResize);
    	// window.addEventListener("orientationchange", handleOrientationChange);
    	// Clean up the event listeners on component unmount
    	return () => {
    		window.removeEventListener("resize", handleResize);
    		// window.removeEventListener("orientationchange", handleOrientationChange);
    	};
    }, []);
