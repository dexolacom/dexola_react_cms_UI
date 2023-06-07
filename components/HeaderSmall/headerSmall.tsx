'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMyContext } from '../../context/AppContext';
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
  const { isForm, setData, isHoveredLink } = useMyContext();
  // const isHeaderWhite = isForm ? isForm : isWhite;
  const isHeaderWhite = isForm ? isForm : isHoveredLink;
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const menuHandler = () => {
    isForm ? setData(false) : setIsMenu(prev => !prev);
  };

  useEffect(() => {
    isMenu
      ? window.document.body.classList.add('modal-open')
      : window.document.body.classList.remove('modal-open');

    return () => {
      window.document.body.classList.remove('modal-open');
    };
  }, [isMenu]);

  function closeModal() {
    setIsMenu(false);
  }
  Modal.setAppElement('#yourAppElement');
  // --- / - ---
  const imgSrcLogo = isForm
    ? '/logo-white.svg'
    : isMenu
    ? '/logo.svg'
    : // : isWhite
    isHeaderWhite
    ? '/logo-white.svg'
    : '/logo.svg';

  const imgSrc = isForm
    ? '/close-white-40.svg'
    : isMenu
    ? '/close-black-40.svg'
    : // : isWhite
    isHeaderWhite
    ? '/menu-hover-black.png'
    : '/menu-black-40.svg';

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
          <div className={styles.imageBox}>
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
          <Image src={imgSrc} alt="menu" width={40} height={40} priority />
        </div>
      </div>
    </>
  );
};

export default HeaderSmall;
