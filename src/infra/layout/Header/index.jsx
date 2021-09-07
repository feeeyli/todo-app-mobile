import React from "react";
import ThemeSwitcher from "../../inputs/ThemeSwitcher";
import { Container, Title } from "./styles";

const Header = ({ themeControl: { theme, setTheme } }) => {
	function themeChangeHandler() {
		const newTheme = theme === "dark" ? "light" : "dark";

		setTheme(newTheme);
	}

	return (
		<Container>
			<Title>Todo</Title>
			<ThemeSwitcher onPress={themeChangeHandler} />
		</Container>
	);
};

export default Header;
