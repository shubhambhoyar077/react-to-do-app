import { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { v4 as uuidv4 } from "uuid";

export default function TodosLogic() {
  const [todos, setTodos] = useState([]);

  const handelCheckBox = (id) => {
    setTodos((prev) => prev.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          completed: !element.completed,
        };
      }
      return element;
    }));
  };

  const addItem = (todo) => {
    const newtodo = {
      id: uuidv4(),
      todo: todo,
      completed: false
    }
    setTodos([...todos, newtodo]);
  }

  return (
    <div className="todo-logic">
      <InputTodo addItem={addItem}/>
      <TodosList todos={todos} handelCheckBox={handelCheckBox} />
    </div>
  );
}
