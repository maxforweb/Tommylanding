import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import {
	Header,
	Main,
	Footer,
} from "./components";
import "./index.scss";

const Landing = () => {

	useEffect(() => {
		const timeout = setTimeout(() => {
			AOS.init({
				easing: "custom",
			});
		}, 10);
		return () => {
			clearTimeout(timeout);
		};
	}, []);
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
};

export default Landing;
