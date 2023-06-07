'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import styles from './styles.module.css';
import ContactForm from '../ContactForm/ContactForm';

const ContactUs = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsFormOpen(true);
  };

  function closeModal() {
    setIsFormOpen(false);
  }
  Modal.setAppElement('#yourAppElement');

  return (
    <>
      {isFormOpen ? (
        <>
          <Modal
            isOpen={isFormOpen}
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
          onClick={openModal}
          className={styles.contactUs}
          id="yourAppElement">
          Contact us
        </button>
      )}
    </>
  );
};

export default ContactUs;
