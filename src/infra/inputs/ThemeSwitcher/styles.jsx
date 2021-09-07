import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity``;

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
	name: theme.icon,
	size: 32,
	color: theme.colors.headerItems,
}))``;
