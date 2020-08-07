import React, { Component } from 'react';
import User from './user';
import Newuser from './new-user';
import { Route, Link } from 'react-router-dom';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            logged: false,
            name: '',
            email: ''
        };
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    state = {
        persons: [],
        logged: false,
        name: '',
        email: ''
    }

    async componentDidMount() {
        const url1 = "http://jsonplaceholder.typicode.com/users";
        const url = "https://api.randomuser.me/";
        const response = await fetch(url1);
        const data = await response.json();
        console.log(data);
        console.log(data[0].name);
        this.setState({ persons: data, logged: true });
    }

    render() {
        var { persons, logged } = this.state;
        return (
            <div>
                <Link to="/">Persons </Link>
                <Link to="/new-person">New person</Link>
                <Route path="/" exact render={
                    () =>
                        !this.state.logged ? (<div>Loading
                        </div>) :
                            (<div>
                                <button
                                    className="btn btn-primary m-2"
                                    onClick={this.handleAdd}>DODAJ
                        </button>
                                <ul>
                                    {persons.map(item =>
                                        <User
                                            key={item.id}
                                            name={item.name}
                                            email={item.email}
                                            person={item}
                                            onDelete={this.handleDelete}
                                            onEdit={this.handleEdit}
                                        />
                                    )}
                                </ul>
                            </div>)
                } />
                <Route path="/new-person" render={
                    () =>
                        <Newuser
                            newName={this.state.name}
                            newEmail={this.state.email}
                            changeName={this.handleName}
                            changeEmail={this.handleEmail}
                            onAdd={this.handleAdd} />
                } />
            </div>
        );
    }

    handleDelete = (id) => {
        console.log("Brisanje usera ");
        const persons = this.state.persons.filter(p => p.id !== id);
        this.setState({ persons });
    }

    handleEdit = (person) => {
        console.log("Editovanje usera");
        const persons = [...this.state.persons];
        const i = persons.indexOf(person);
        persons[i].name = "tejana";
        persons[i].email = "teja@a.a";
        this.setState({ persons });
    }

    handleAdd = () => {
        const person = {
            name: this.state.name,
            email: this.state.email,
            id: Math.random * 100 //ovo treba popraviti da ne budu isti id-ovi kod vise osoba
        }
        const persons = [...this.state.persons];
        persons.push(person);
        this.setState({ persons });

    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }
}

export default Users;