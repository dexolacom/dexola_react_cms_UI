'use client';

// import { useState } from 'react';
import Image from 'next/image';
import styles from './contactForm.module.css';

const ContactFormButton = ({ data }: { data: IContactButton }) => {
  const { name, image_src, width, height, clickHandler } = data;
  // const [isSended, setIsSended] = useState<boolean>(false);
  // const sendClick = () => {
  //   // setIsSended(true);  !!! Temp comment
  // };
  return (
    <button className={styles.contactButton} onClick={clickHandler}>
      <div>
        <Image
          src={image_src}
          alt={name}
          width={width}
          height={height}
          priority
          style={{ marginRight: '12px' }}
        />
        {name}
      </div>
    </button>
  );
};

export default ContactFormButton;
