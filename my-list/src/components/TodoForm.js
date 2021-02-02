import React, {useState} from "react";

function TodoForm(props) {

    const[input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            // generates a random number at ten thousands
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        // setting the input in an empty string
        setInput('');
    }

  return (
  <form className='todo-form' onSubmit={handleSubmit}>
      <input
      type='text'
      placeholder='Add a todo'
      value={input}
      name='text'
      className='todo-input'
      //insert handleChange and create a function
      onChange={handleChange}
      
      />
      <button className='todo-button'>Add todo</button>
  </form>
  );
}

export default TodoForm;
