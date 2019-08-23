import React, {Component} from 'react';

class FormsDeep extends Component {
    
    state = {
        value: 'привет',
        checked: true,
        valueSelect: 2,
        langs: [
            'Язык HTML',
            'Язык CSS',
            'Язык JavaScript',
            'Язык PHP',
        ],
        option: 'option1',
        valueDefault: 'привет'
    };

    inputChange(item) {
        this.setState({ value: item.value });
    }

    handleCheckboxChange(event) {
        this.setState({checked: !this.state.checked});
    }

    handleSelectChange(item) {
        this.setState({ valueSelect: item.value });
    }

    handleRadioChange(event) {
        this.setState({ option: event.target.value });
    }
    
    render() {

        const options = this.state.langs.map( (item, index) =>{
            return <option key={index} value={index}>{item}</option>
        })

        return (
            <div>
                <h4>Textarea</h4>
                <p>text: {this.state.value}</p>
                <textarea cols="30" rows="10" value={this.state.value}  onChange={ (event) => this.inputChange(event.target) } />
                

                <hr/>
                <h4>Checkbox</h4>
                <input 
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={ (event) => this.handleCheckboxChange(event) }
                />
                <p>{ (this.state.checked) ? 'отмечен' : 'не отмече' }</p>

                <hr/>
                <h4>Select</h4>
                <p>Ваш выбор: {this.state.langs[this.state.valueSelect]}</p>
                <select
                    value={this.state.valueSelect}
                    onChange={ (event) => this.handleSelectChange(event.target) }
                >
                    {options}
                </select>

                <hr/>
                <h4>Radio</h4>
                <input 
                    type='radio'
                    name='lang'
                    value='option1'
                    checked={this.state.option === 'option1'}
                    onChange={ (event) => this.handleRadioChange(event) }
                />
                <input 
                    type='radio'
                    name='lang'
                    value='option2'
                    checked={this.state.option === 'option2'}
                    onChange={ (event) => this.handleRadioChange(event) }
                />

                <hr/>
                <h4>Default value</h4>
                {/* Нет двух сторонней привязки */}
                <input defaultValue={this.state.valueDefault} />
            </div>
        );
    }
}

export default FormsDeep;