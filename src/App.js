import Landing from "./Landing";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { Provider } from "react-redux";

import { store } from "./store";

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<div className='wrapper'>
					<Landing />
				</div>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
