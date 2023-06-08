// 'use client';

import Link from 'next/link';
import styles from './styles.module.css';

const ContactUs = () => {
  return (
    <Link href={'contact'}>
      <button className={styles.contactUs}>Contact us</button>
    </Link>
  );
};

export default ContactUs;
