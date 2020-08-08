import React, { Component } from 'react';

class NewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
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

    handleAdd = () => {
        const person = {
            name: this.state.name,
            email: this.state.email,
            id: Math.random * 100 //ovo treba popraviti da ne budu isti id-ovi kod vise osoba
        }
        const storedPersons = localStorage.getItem('persons');
        let persons = JSON.parse(storedPersons);
        persons.push(person);
        localStorage.setItem('persons', JSON.stringify(persons));
        this.setState({ persons });

    }

    render() {
        return (
            <div>
                <label>Unesite ime: </label>
                <input
                    type="text"
                    onChange={this.handleName}>
                </input>
                <label>Unesite email!!!!: </label>
                <input type="text" onChange={this.handleEmail}></input>
                <button onClick={this.handleAdd} className="btn btn-primary m-2">Submit</button>
            </div>
        );
        console.log(this.props.newName);
    }

}

export default NewUser;