import React, { Component } from "react";

export default class ClassC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Score: 0,
      Wickets: 0,
    };
  }

  componentDidMount=()=>{
    console.log("ClassC-OnComponentLoad");
  }
  componentWillUnmount=()=>{
    console.log("ClassC-OnComponentUnload");
  }
  shouldComponentUpdate=()=>{
    console.log("ClassC- shouldComponentUpdate");
    return false;
  }
  componentDidUpdate=()=>{
    console.log("ClassC-OnComponentUpdate");
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <h1 className="mainH">Class Component</h1>
        <h1>Score:{this.state.Score}</h1>
        <h1>Wickets:{this.state.Wickets}</h1>
        <button onClick={() => {
            this.setState({Score:this.state.Score+1});
        }}>Increment Score</button>
        <button onClick={() => {
            this.setState({Score:this.state.Score-1});
        }}>Decrement Score</button>
        <br></br>
        <button onClick={() => {
            this.setState({Wickets:this.state.Wickets+1});
        }}>Increment Wicket</button>
        <button onClick={() => {
            this.setState({Wickets:this.state.Wickets-1});
        }}>Decrement Wicket</button>
      </div>
    );
  }
}
