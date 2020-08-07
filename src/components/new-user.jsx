import React, { Component } from 'react';

class NewUser extends Component {
    render() {
        return (
            <div>
                <label>Unesite ime: </label>
                <input
                    type="text"
                    onChange={this.props.changeName}>
                </input>
                <label>Unesite email!!!!: </label>
                <input type="text" onChange={this.props.changeEmail}></input>
                <button onClick={() => this.props.onAdd()} className="btn btn-primary m-2">Submit</button>
            </div>
        );
        console.log(this.props.newName);
    }

    handleChange = event => {

    };
}

export default NewUser;