import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

export default function InputTodo({ addItem }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addItem(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        className="input-text"
        type="text"
        id="todo"
        placeholder="enter todo"
        value={title}
        onChange={handleChange}
      />
      <button type="submit">
        <FaPlusCircle />
      </button>
    </form>
  );
}

InputTodo.propTypes = {
  addItem: PropTypes.func.isRequired,
};
