import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import FormButton from './../FormButton/FormButton';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          <span className={css.listName}>{name}</span>
          <span className={css.listNumber}>{number}</span>
          <FormButton label="Delete" onClick={() => removeContact(id)} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func,
};
