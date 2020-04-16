import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      number: 0,
    };
  }

  minusButtonHandler = () => {
    this.setState(() => {
      return {
        number: this.state.number === 0 ? 0 : this.state.number - 1,
      };
    });
  };

  plusButtonHandler = () => {
    this.setState(() => {
      return {
        number: this.state.number === 5 ? 5 : this.state.number + 1,
      };
    });
  };

  clearButtonHandler = () => {
    this.setState(() => {
      return {
        number: 0,
      };
    });
  };

  render() {
    const { number } = this.state;
    let clazz = number === 5 ? "red-number" : "";

    return (
      <div className="App">
        <div className="app-wrapper">
          <div className={clazz}>{number}</div>
          <div className="btn-group btn-group-lg btn-block">
            <button
              className="btn btn-outline-secondary"
              onClick={this.minusButtonHandler}
            >
              -
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={this.plusButtonHandler}
            >
              +
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={this.clearButtonHandler}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
