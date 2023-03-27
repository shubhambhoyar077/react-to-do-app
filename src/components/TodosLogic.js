import { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

export default function TodosLogic() {
  const [todos, setTodos] = useState([{
    id: 1,
    todo: 'Test 1',
    completed: false,
  },
  {
    id: 2,
    todo: 'Test 2',
    completed: false,
  },
  {
    id: 3,
    todo: 'Test 3',
    completed: false,
  }]);

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
      id: 4,
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
