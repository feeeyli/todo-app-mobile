// Core
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Styles
import { Background, Container } from "./src/styles/AppStyles";

// Theme
import lightTheme from "./src/styles/themes/light";
import darkTheme from "./src/styles/themes/dark";
import { ThemeProvider } from "styled-components";

// Components
import Header from "./src/infra/layout/Header";
import NewTodo from "./src/infra/inputs/NewTodo";
import TodoList from "./src/infra/layout/TodoList";
import FilterMethods from "./src/infra/feedback/FilterMethods";

const App = () => {
	const [todoList, setTodoList] = useState([]),
		[filterMode, setFilterMode] = useState("all"),
		[theme, setTheme] = useState("light");

	const getStoraged = async () => {
		const storagedList = await AsyncStorage.getItem("LIST");
		const storagedTheme = await AsyncStorage.getItem("THEME");

		setTodoList(storagedList !== null ? JSON.parse(storagedList) : []);
		setTheme(storagedTheme !== null ? storagedTheme : "light");
	};

	const updateList = async (newList) => {
		setTodoList(newList);

		try {
			await AsyncStorage.setItem("LIST", JSON.stringify(newList));
		} catch (error) {
			console.log(error);
		}
	};

	const TodoMethods = {
		createTodo(todoTitle) {
			updateList([
				{ title: todoTitle, completed: false, id: generateUUID() },
				...todoList,
			]);
		},

		completeTodo(todoId) {
			updateList(
				todoList.map((task) => {
					if (todoId === task.id)
						return { ...task, completed: !task.completed };

					return task;
				})
			);
		},

		deleteTodo(todoId) {
			updateList(todoList.filter((todo) => todo.id !== todoId));
		},

		filterTodoList(filterMode) {
			setFilterMode(filterMode);
		},

		clearTodoList() {
			updateList(todoList.filter((todo) => todo.completed === false));
		},

		todoList: todoList,
	};

	const generateUUID = () =>
		"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
			let r = (Math.random() * 16) | 0,
				v = c == "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});

	useEffect(() => {
		getStoraged();

		return () => {};
	}, []);

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<Container>
				<Background
					source={require("./src/assets/bg-mobile-light.jpg")}
				/>

				<Header themeControl={{ theme, setTheme }} />
				<NewTodo TodoMethods={TodoMethods} />
				{todoList.length > 0 && (
					<>
						<TodoList
							itemsLeft={
								todoList.filter((item) => !item.completed)
									.length
							}
							TodoMethods={TodoMethods}
							todoList={todoList}
							filterMode={filterMode}
						/>
						<FilterMethods
							TodoMethods={TodoMethods}
							filterMode={filterMode}
						/>
					</>
				)}

				<StatusBar
					backgroundColor="transparent"
					translucent
					barStyle="light-content"
				/>
			</Container>
		</ThemeProvider>
	);
};

export default App;
