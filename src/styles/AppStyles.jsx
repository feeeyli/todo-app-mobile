import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	background: ${({ theme }) => theme.colors.background};
`;

export const Background = styled.Image`
	width: 100%;
	height: 200px;
	position: absolute;
	top: 0;
	left: 0;
`;
