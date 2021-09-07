import React from "react";
import {
	Container,
	Complete,
	CompleteIcon,
	Title,
	Delete,
	DeleteIcon,
} from "./styles";

const TodoItem = ({ item: { title, completed } }) => {
	return (
		<Container>
			<Complete completed={completed}>
				<CompleteIcon />
			</Complete>
			<Title completed={completed}>{title}</Title>
			<Delete>
				<DeleteIcon />
			</Delete>
		</Container>
	);
};

export default TodoItem;
