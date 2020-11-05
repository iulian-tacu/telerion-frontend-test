import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ContactForm from "./components/ContactForm/ContactForm";

const App = (props) => {
  return <ContactForm />
}

ReactDOM.render(
  <App />,
  document.getElementById('contact-form-root')
);
