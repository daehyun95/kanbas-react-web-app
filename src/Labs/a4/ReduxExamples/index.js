import React from "react";
import HelloRedux from "./HelloRedux";
import CounterReducer from "./CounterRedux";
import AddReducer from "./AddRedux";
import TodoList from "./todosA4/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <TodoList/>
      <HelloRedux/>
      <CounterReducer/>
      <AddReducer/>
    </div>
  );
};

export default ReduxExamples;