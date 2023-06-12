'use client';

import { useState } from 'react';
import ContactFormButton from '../../components/ContactForm/ContactFormButton';
import styles from '../../components/ContactForm/contactForm.module.css';

const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const alarmText = [
  'No alarm',
  'Please complete this field',
  'Username must be between 3 and 25 characters.',
  'Email is not valid.',
];

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [nameAlarmIndex, setNameAlarmIndex] = useState<number>(1);
  const [email, setEmail] = useState<string>('');
  const [emailAlarmIndex, setEmailAlarmIndex] = useState<number>(1);
  const [message, setMessage] = useState<string>('');
  const [messageAlarmIndex, setMessageAlarmIndex] = useState<number>(1);
  const [isSended, setIsSended] = useState<boolean>(false);

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameValue = e?.target?.value;
    if (nameValue && nameValue.length > 0 && nameValue.length < 3) {
      setNameAlarmIndex(2);
    } else if (nameValue.length === 0) {
      setNameAlarmIndex(1);
    } else {
      setNameAlarmIndex(0);
    }

    if (nameValue.length < 26) {
      setName(nameValue);
    } else return;
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e?.target?.value;
    if (emailValue && emailValue.length > 0) {
      if (emailRegExp.test(emailValue)) {
        setEmailAlarmIndex(0);
      } else {
        setEmailAlarmIndex(3);
      }
    } else if (emailValue.length === 0) {
      setEmailAlarmIndex(1);
    }

    setEmail(emailValue);
  };

  const messageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const messageValue = e?.target?.value;
    if (messageValue && messageValue.length > 0) {
      setMessageAlarmIndex(0);
    } else {
      setMessageAlarmIndex(1);
    }

    setMessage(messageValue);
  };

  const sendClick = () => {
    // setIsSended(true);  !!! Temp comment
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
    <div className={styles.wrapper} id="contact">
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
              <input
                className={styles.contactInput}
                placeholder="Your name"
                value={name}
                onChange={e => nameHandler(e)}
                maxLength={25}
              />
              <p
                className={
                  nameAlarmIndex !== 0
                    ? styles.alarmMessage
                    : styles.alarmMessageHide
                }>
                {alarmText[nameAlarmIndex]}
              </p>

              <input
                className={styles.contactInput}
                placeholder="Your phone (optional)"
              />
              <p
                className={styles.alarmMessage}
                style={{ visibility: 'hidden' }}>
                {alarmText}
              </p>
              <input
                className={styles.contactInput}
                placeholder="Your email"
                name={email}
                onChange={e => emailHandler(e)}
              />
              <p
                className={
                  emailAlarmIndex !== 0
                    ? styles.alarmMessage
                    : styles.alarmMessageHide
                }>
                {alarmText[emailAlarmIndex]}
              </p>
              <input
                className={styles.contactInput}
                placeholder="Your message"
                name={message}
                onChange={e => messageHandler(e)}
              />
              <p
                className={
                  messageAlarmIndex !== 0
                    ? styles.alarmMessage
                    : styles.alarmMessageHide
                }>
                {alarmText[messageAlarmIndex]}
              </p>
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

export default Contact;
