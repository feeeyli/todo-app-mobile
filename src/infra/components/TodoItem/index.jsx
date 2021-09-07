import React from "react";
import {
	Container,
	Complete,
	CompleteIcon,
	Title,
	Delete,
	DeleteIcon,
} from "./styles";

const TodoItem = ({
	item: { title, completed, id },
	TodoMethods: { completeTodo, deleteTodo },
}) => {
	return (
		<Container>
			<Complete completed={completed} onPress={() => completeTodo(id)}>
				<CompleteIcon completed={completed} />
			</Complete>
			<Title completed={completed}>{title}</Title>
			<Delete onPress={() => deleteTodo(id)}>
				<DeleteIcon />
			</Delete>
		</Container>
	);
};

export default TodoItem;
