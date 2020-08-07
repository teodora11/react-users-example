
import Users from './components/users';
import Newuser from './components/new-user';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';

class App extends Component {

  /*  componentDidMount() {
      const url1 = "http://jsonplaceholder.typicode.com/users";
      fetch(url1).then(res => res.json())
        .then(json => {
          this.setState({
            persons: json,
            logged: true
          })
        });
    } */

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Link to="/">Persons </Link>
          <Link to="/new-person">New person</Link>
          <Route path="/" exact component={Users} />
          <Route path="/new-person" render={
            () =>
              <div>
                <Newuser
                  onSubmit={this.handleSubmit}
                />
              </div>
          } />   */}
          <Users />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
