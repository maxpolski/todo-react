import React, { Component } from 'react';


import './Form.scss';

class Form extends Component {
    state = {inputValue: ''};

    onChangeInput = e => {
        this.setState({ inputValue: e.target.value });
    };

    onSubmitForm = e => {
        e.preventDefault();
        this.props.formOnSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
    };

    render() {
        return (
            <form onSubmit={this.onSubmitForm} 
                    className="form">

                    <div className="col-xs-12 col-sm-4">
                        <input type="text"
                                value={this.state.inputValue}
                                onChange={this.onChangeInput}
                                autoFocus />
                        <button>submit</button>       
                    </div>
            </form>
        );
    }
}

export default Form;