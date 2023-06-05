'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
// --- - ---
import Modal from 'react-modal';
import Menu from '../Menu/Menu';

const customStyles = {
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
  },
};
// --- / - ---

const HeaderSmall = ({ isWhite }: { isWhite: boolean }) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const menuHandler = () => {
    setIsMenu(prev => !prev);
  };

  useEffect(() => {
    isMenu
      ? window.document.body.classList.add('modal-open')
      : window.document.body.classList.remove('modal-open');

    return () => {
      window.document.body.classList.remove('modal-open');
    };
  }, [isMenu]);

  const logoHandler = () => {
    console.log('Logo clicked!!!');
  };

  function closeModal() {
    setIsMenu(false);
  }
  Modal.setAppElement('#yourAppElement');
  // --- / - ---

  const imgSrc = isMenu
    ? '/close_black.svg'
    : isWhite
    ? '/menu_short_white.svg'
    : '/menu_short_black.svg';

  const imgSrcLogo = isMenu
    ? '/logo.svg'
    : isWhite
    ? '/logo-white.svg'
    : '/logo.svg';

  return (
    <>
      {/* --- - --- */}
      <div>
        <Modal
          isOpen={isMenu}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Main Menu"
          shouldCloseOnEsc={true}
          preventScroll={true}
          overlayClassName={styles.overlayClass}>
          <Menu closeModal={closeModal} />
        </Modal>
      </div>
      {/* --- / - --- */}
      <div className={styles.topBox} id="yourAppElement">
        <Link href={'/'}>
          <div className={styles.imageBox} onClick={logoHandler}>
            <Image
              src={imgSrcLogo}
              alt="Logo"
              width={64}
              height={14}
              priority
            />
          </div>
        </Link>
        <div className={styles.imageBox} onClick={menuHandler}>
          <Image src={imgSrc} alt="menu" width={18} height={14} priority />
        </div>
      </div>
    </>
  );
};

export default HeaderSmall;
