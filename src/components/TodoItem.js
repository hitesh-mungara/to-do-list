import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  // Function to enable input field for editing
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  // Function to update todo item on pressing enter key
  const update = (id, value, e) => {
    if (e.which === 13) {
      // 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={item.id} className="card">
      {/* Textarea for editing todo item */}
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      {/* Buttons for editing, completing, and removing todo item */}
      <div className="btns">
        <button onClick={() => changeFocus()}>
          {" "}
          <AiFillEdit />{" "}
        </button>
        {item.completed === false && (
          <button style={{ color: "green" }} onClick={() => completeTodo(item.id)}>
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button style={{ color: "red" }} onClick={() => removeTodo(item.id)}>
          {" "}
          <IoClose />
        </button>{" "}
      </div>
      {/* Display 'done' span if the todo item is completed */}
      {item.completed && <span className="completed">done</span>}
    </li>
  );
};

export default TodoItem;
