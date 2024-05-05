import React from "react"; // Import React library
import ReactDOM from "react-dom"; // Import ReactDOM library
import "./index.css"; // Import index.css file for global styles
import App from "./App"; // Import the main App component
import { Provider } from "react-redux"; // Import Provider component from react-redux for Redux store integration
import store from "./redux/store"; // Import the Redux store

// Render the app component inside the React.StrictMode to enable additional checks and warnings for better development experience
ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the App component with the Provider component to provide access to the Redux store */}
    <Provider store={store}>
      <App /> {/* Render the main App component */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") // Mount the app inside the HTML root element with id="root"
);
