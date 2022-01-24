import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    setItems([...items, input]);
    setInput("");
  };

  return (
    <>
      <div className="main-div">
        <div className="input-div">
          <input
            onChange={handleInput}
            type="text"
            placeholder="add item"
            value={input}
          />
          <button onClick={addItem} className="todo-btn">
            Add item
          </button>
        </div>

        <div className="item-added">
          {items.map((item) => {
            return <h3 className="item-style">{item}</h3>;
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
