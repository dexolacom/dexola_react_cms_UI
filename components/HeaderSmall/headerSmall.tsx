"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useMyContext } from '../../context/AppContext';
import styles from "./styles.module.css";
import styles1 from "../ContactUs/styles.module.css";
// --- - ---
import Modal from "react-modal";
import Menu from "../Menu/Menu";

const HeaderSmall = ({ isWhite }: { isWhite: boolean }) => {
  // const { isFormOpen, setData, isHoveredLink } = useMyContext();
  // const isHeaderWhite = isFormOpen ? isFormOpen : isHoveredLink;
  const isFormOpen = false;
  const isHeaderWhite = isFormOpen ? isFormOpen : isWhite;

  const [isMenu, setIsMenu] = useState<boolean>(false);

  const menuHandler = () => {
    // isFormOpen ? setData(false) : setIsMenu((prev) => !prev);
    setIsMenu((prev) => !prev);
  };

  useEffect(() => {
    isMenu
      ? window.document.body.classList.add("modal-open")
      : window.document.body.classList.remove("modal-open");

    return () => {
      window.document.body.classList.remove("modal-open");
    };
  }, [isMenu]);

  function closeModal() {
    setIsMenu(false);
  }
  Modal.setAppElement("#yourAppElement");
  // --- / - ---
  const imgSrcLogo = isFormOpen
    ? "/logo-white.svg"
    : isMenu
    ? "/logo.svg"
    : isHeaderWhite
    ? "/logo-white.svg"
    : "/logo.svg";

  const imgSrc = isFormOpen
    ? "/close-white-40.svg"
    : isMenu
    ? "/close-black-40.svg"
    : isHeaderWhite
    ? "/menu-white-40.svg"
    : "/menu-black-40.svg";

  return (
    <>
      <div>
        <Modal
          isOpen={isMenu}
          onRequestClose={closeModal}
          className={styles.contentClass}
          contentLabel="Main Menu"
          shouldCloseOnEsc={true}
          preventScroll={true}
          overlayClassName={styles1.overlayClass}
        >
          <Menu closeModal={closeModal} />
        </Modal>
      </div>

      <div className={styles.topBox} id="yourAppElement">
        <Link href={"/"}>
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
          <Image
            src={imgSrc}
            // src={isHoveredLink ? '/menu-hover-white.png' : imgSrc}
            alt="menu"
            width={40}
            height={40}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default HeaderSmall;
