import React, {Component} from 'react';
import './style.css';

class Forms extends Component {
 
    state = { 
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        name: ['Коля','Дима','Ваня'],
        list: [1,2,3],
        hrefs: [
            {href: '1.html', text: 'ссылка 1'},
            {href: '2.html', text: 'ссылка 2'},
            {href: '3.html', text: 'ссылка 3'},
        ],
        users: [
            {name: 'Коля', age: 30},
            {name: 'Вася', age: 40},
            {name: 'Петя', age: 50},
        ]
    }

    inputChange(item) {
        switch ( item.getAttribute('id') ) {
            case 'value1':
                this.setState({value1: item.value});
                break;
            case 'value2':
                this.setState({value2: item.value});
                break;
            case 'value3':
                this.setState({value3: item.value});
                break;
            case 'value4':
                this.setState({value4: item.value});
                break;
            case 'value5':
                this.setState({value5: item.value});
                break;
            default:
                this.setState({value6: item.value});
                    
        }
        
    }

    showState(event) {
        event.preventDefault();
        this.state.name.push(this.state.value1)
        this.setState({show: this.state.name, value1: ''});
    }

    addLink(event) {
        event.preventDefault();
        this.state.hrefs.push({href: this.state.value2, text: this.state.value3});
        this.setState({ hrefs: this.state.hrefs, value2: '', value3: '' });
    }

    addUser(event) {
        event.preventDefault();
        this.state.users.push({name: this.state.value5, age: this.state.value6});
        this.setState({ users: this.state.users, value5: '', value6: '' });
    }

    deleteLi(event) {
        event.preventDefault();
        this.state.list.splice( this.state.value4 - 1, 1 );
        this.setState({list: this.state.list, value4: ''});
    }

    deleteItem(event, index) {
        event.preventDefault();
        this.state.name.splice( index, 1 );
        this.setState({show: this.state.name, value1: ''});
    }


    render() {
        
        var list = this.state.name.map((item, index) => {
            return <li key={index} > 
                        {item} 
                        <button onClick={ (event) => this.deleteItem(event, index) } >delete</button>
                    </li>
        })

        var links = this.state.hrefs.map( (elem, index) => {
            return <li key={index} ><a href={elem.href}>{elem.text}</a></li>
        } )

        var list2 = this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
        })

        var table = this.state.users.map(( user, index ) => {
            return <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                </tr>
        })
        

        return (
            <div>
                <form onSubmit={ (event)=>this.showState(event) }>
                    <input type="text" id='value1' value={this.state.value1} onChange={(event) => this.inputChange(event.target) } />
                    <input type='submit' value='show' />
                    { (list.length) ? <ul>{list}</ul> : '' }
                </form>
                <form onSubmit={ (event) => this.addLink(event) }>
                <hr/>
                    <input type="text" id='value2' value={this.state.value2} onChange={ (event) => this.inputChange(event.target) } />
                    <input type="text" id='value3' value={this.state.value3} onChange={ (event) => this.inputChange(event.target) } />
                    <input type='submit' value='add link' />
                    { (links.length) ? <ul>{links}</ul> : '' }
                </form>
                <hr/>
                <form onSubmit={ (event) => this.deleteLi(event) }>
                    <input type="number" id='value4' value={this.state.value4} onChange={ (event) => this.inputChange(event.target) } />
                    <input type='submit' value='delete li' />
                    { (list2.length) ? <ol>{list2}</ol> : '' }
                </form>
                <hr/>
                <form onSubmit={ (event) => this.addUser(event) }>
                    <input type="text" id='value5' value={this.state.value5} onChange={ (event) => this.inputChange(event.target) } />
                    <input type="number" id='value6' value={this.state.value6} onChange={ (event) => this.inputChange(event.target) } />
                    <input type='submit' value='add user' />
                    { (table.length) ? <table><tbody>{table}</tbody></table> : '' }
                </form>
            </div>
        );


    }
}



export default Forms;