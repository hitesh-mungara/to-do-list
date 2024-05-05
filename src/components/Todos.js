import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

// Mapping state to props
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

// Mapping dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

// Todo component
const Todos = (props) => {
  const [todo, setTodo] = useState(""); // State for managing todo input

  // Function to handle input change
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Function to add a new todo item
  const add = () => {
    if (todo === "") {
      alert("Input is Empty"); // Alert if input is empty
    } else {
      // Dispatch addTodo action with new todo object
      props.addTodo({
        id: Math.floor(Math.random() * 1000), // Generate random id
        item: todo, // Todo item
        completed: false, // Initial completion status
      });
      setTodo(""); // Clear input after adding todo
    }
  };

  return (
    <div className="addTodos">
      {/* Input field for entering new todo */}
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />
      {/* Button to add new todo */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};

// Connect Todos component with Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
