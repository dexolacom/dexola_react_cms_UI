'use client';

import Image from 'next/image';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';
import styles from './contactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderSmall isWhite={true} />
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
        <div className={styles.rightSubBlock}>
          <input placeholder="Your name" />
          <input placeholder="Your phone (optional)" />
          <input placeholder="Your email" />
          <input placeholder="Your message" />
        </div>
        <div className={styles.buttonWrapperFirst}>
          <button> - Send it</button>
        </div>
        <div className={styles.rightSubBlock}>
          <p>Or ping us by:</p>
          <div className={styles.buttonWrapperSecond}>
            <button>
              <div>
                <Image
                  src={'/telegram.svg'}
                  alt="Telegram"
                  width={12}
                  height={11}
                  // priority
                  style={{ marginRight: '12px' }}
                />
                Telegram
              </div>
            </button>
            <button>
              <div>
                <Image
                  src={'/email.svg'}
                  alt="Email"
                  width={16}
                  height={10}
                  // priority
                  style={{ marginRight: '12px' }}
                />
                Email
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
