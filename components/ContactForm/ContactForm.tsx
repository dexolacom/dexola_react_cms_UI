'use client';

import { useEffect, useState } from 'react';
import { useMyContext } from '../../context/AppContext';
import ContactFormButton from './ContactFormButton';
import styles from './contactForm.module.css';

const ContactForm = () => {
  const alarmText = 'Please complete this field';
  const { isFormOpen, setData } = useMyContext();
  const [isSended, setIsSended] = useState<boolean>(false);
  useEffect(() => {
    setData(true);

    return () => {
      setData(false);
    };
  }, []);

  const sendClick = () => {
    // setIsSended(true);  !!! Temp comment
    setData(true);
  };
  const telegramClick = () => {
    // setIsSended(true);  !!! Temp comment
  };
  const emailClick = () => {
    // setIsSended(true);  !!! Temp comment
  };

  const sendProps: IContactButton = {
    name: 'Send it',
    image_src: '/line_64.svg',
    width: 24,
    height: 1.5,
    clickHandler: sendClick,
  };
  const telegramProps: IContactButton = {
    name: 'Telegram',
    image_src: '/telegram.svg',
    width: 12,
    height: 11,
    clickHandler: telegramClick,
  };
  const emailProps: IContactButton = {
    name: 'Email',
    image_src: '/email.svg',
    width: 16,
    height: 10,
    clickHandler: emailClick,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftBlock}>
        <figure className={styles.videoWrapper}>
          <video
            autoPlay
            muted
            loop
            poster=""
            playsInline
            className={styles.video}>
            <source
              src="/Dexola_BG_2.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'></source>
            Your browser does not support the video tag.
          </video>
        </figure>
        <p className={styles.title}>
          Have a Question?
          <br /> Drop us a line.
        </p>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.rightFirstBlock}>
          {isSended ? (
            <p className={styles.thanksText}>
              Thank you!
              <br /> We will get in touch soon
            </p>
          ) : (
            <div className={styles.rightSubBlock}>
              <input className={styles.contactInput} placeholder="Your name" />
              <p className={styles.alarmMessage}>{alarmText}</p>
              <input
                className={styles.contactInput}
                placeholder="Your phone (optional)"
              />
              <p
                className={styles.alarmMessage}
                style={{ visibility: 'hidden' }}>
                {alarmText}
              </p>
              <input className={styles.contactInput} placeholder="Your email" />
              <p className={styles.alarmMessage}>{alarmText}</p>
              <input
                className={styles.contactInput}
                placeholder="Your message"
              />
              <p className={styles.alarmMessage}>{alarmText}</p>
              <ContactFormButton data={sendProps} />
            </div>
          )}
        </div>
        <div className={styles.buttonWrapperSecond}>
          <p className={styles.formText}>Or ping us by:</p>
          <div className={styles.buttonWrapper}>
            <ContactFormButton data={telegramProps} />
            <ContactFormButton data={emailProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
