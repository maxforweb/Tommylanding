import DecorBlock from "../DecorBlock";
import TokenomicsBox from "./TokenomicsBox";

import { Box } from "@mui/material";

const Tokenomics = () => {
	return (
		<Box
			className='tokenomics'
			sx={{
				position: "relative",
				maxWidth: { xs: "100%", md: 340 },
			}}>
			<TokenomicsBox
				title='Total Supply:'
				value='1 000 000 000 $TOMCAT'
			/>
			<DecorBlock
				iconName='coinSm'
				customStyles={{
					zIndex: 5,
				}}
			/>
			<DecorBlock iconName='coinLgOpacity' />
		</Box>
	);
};

export default Tokenomics;
