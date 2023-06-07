'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const MenuItem = ({
  title,
  closeModal,
}: {
  title: string;
  closeModal: () => void;
}) => {
  return (
    <li className={styles.menuListItem}>
      <div>
        <div>
          <Link href={`/#${title}`} onClick={closeModal}>
            <span>{title}</span>
            <Image src="/line_65.svg" alt="Line" width={40} height={3} />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
