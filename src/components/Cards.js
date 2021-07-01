import React, { Component } from 'react'
import { Route,BrowserRouter as Router } from 'react-router-dom';
import Axios from "axios";
import Card from './Card.js';
class Cards extends Component{
  state = {
    data: []
}
constructor(props){
  super(props);
  this.HandleSearch = this.HandleSearch.bind(this);
  
}
componentDidMount() {
    Axios.get('/getTopHeadlines')
      .then(res => {
          this.setState({
            data: res.data
          })
      })
}

HandleSearch(searchValue){
  Axios.get('/search/?searchValue='+searchValue)
      .then(res => {
         var searchResults = [];
         if(res.data.length > 9){
          res.data.length = 9;
         }
         searchResults = res.data;
          this.setState({
            data: searchResults
          })
      })

      var userAction = {entryType:'Search',entryName:searchValue};
      Axios.post('/UserAction', userAction);
}

    render() {
      const gnewsdata = this.state.data;
      console.log(gnewsdata);
      return (
            <section className="cards-wrapper">
                {
                gnewsdata.map((gnew, index) => (
                  <Router>
                    <Route exact path="/">
                      <Card title={gnew.title} image={gnew.image} description={gnew.description} publishedAt={gnew.publishedAt} originalUrl={gnew.url}/>
                    </Route>
                  </Router>
                ))
                
                }
            </section>
            
      )
    } 
}
export default Cards;
