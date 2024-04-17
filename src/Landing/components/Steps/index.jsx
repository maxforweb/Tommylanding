import Step from "./Step";
import "./steps.scss";
import arrowIcon from "../../assets/arrow-circle.svg";
import { Box, Container } from "@mui/material";

import { useContext } from "react";
import { SiteInfocontext } from "../../../helpers/context";

const Steps = () => {
	const { state } = useContext(SiteInfocontext);
	return (
		<section id='roadmap-section'>
			<Container>
				<Box className="steps__row">
					{state?.phases.map((phase, index) => (
						<Step
							key={index}
							title={phase.name}
							subtitle={phase.descr}
							items={phase.list.map(listItem => listItem.name)}
							animationDelay={(index + 1) * 100}
							children={phase.try_link ? (
								<a href={phase.try_link} className="btn btn-sm btn-transparent">
									Try now!
									<span className="btn__icon">{arrowIcon}</span>
								</a>
							) : null}
						/>
					))}
				</Box>
			</Container>
		</section>
	);
};

export default Steps;
