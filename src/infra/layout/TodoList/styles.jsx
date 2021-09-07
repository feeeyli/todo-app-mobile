import styled from "styled-components/native";

export const Container = styled.View`
	border-radius: 10px;
	overflow: hidden;
	width: 100%;
	margin-top: 20px;
`;

export const List = styled.FlatList``;

export const Footer = styled.View`
	padding: 16px;
	background: ${({ theme }) => theme.colors.elementsBackground};
	flex-direction: row;
	justify-content: space-between;
`;

export const LeftCounter = styled.Text`
	color: ${({ theme }) => theme.colors.grayText};
	font-size: 16px;
`;

export const Clear = styled.TouchableOpacity``;

export const ClearTitle = styled.Text`
	color: ${({ theme }) => theme.colors.grayText};
	font-size: 16px;
`;
