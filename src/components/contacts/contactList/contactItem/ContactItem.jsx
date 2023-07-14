import ButtonLoader from 'components/loader/ButtonLoader';
import { Contact, ContactText, ButtonDelete } from '../ContactList.styled';
import { FaUserAlt, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operation';
// import { selectContactsItems, selectIsDeleteLoading } from 'redux/selectors';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();


  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Contact>
      <FaUserAlt />
      <ContactText>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
      </ContactText>
      <ButtonDelete
        type="button"
        disabled={isLoading}
        onClick={() => handleDeleteContact(id)}
      >
        <FaRegTrashAlt />
      </ButtonDelete>
    </Contact>
  );
};

export default ContactItem;
