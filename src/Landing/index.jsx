import { useEffect } from "react";
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
		AOS.init();
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
