import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import { Container, AddButton, Icon, Input } from "./styles";

const NewTodo = ({ TodoMethods: { createTodo, todoList } }) => {
	const [value, setValue] = useState("");
	const inputRef = useRef(null);

	function addHandler() {
		if (value.length > 0) {
			if (!todoList.find((todo) => todo.title === value)) {
				createTodo(value);
				setValue("");
				inputRef.current.blur();
			} else {
				Alert.alert(
					"Hey!",
					"Parece que este nome já esta em uso. Use sua criatividade e escolha outro."
				);
			}
		} else {
			Alert.alert("Ops!", "O nome da sua tarefa não pode ser vazia");
		}
	}

	return (
		<Container>
			<AddButton onPress={addHandler}>
				<Icon />
			</AddButton>
			<Input
				value={value}
				onChangeText={setValue}
				ref={inputRef}
				onSubmitEditing={addHandler}
			/>
		</Container>
	);
};

export default NewTodo;
