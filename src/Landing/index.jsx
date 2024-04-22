import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Header, Main, Footer, Preloader } from "./components";
import "./index.scss";
import { useGetSitInfoQuery } from "../services";
import { SiteInfocontext } from "../helpers/context";

const Landing = () => {
	const { updateState } = useContext(SiteInfocontext);
	const { data, isLoading, isError } = useGetSitInfoQuery();
	const [preloaderLoaded, setPreloaderLoaded] = useState(false);

	useEffect(() => {
		if (!isLoading && data) {
			updateState(data);

			setTimeout(() => {
				setPreloaderLoaded(true);
				AOS.init({ easing: "custom" });
			}, 1000);
		}
	}, [isLoading, data, updateState]);

	if (isError) {
		return (
			<h1 style={{ textAlign: "center", margin: "auto", fontSize: "40px" }}>
				Error while fetching data
			</h1>
		);
	}
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
