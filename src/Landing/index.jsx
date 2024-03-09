import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Container } from "@mui/material";
import {
	Form,
	Quote,
	Features,
	Story,
	Invite,
	Swap,
	Tokenomics,
	Why,
	Faq,
	Footer,
} from "./components";
import "./index.scss";

const Landing = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<Container
			maxWidth='100%'
			disableGutters>
			<Story />
			<Quote />
			<Features />
			<Invite />
			<Swap />
			<Tokenomics />
			<Why />
			<Faq />
			<Footer />
		</Container>
	);
};

export default Landing;
