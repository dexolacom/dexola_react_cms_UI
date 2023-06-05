'use client';

import VideoBG from '../VideoBG/VideoBG';
import MenuItem from './MenuItem';
import styles from './styles.module.css';

const MENU_TITLE: string[] = [
  'About',
  'Services',
  'Cases',
  'Technology Stack',
  'Partnership',
];

const Menu = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className={styles.menuWrapper}>
      <VideoBG opacity={0.6} />
      <ul>
        {MENU_TITLE &&
          MENU_TITLE.length > 0 &&
          MENU_TITLE.map(el => (
            <MenuItem title={el} closeModal={closeModal} key={el} />
          ))}
      </ul>
    </div>
  );
};

export default Menu;
