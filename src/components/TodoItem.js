import PropTypes from 'prop-types';

export default function TodoItem({
  item,
  handelCheckBox,
  handelDelClick,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handelCheckBox(item.id)}
      />
      {item.todo}
      <button type="button">edit</button>
      <button type="button" onClick={() => handelDelClick(item.id)}>del</button>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    todo: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handelCheckBox: PropTypes.func.isRequired,
};
