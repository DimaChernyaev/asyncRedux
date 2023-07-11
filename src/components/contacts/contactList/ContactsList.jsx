import {
  ContactList,
  ContactText,
  Contact,
  ButtonDelete,
} from './ContactList.styled';
import { FaUserAlt, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { filterVisableList } from 'components/helpers/filterVisableList';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const visableContacts = filterVisableList(contacts, filter);

  return (
    <ContactList>
      {visableContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <FaUserAlt />
          <ContactText>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
          </ContactText>
          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            <FaRegTrashAlt />
          </ButtonDelete>
        </Contact>
      ))}
    </ContactList>
  );
};

export default ContactsList;
