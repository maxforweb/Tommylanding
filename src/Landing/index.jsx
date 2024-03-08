import { Container } from "@mui/material";
import { Form, Quote, Features, Story, Invite, Swap, Tokenomics, Why, Faq } from "./components";
import "./index.scss";

const Landing = () => {
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
		</Container>
	);
};

export default Landing;
