import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import {
	Header,
	Main,
	Footer,
	Preloader
} from "./components";
import "./index.scss";
import { useGetSitInfoQuery } from "../services";
import { SiteInfocontext } from "../helpers/context";

const Landing = () => {
	const {updateState} = useContext(SiteInfocontext);
	const {data, isLoading, isError} = useGetSitInfoQuery();

	useEffect(() => {
		!isLoading && AOS.init({ easing: "custom" });
		
		if (!isLoading && data) {
			updateState(data);
		}
	}, [isLoading, data]);
	
	if (isError) {
		return (
			<h1 style={{textAlign: 'center'}}>Error while fetching</h1>
		)
	}
	return (
		<>
			<Preloader loaded={!isLoading} />
			<Header />
			<Main />
			<Footer />
		</>
	);
};

export default Landing;
