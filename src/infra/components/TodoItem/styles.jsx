import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
	padding: 16px;
	background: ${({ theme }) => theme.colors.elementsBackground};
	border-bottom-width: 1px;
	border-bottom-color: ${({ theme }) => theme.colors.checkBorder};
	flex-direction: row;
	align-items: center;
`;

export const Complete = styled.TouchableOpacity`
	height: 40px;
	width: 40px;
	border-radius: 25px;
	background: ${({ theme, completed }) =>
		!completed ? "transparent" : theme.colors.highlightBackground};
	border: ${({ theme, completed }) =>
		!completed ? "1px solid " + theme.colors.checkBorder : "0"};
	margin-right: 16px;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.Text`
	font-size: 20px;
	color: ${({ theme, completed }) =>
		!completed ? theme.colors.text : theme.colors.grayText};
	text-decoration: ${({ completed }) =>
		!completed ? "none" : "line-through"};
	flex: 1;
`;

export const Delete = styled.TouchableOpacity``;

export const CompleteIcon = styled(Ionicons).attrs(({ theme, completed }) => ({
	name: "checkmark",
	color: !completed ? "transparent" : theme.colors.headerItems,
	size: 24,
}))``;

export const DeleteIcon = styled(Ionicons).attrs(({ theme }) => ({
	name: "trash-outline",
	color: theme.colors.checkBorder,
	size: 28,
}))``;
