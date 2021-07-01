import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../assets/gnewslogo.png';

export class Header extends React.Component {
  state = {
    searchValue: '',
    searchError: '',
    searchErrorCode: 0
  }
  HandleChange = event => {
    var errorMessage = '';
    var searchErrorCode = 0;
    this.setState({
      searchValue: event.target.value
    })
    if (this.state.searchValue.length >= 40) {
      errorMessage = 'Search text is too long';
      searchErrorCode = 1;
    }
    if (new RegExp(/[^A-Za-z0-9 ]/).test(event.target.value)) {
      errorMessage = 'Contains illegal characters';
      searchErrorCode = 2;
    }
    this.setState({
      searchError: errorMessage,
      searchErrorCode: searchErrorCode
    })
  }
  HandleSearch = event => {
    if (this.state.searchErrorCode === 0 && this.state.searchValue.length > 0) {
      this.props.searchButton(this.state.searchValue);
    }
  }
  HandleEnterEvent = event => {
    if (event.charCode === 13) { //Enter don't submit form, do search
      event.preventDefault();
      this.HandleSearch();
    }
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" className='GNewsLogo' href="https://gnews.org/">
          <img src={logo} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="http://localhost:3001/">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <div className='formContainer'>
            <div className='errorLabel'>{this.state.searchError}</div>

            <form className="form-inline my-2 my-lg-0">
              <input data-testid="button" className="form-control mr-sm-2" type="search" placeholder="Search" onKeyPress={this.HandleEnterEvent} onChange={this.HandleChange} aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.HandleSearch}>Search</button>

            </form>
          </div>
        </div>
      </nav>
    )
  }
}
export default Header;