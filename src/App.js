import React from 'react';
import './App.css';
import { connect } from 'react-redux'
function App(props) {
  return (
    <div className="App">
      React And Redux 
      {props.counter1}
    </div>
  );
}
const mapStateToProps = state => {
  return state
};
export default connect(
  mapStateToProps,
  null
)(App)
