import { Container } from "@mui/material";
import {
	Hero,
	// Quote,
	Token,
	Story,
	// Tokenomics,
	Steps,
	Features,
	GoldCatBlock,
} from "../../components";
import Distribution from "../Distribution";

const Main = () => {
	return (
		<main className='page'>
			<Container
				maxWidth='100%'
				disableGutters>
				<Hero />
				<Story />
				<Features />
				<Token />
				<Steps />
				{/* <Tokenomics /> */}
				<Distribution />
				<GoldCatBlock />
			</Container>
		</main>
	);
};

export default Main;
