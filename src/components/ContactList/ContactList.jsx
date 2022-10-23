import React from "react";
import PropTypes from 'prop-types';


export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <div>
            <h2>Contacts</h2>
                <ul>
                    {contacts.map(({name, id, number}) => (
                            <li name={name}
                                key={id}
                                >{name}: {number}
                                <button onClick={() => onDeleteContact(id)}>Delete</button>
                                </li>
                    )
                    )}
                </ul>
        </div>
        
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
                PropTypes.exact({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    number: PropTypes.string.isRequired,
                })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};