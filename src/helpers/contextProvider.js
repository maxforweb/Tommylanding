import { useState } from "react";
import { SiteInfocontext } from "./context";

export const SiteInfoProvider = ({ children }) => {
	const [state, setState] = useState(null);

	// Function to update state
	const updateState = (newValue) => {
		setState(newValue);
	};

	return (
		<SiteInfocontext.Provider value={{ state, updateState }}>
			{children}
		</SiteInfocontext.Provider>
	);
};
