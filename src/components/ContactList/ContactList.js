export const ContactList = ({ contacts, removeContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button onClick={() => removeContact(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
);
