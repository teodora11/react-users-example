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
            grade: '1'
        };
        this.handleGrade = this.handleGrade.bind(this);
    }

    async componentDidMount() {
        const url1 = "http://jsonplaceholder.typicode.com/users";
        const url = "https://api.randomuser.me/";
        const response = await fetch(url1);
        const data = await response.json();
        console.log(data);
        console.log(data[0].name);

        const storedData = localStorage.getItem('persons');
        if (!storedData) {  //ako je storage prazan
            console.log('Local storage is empty');
            this.setState({ persons: data, logged: true });
            localStorage.setItem('persons', JSON.stringify(data));
        }
        else {
            const parsedData = JSON.parse(storedData);
            this.setState({ persons: parsedData, logged: true });
        }
    }

    render() {
        var { persons, logged } = this.state;
        return (
            <div>
                <Link to="/">RERSONS </Link>
                <Link to="/new-person">NEW PERSON</Link>
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
                                            grade={this.state.grade}
                                            onGrade={this.handleGrade}
                                        />
                                    )}
                                </ul>
                            </div>)
                } />
                <Route path="/new-person" render={
                    () =>
                        <Newuser />
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
        localStorage.setItem('persons', JSON.stringify(persons));
        this.setState({ persons });

    }

    /* handleName = (event) => {
         this.setState({
             name: event.target.value
         });
     }
 
     handleEmail = (event) => {
         this.setState({
             email: event.target.value
         });
     }  */

    handleGrade = (event) => {
        this.setState({
            grade: event.target.value
        });
    }
}

export default Users;