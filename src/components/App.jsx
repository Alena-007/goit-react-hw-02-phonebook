import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from '../GlobalStyle';
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const { contacts } = this.state;
    const isExistContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExistContact) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Box width="600px" ml="auto" mr="auto" p={4}>
        <Box as="h1" mb={4}>
          Phonebook
        </Box>
        <ContactForm onSubmit={this.addContact} />
        <Box as="h2" mb={3}>
          Contacts
        </Box>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          removeContact={this.removeContact}
        />
        <GlobalStyle />
      </Box>
    );
  }
}
