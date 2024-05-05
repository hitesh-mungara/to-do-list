// Importing the main CSS file to apply global styles
import "./css/main.css";

// Importing the DisplayTodos component to display the list of todos
import DisplayTodos from "./components/DisplayTodos";

// Importing the Todos component to add new todos
import Todos from "./components/Todos";

// Functional component representing the main App
function App() {
  return (
    // App container
    <div className="App">
      {/* Heading */}
      <h1>Todo App</h1>

      {/* Components for adding new todos and displaying existing todos */}
      <div>
        <Todos /> {/* Component for adding new todos */}
        <DisplayTodos /> {/* Component for displaying todos */}
      </div>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
