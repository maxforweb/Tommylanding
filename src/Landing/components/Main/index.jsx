import { Container } from "@mui/material";
import {
	Hero,
	Story,
	Features,
	Token,
	Steps,
	// Distribution,
	GoldCatBlock,
} from "../../components";

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
				{/* <Distribution /> */}
				<GoldCatBlock />
			</Container>
		</main>
	);
};

export default Main;
