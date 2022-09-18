import PropTypes from 'prop-types';
import { ContactItems, ListButton } from './ContactList.styled';

export const ContactList = ({ contacts, removeContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactItems key={contact.id}>
        {contact.name}: {contact.number}
        <ListButton onClick={() => removeContact(contact.id)}>
          Delete
        </ListButton>
      </ContactItems>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};
