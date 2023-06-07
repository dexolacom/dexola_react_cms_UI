'use client';

import styles from './styles.module.css';
import HeaderSmall from '../../components/HeaderSmall/headerSmall';

const VideoBG = ({
  opacity,
  isWhite = false,
}: {
  opacity: number;
  isWhite?: boolean;
}) => {
  return (
    <>
      <figure className={styles.videoWrapper}>
        <video
          autoPlay
          muted
          loop
          poster="/Dexola_BG_1.png"
          playsInline
          style={{ opacity }}>
          <source
            src="/backgr_video.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'></source>
          Your browser does not support the video tag.
        </video>
      </figure>
      {/* <HeaderSmall isWhite={isWhite} /> */}
    </>
  );
};

export default VideoBG;
