import styled from "styled-components/native";

export const Container = styled.View`
	width: 100%;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;

export const Title = styled.Text`
	font-family: sans-serif;
	font-size: 54px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 12px;
	color: ${({ theme }) => theme.colors.headerItems};
`;
