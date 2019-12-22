import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import {action1,action2} from './action/comAction/test1Action';
function App(props) {
  
  return (
    <div className="App">
      React And Redux 
      {props.counter1}
      <br/>
      <button onClick={() => props.increment()} value='test'>increment</button>
      <button onClick={() => props.decrement()} value='test'>decrement</button>
    </div>
  );
}
const mapStateToProps = state => {
  return state
};
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch(action1()),
    decrement: () => dispatch(action2()),
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
