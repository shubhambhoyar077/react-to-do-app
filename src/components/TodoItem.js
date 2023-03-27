import PropTypes from 'prop-types';

export default function TodoItem({ item, handelCheckBox }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handelCheckBox(item.id)}
      />
      {item.todo}
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    todo: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handelCheckBox: PropTypes.func.isRequired,
};
