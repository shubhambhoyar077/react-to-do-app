import { useState } from 'react';
import PropTypes from 'prop-types';

export default function TodoItem({
  item,
  handelCheckBox,
  handelDelClick,
  handelSaveClick
}) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(item.todo);

  const handelEditClick = () => {
    setEditMode(true); 
  }

  const handelEdit = (e) => {
    setTitle(e.target.value);
  }

  const saveClick = () => {
    setEditMode(false);
    handelSaveClick(item.id, title)
  }

  return (
    <li>
      <div className={editMode? 'disable': ''}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => handelCheckBox(item.id)}
        />
        {title}
        <button type="button" onClick={handelEditClick}>Edit</button>
        <button type="button" onClick={() => handelDelClick(item.id)}>Delete</button>
      </div>
      <div className={editMode? '': 'disable'}>
        <input
          type="text"
          value={title}
          onChange = {handelEdit}
        />
        <button type="button" onClick={() => saveClick(item.id, title)}>Save</button>
      </div>
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
