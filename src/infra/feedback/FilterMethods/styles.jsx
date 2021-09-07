import styled from "styled-components/native";

export const Container = styled.View`
	border-radius: 10px;
	width: 100%;
	margin-top: 20px;
	padding: 8px 16px;
	background: ${({ theme }) => theme.colors.elementsBackground};
	flex-direction: row;
	justify-content: center;
`;

export const Filter = styled.TouchableOpacity`
	padding: 8px 12px;
`;

export const FilterTitle = styled.Text`
	color: ${({ theme, active }) =>
		!active ? theme.colors.grayText : theme.colors.highlight};
	font-size: 20px;
`;
