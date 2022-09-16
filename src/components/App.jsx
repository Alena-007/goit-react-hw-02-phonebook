import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // filter: '',
  };

  addContact = ({ name, number }) => {
    this.setState(({ contacts }) => {
      const isContact = contacts.find(contact => contact.name === name);

      if (isContact) {
        alert(`${name} is already in contact`);
        return contacts;
      } else {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        return {
          contacts: [newContact, ...contacts],
        };
      }
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFiltredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts
      .map(
        contact =>
          contact.name.toLowerCase().includes(normalizedFilter) && contact
      )
      .filter(contact => contact !== false);
  };

  render() {
    const filtredContacts = this.getFiltredContacts();
    const contact = this.addContact;
    // const filter = this.changeFilter;
    const del = this.deleteContact;
    // const val = this.state.filter;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={contact} />
        <h2>Contacts</h2>
        {/* <Filter value={val} onChange={filter} /> */}
        <ContactList contacts={filtredContacts} onDeleteContact={del} />
      </div>
    );
  }
}
