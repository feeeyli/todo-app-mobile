import React from "react";
import { Container, Filter, FilterTitle } from "./styles";

const FilterMethods = ({ TodoMethods: { filterTodoList }, filterMode }) => {
	return (
		<Container>
			<Filter onPress={() => filterTodoList("all")}>
				<FilterTitle active={filterMode === "all"}>All</FilterTitle>
			</Filter>
			<Filter onPress={() => filterTodoList("active")}>
				<FilterTitle active={filterMode === "active"}>
					Active
				</FilterTitle>
			</Filter>
			<Filter onPress={() => filterTodoList("completed")}>
				<FilterTitle active={filterMode === "completed"}>
					Completed
				</FilterTitle>
			</Filter>
		</Container>
	);
};

export default FilterMethods;
