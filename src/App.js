import React, { Component } from 'react';
import logo from './logo.svg';
// import { connect } from 'tls';
// import './App.css';
import {connect} from 'react-redux';
import {setName} from './actions'

class App extends Component {

  handleclick=()=>{
    this.props.setName("Akhil");
  }
  render() {
    return (
      <div className="App">
       <button onClick={this.handleclick}>Update Name</button>
       <h1>{this.props.user.name}</h1>
       <h1>{this.props.user.age}</h1>

      </div>
    );
  }
}
 const mapStateToProps = (state) => {
    return {
      user:state.user,
      math:state.math
    }
}
const mapDispatchToProps= (dispatch) => {
  return {
   setName:(name) =>{
     dispatch(setName(name));
   }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
