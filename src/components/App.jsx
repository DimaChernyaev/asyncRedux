import ContactsList from './contacts/contactList/ContactsList';
import Form from './contacts/form/Form';
import Filter from './contacts/filter/Filter';
import {
  Container,
  ContactsContainer,
  TitleContactList,
  TitlePhonebook,
  NullContactsMessage,
} from './App.styled';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Form />

      <TitleContactList>Contacts</TitleContactList>

      {contacts.length === 0 ? (
        <NullContactsMessage>You don't have any contacts</NullContactsMessage>
      ) : (
        <ContactsContainer>
          <Filter />
          <ContactsList />
        </ContactsContainer>
      )}
    </Container>
  );
};

export default App;
