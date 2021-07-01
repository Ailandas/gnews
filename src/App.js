import CustomHeader from "./components/Header.js";
import Cards from "./components/Cards.js";
import React, { Component } from 'react'

class App extends Component{
  state = {
    data: [],
    searchValue: 0
}

constructor(props){
  super(props);
  this.HandleSearch = this.HandleSearch.bind(this);
  this.child = React.createRef();

}
HandleSearch(searchValue){
  this.child.current.HandleSearch(searchValue);
}
    render() {
      return (
        <div className="App">
          <CustomHeader searchButton={this.HandleSearch}/>
          <Cards ref={this.child}/> 
        </div>
      )
    }
  
}
export default App;
