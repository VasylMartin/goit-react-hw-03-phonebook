import React from "react";
import PropTypes from 'prop-types';


class Form extends React.Component {
    state = {
        name: '',
        number: ''
    }

    handleInputsChange = e => {
        const {name, value} = e.currentTarget
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.onSubmit(this.state)

        this.resetForm()
    }

    resetForm = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Phonebook</h1>
                <label htmlFor="name">Name
                <input
                    value={this.state.name}
                    onChange={this.handleInputsChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </label>
                <label htmlFor="number">Number
                <input
                    value={this.state.number}
                    onChange={this.handleInputsChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export {Form}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};