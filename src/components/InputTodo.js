import { useState } from "react";

export default function InputTodo({ addItem }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if(title.trim()){
      addItem(title);
      setTitle('');
    }
  }
  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor='todo'></label>
      <input type="text" id='todo' 
      placeholder="enter todo"
      value={title}
      onChange={handleChange}/>
      <button type="submit">Add</button>
    </form>
  );
}
