import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Background, Container } from "./src/styles/AppStyles";

import lightTheme from "./src/styles/themes/light";
import darkTheme from "./src/styles/themes/dark";
import { ThemeProvider } from "styled-components";

const App = () => {
	const [theme] = useState("light");

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<Container>
				<Background
					source={require("./src/assets/bg-mobile-light.jpg")}
				/>
				<StatusBar
					backgroundColor="transparent"
					translucent
					barStyle="light-content"
				/>
			</Container>
		</ThemeProvider>
	);
};

export default App;
