import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, num1: "", num2: "" };
  }

<<<<<<< HEAD
  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
=======
  setNum1(e) {
    // e.preventDefault();
    const input = e.currentTarget;
    const num1 = input.value === "" ? "" : parseInt(input.value);
    this.setState({num1});
  }

  setNum2(e) {
    const input = e.currentTarget;
    const num2 = input.value === "" ? "" : parseInt(input.value);
    this.setState({num2});
  }

  add(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({result});
  }

  subtract(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({result});
  }

  multiply(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result});
  }

  divide(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result});
  }

  clear(e) {
    e.preventDefault();
    this.setState({ result: 0, num1: "", num2: "" });
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input type="text" value={num1} onChange={this.setNum1.bind(this)}></input>
        <input type="text" value={num2} onChange={this.setNum2.bind(this)}></input>
        <br />
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.subtract.bind(this)}>-</button>
        <button onClick={this.multiply.bind(this)}>*</button>
        <button onClick={this.divide.bind(this)}>/</button>
        <br />
        <button onClick={this.clear.bind(this)}>Clear</button>
>>>>>>> 05fdfced5ebfc461afce7f76f97e4d95451ff1bd
      </div>
    );
  }
}

export default Calculator;
