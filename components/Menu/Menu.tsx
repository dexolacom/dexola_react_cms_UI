'use client';

import VideoBG from '../VideoBG/VideoBG';
import MenuItem from './MenuItem';
import styles from './styles.module.css';

const Menu = () => {
  return (
    <div className={styles.menuWrapper}>
      <VideoBG opacity={0.6} />
      <ul>
        <MenuItem title={'About'} />
        <MenuItem title={'Services'} />
        <MenuItem title={'Cases'} />
        <MenuItem title={'Technology Stack'} />
        <MenuItem title={'Partnership'} />
        {/* <MenuItem title={'Contact Us'} /> */}
      </ul>
    </div>
  );
};

export default Menu;
