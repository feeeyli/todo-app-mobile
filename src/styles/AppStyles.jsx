import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	background: ${({ theme }) => theme.colors.background};
	padding: 64px 24px 32px;
`;

export const Background = styled.Image`
	width: 116%;
	height: 200px;
	position: absolute;
	top: 0;
	left: 0;
`;
