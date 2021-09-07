import React from "react";
import { Container, Icon } from "./styles";

const ThemeSwitcher = ({ onPress }) => {
	return (
		<Container onPress={onPress}>
			<Icon />
		</Container>
	);
};

export default ThemeSwitcher;
