import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

class ErrorBoundary extends React.Component {
  state = { error: "" };

  componentDidCatch(error) {
    this.setState({
      error: `${error.name}: ${error.message} \n ${
        error.stack
      }\n${JSON.stringify(error)}`,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <div>{error}</div>;
    } else {
      return <>{this.props.children}</>;
    }
  }
}

// export default ErrorBoundary;

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById("root")
);
