// Traditional function expression
const traditionalFunction = function(param) {
  return param;
}

// Arrow function
const arrowFunction = (param) => {
  return param;
}

// If the function body has only one statement and returns a value, you can omit the curly braces and `return` keyword
const conciseArrowFunction = param => param;




//Defining Functional Components
// Traditional function component
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Arrow function component
const Greeting = (props) => {
  return <h1>Hello, {props.name}</h1>;
}

// Even more concise with implicit return
const Greeting = (props) => <h1>Hello, {props.name}</h1>;





//Using Arrow Functions in Event Handlers
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Traditional method
  handleIncrement = function() {
    this.setState({ count: this.state.count + 1 });
  }.bind(this);

  // Arrow function
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}




//Detailed Examples
//Example 1: Functional Component with Arrow Function
import React from 'react';

// Functional component using arrow function
const Welcome = (props) => {
  return <h1>Welcome, {props.name}</h1>;
};

export default Welcome;

//Example 2: Class Component with Arrow Functions for Event Handlers
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Arrow function to handle button click
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;



//Example 3: Using Arrow Functions in Array Methods
import React from 'react';

// Example of rendering a list using map and arrow function
const fruits = ['Apple', 'Banana', 'Cherry'];

const FruitList = () => {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

export default FruitList;

