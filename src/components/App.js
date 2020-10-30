import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import ContactsList from "./ContactsList/ContactsList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import Alert from "./Alert";
import styles from "./App.module.css";
import popupStyles from "./Alert/Alert.module.css";
import filterStyles from "./Filter/Filter.module.css";

export default class App extends Component {
  static propTypes = {};
  state = {
    contacts: [],
    filter: "",
    alert: false,
  };

  componentDidMount() {
    const addedContacts = localStorage.getItem("contacts");
    if (addedContacts) {
      this.setState({
        contacts: JSON.parse(addedContacts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
    if (this.state.alert === true) {
      setTimeout(() => {
        this.setState({ alert: false });
      }, 5000);
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState((prevState) => {
      const addedContact = prevState.contacts.map((contact) => contact.name);

      if (addedContact.includes(name)) {
        return { alert: true };
      } else return { contacts: [...prevState.contacts, contact] };
    });
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter, alert } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <Header />
        <CSSTransition
          in={alert === true}
          timeout={250}
          classNames={popupStyles}
          unmountOnExit
        >
          <Alert />
        </CSSTransition>
        <ContactForm onAddContact={this.addContact} />
        <h3 className={styles.heading}>Contacts</h3>
        <CSSTransition
          in={contacts.length >= 2}
          timeout={250}
          classNames={filterStyles}
          unmountOnExit
        >
          <Filter value={filter} onChange={this.changeFilter} />
        </CSSTransition>
        <CSSTransition
          in={visibleContacts.length > 0}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <ContactsList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        </CSSTransition>
      </div>
    );
  }
}
