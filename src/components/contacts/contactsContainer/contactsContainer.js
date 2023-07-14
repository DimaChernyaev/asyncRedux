import ContactsList from '../contactList/ContactsList';
import Filter from '../filter/Filter';
import { Container, NullContactsMessage } from './contactsContainer.styled';
import { useSelector } from 'react-redux';
import { selectContactsItems, selectIsAllLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import Loader from 'components/loader/Loader';

const ContactsContainer = () => {
  const contacts = useSelector(selectContactsItems);
  const isLoading = useSelector(selectIsAllLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Filter />
      {isLoading && <Loader />}
      {contacts.length > 0 ? (
          <ContactsList />
      ) : (
        <>
          {!isLoading && (
            <NullContactsMessage>
              Yo don't have any contacts yet.
            </NullContactsMessage>
          )}
        </>
      )}
    </Container>
  );
};

export default ContactsContainer;

/* <>
          { !isLoading && <ContactsList />}
        </> */
