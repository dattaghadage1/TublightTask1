import React from 'react';
import { Link } from 'react-router-dom';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    });
  }

  decrementCount() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    });
  }

  render() {
    return (
      <div style={{textAlign:"center"}}>
     <Link to={'/controll'}> <button>Go ControlledForm</button></Link>
        <h1>Counter Application</h1>
        <h2>{this.state.count}</h2>
        <CounterButton increment={this.incrementCount} decrement={this.decrementCount} />
      </div>
    );
  }
}

class CounterButton extends React.Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}
export default Counter;
