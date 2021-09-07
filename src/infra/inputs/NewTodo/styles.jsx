import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
	border-radius: 10px;
	width: 100%;
	padding: 16px;
	background: ${({ theme }) => theme.colors.elementsBackground};
	flex-direction: row;
	margin-top: 44px;
`;

export const AddButton = styled.TouchableOpacity`
	border-radius: 20px;
	height: 40px;
	width: 40px;
	background: ${({ theme }) => theme.colors.highlightBackground};
	align-items: center;
	justify-content: center;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
	placeholder: "Create a new todo...",
	placeholderTextColor: theme.colors.grayText,
}))`
	flex: 1;
	font-size: 20px;
	color: ${({ theme }) => theme.colors.text};
	margin-left: 16px;
`;

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
	name: "checkmark",
	size: 28,
	color: theme.colors.headerItems,
}))``;
