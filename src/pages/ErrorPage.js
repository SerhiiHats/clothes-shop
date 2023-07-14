import React, {Component} from 'react';

class ErrorPage extends Component {
  state = {hasError: false}

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError", {error})
    return {hasError: true}
  };

  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch", {error, errorInfo})
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong :(</h1>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorPage;