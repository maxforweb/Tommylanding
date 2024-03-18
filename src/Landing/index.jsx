import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import {
	Header,
	Main,
	Footer,
	Preloader
} from "./components";
import "./index.scss";

const Landing = () => {
	const [preloaderLoaded, setPreloaderLoaded] = useState(false);

	useEffect(() => {
		const preloaderTimeout = setTimeout(() => {
			setPreloaderLoaded(true);
		}, 1500);

		const timeout = setTimeout(() => {
			AOS.init({
				easing: "custom",
			});
		}, 2300);
		return () => {
			clearTimeout(timeout);
			clearTimeout(preloaderTimeout);
		};
	}, []);
	return (
		<>
			<Preloader loaded={preloaderLoaded} />
			<Header />
			<Main />
			<Footer />
		</>
	);
};

export default Landing;
