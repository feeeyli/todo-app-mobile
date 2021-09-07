import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View``;

export const Complete = styled.TouchableOpacity``;

export const Title = styled.Text``;

export const Delete = styled.TouchableOpacity``;

export const CompleteIcon = styled(Ionicons).attrs({
	name: "checkmark",
})``;

export const DeleteIcon = styled(Ionicons).attrs({
	name: "trash",
})``;
