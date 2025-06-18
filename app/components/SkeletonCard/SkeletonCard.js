import React from 'react';
import styles from './SkeletonCard.module.css';

const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.imageWrapper} />
      <div className={styles.cardBody}>
        <div className={styles.textLine} />
        <div className={`${styles.textLine} ${styles.short}`} />
      </div>
    </div>
  );
};

export default SkeletonCard;
