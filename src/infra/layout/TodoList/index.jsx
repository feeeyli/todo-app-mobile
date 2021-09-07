import React from "react";
import {
	Container,
	List,
	Footer,
	LeftCounter,
	Clear,
	ClearTitle,
} from "./styles";

const TodoList = ({ itemsLeft }) => {
	return (
		<Container>
			<List />
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
