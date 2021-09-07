import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import ThemeSwitcher from "../../inputs/ThemeSwitcher";
import { Container, Title } from "./styles";

const Header = ({ themeControl: { theme, setTheme } }) => {
	const themeChangeHandler = async () => {
		const newTheme = theme === "dark" ? "light" : "dark";

		setTheme(newTheme);

		try {
			await AsyncStorage.setItem("THEME", JSON.stringify(newTheme));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Title>Todo</Title>
			<ThemeSwitcher onPress={themeChangeHandler} />
		</Container>
	);
};

export default Header;
