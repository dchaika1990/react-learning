import React, { Component } from 'react';

class lesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Иван', 
            surname: 'Иванов',
        };
    }

    getTest() {
        return 'some text';
    }

    showMessage(item) {
        console.log(this.state.name);
        console.log(item);
    }

    changeName() {
        this.setState({ name: 'Дима' });
    }

    render() {

        return (
            <div>
                <p onClick={ (e) => this.showMessage(e.target) }>push me</p>
                <p>имя: {this.state.name}</p>
                <button onClick={ (e) => this.changeName(e) }>change name</button>
            </div>
        );

    }
}

export default lesson;