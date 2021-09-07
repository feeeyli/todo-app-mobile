import React from "react";
import { StatusBar } from "react-native";
import { Background, Container } from "./src/styles/AppStyles";

const App = () => {
	return (
		<Container>
			<Background source={require("./src/assets/bg-mobile-light.jpg")} />
			<StatusBar
				backgroundColor="transparent"
				translucent
				barStyle="light-content"
			/>
		</Container>
	);
};

export default App;
