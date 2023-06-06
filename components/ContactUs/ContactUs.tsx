'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import styles from './styles.module.css';
import ContactForm from '../ContactForm/ContactForm';
import { useMyContext } from '../../context/AppContext';

const ContactUs = () => {
  const { isForm, setData } = useMyContext();
  // const [isForm, setIsForm] = useState<boolean>(false);
  const buttonClickHandler = () => {
    // setIsForm(true);
    setData(true);
  };

  function closeModal() {
    // setIsForm(false);
    setData(false);
  }
  Modal.setAppElement('#yourAppElement');

  return (
    <>
      {isForm ? (
        <>
          <Modal
            isOpen={isForm}
            onRequestClose={closeModal}
            className={styles.contentClass}
            contentLabel="Contact Form"
            shouldCloseOnEsc={true}
            preventScroll={true}
            overlayClassName={styles.overlayClass}>
            <ContactForm />
          </Modal>
        </>
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
