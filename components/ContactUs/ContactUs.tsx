"use client";

import { useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.css";
import ContactForm from "../ContactForm/ContactForm";
import { useMyContext } from "../../context/AppContext";
import { AnimatePresence, motion } from "framer-motion";
import { variantsHomePage } from "../../Variants/Variants";


const ContactUs = () => {
  // const { isFormOpen, setData } = useMyContext();
  const [isFormOpen, setData] = useState<boolean>(false);
  const openModal = () => {
    // setIsForm(true);
    setData(true);
  };

  function closeModal() {
    // setIsForm(false);
    setData(false);
  }
  Modal.setAppElement("#yourAppElement");

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
            overlayClassName={styles.overlayClass}
          >
            <ContactForm />
          </Modal>
        </>
      ) : (
        <motion.button
          onClick={openModal}
          className={styles.contactUs}
          variants={variantsHomePage}
          initial="hidden"
          animate="visible"
          id="yourAppElement"
        >
          Contact us
        </motion.button>
      )}
    </>
  );
};

export default ContactUs;
