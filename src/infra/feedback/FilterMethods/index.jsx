import React from "react";
import { Container, Filter, FilterTitle } from "./styles";

const FilterMethods = () => {
	return (
		<Container>
			<Filter>
				<FilterTitle>All</FilterTitle>
			</Filter>
			<Filter>
				<FilterTitle>Active</FilterTitle>
			</Filter>
			<Filter>
				<FilterTitle>Completed</FilterTitle>
			</Filter>
		</Container>
	);
};

export default FilterMethods;
