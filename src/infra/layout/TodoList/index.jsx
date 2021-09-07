import React from "react";
import TodoItem from "../../components/TodoItem";
import {
	Container,
	List,
	Footer,
	LeftCounter,
	Clear,
	ClearTitle,
} from "./styles";

const TodoList = ({
	todoList,
	itemsLeft,
	TodoMethods: { clearTodoList },
	TodoMethods,
	filterMode,
}) => {
	const filterBy = {
		completed: () => todoList.filter((todo) => todo.completed === true),
		active: () => todoList.filter((todo) => todo.completed === false),
	};

	const filteredTodoList = !filterBy[filterMode]
		? todoList
		: filterBy[filterMode]();

	return (
		<Container>
			<List
				data={filteredTodoList}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TodoItem item={item} TodoMethods={TodoMethods} />
				)}
			/>
			<Footer>
				<LeftCounter>{itemsLeft} items left</LeftCounter>
				<Clear onPress={clearTodoList}>
					<ClearTitle>Clear Completed</ClearTitle>
				</Clear>
			</Footer>
		</Container>
	);
};

export default TodoList;
