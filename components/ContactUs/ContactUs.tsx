'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import styles from './styles.module.css';
import ContactForm from '../ContactForm/ContactForm';

const customStyles = {
  // overlay: {
  //   position: 'fixed',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: 'rgba(255, 255, 255, 0.75)',
  //   zIndex: 3,
  // },
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
  },
};

const ContactUs = () => {
  const [isForm, setIsForm] = useState<boolean>(false);
  const buttonClickHandler = () => {
    setIsForm(true);
    console.log('isForm : ', isForm);
  };

  function closeModal() {
    setIsForm(false);
  }
  Modal.setAppElement('#yourAppElement');

  return (
    <>
      {isForm ? (
        <div>
          <Modal
            isOpen={isForm}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Main Menu"
            shouldCloseOnEsc={true}
            preventScroll={true}
            overlayClassName={styles.overlayClass}>
            <ContactForm />
          </Modal>
        </div>
      ) : (
        <button
          onClick={buttonClickHandler}
          className={styles.contactUs}
          id="yourAppElement">
          Contact us
        </button>
      )}
    </>
  );
};

export default ContactUs;
