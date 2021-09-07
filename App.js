// Core
import React, { useState } from "react";
import { StatusBar } from "react-native";

// Styles
import { Background, Container } from "./src/styles/AppStyles";

// Theme
import lightTheme from "./src/styles/themes/light";
import darkTheme from "./src/styles/themes/dark";
import { ThemeProvider } from "styled-components";

// Components
import Header from "./src/infra/layout/Header";
import NewTodo from "./src/infra/inputs/NewTodo";

const App = () => {
	const [theme, setTheme] = useState("light");

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<Container>
				<Background
					source={require("./src/assets/bg-mobile-light.jpg")}
				/>

				<Header themeControl={{ theme, setTheme }} />
				<NewTodo />

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
