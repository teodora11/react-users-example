import React, { Component } from 'react';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: null,
            logged: false
        }
    }

    /*  componentDidMount() {
          fetch("https://api.randomuser.me/")
              .then(res => res.json())
              .then(json => {
                  this.setState({
                      person: json[0],
                      logged: true
                  })
              });
      }   */


    render() {
        return (
            <div>
                Name: {this.props.name} | Email: {this.props.email}
                <button onClick={() => this.props.onEdit(this.props.person)} className="btn btn-warning btn-sm m-2">Izmeni</button>
                <button onClick={() => this.props.onDelete(this.props.person.id)} className="btn btn-danger btn-sm m-2">Obrisi</button>

            </div>
        );
    }
}

export default User;