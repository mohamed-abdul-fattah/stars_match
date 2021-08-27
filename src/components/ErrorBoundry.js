import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="game">
          <div className="help">
            <h1 style={{color: "red"}}>Something went wrong!</h1>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
