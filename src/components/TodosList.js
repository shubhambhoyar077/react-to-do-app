import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todos,
  handelCheckBox,
  handelDelClick,
}) {
  return (
    <ul className="todo-list">
      {todos.map((element) => (
        <TodoItem
          key={element.id}
          item={element}
          handelCheckBox={handelCheckBox}
          handelDelClick={handelDelClick}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    todo: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  handelCheckBox: PropTypes.func.isRequired,
};

export default TodosList;
