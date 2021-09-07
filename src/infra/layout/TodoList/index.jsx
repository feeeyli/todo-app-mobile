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

const TodoList = ({ todoList, itemsLeft }) => {
	return (
		<Container>
			<List
				data={todoList}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <TodoItem item={item} />}
			/>
			<Footer>
				<LeftCounter>{itemsLeft} items left</LeftCounter>
				<Clear>
					<ClearTitle>Clear Completed</ClearTitle>
				</Clear>
			</Footer>
		</Container>
	);
};

export default TodoList;
