"use client";

import React, { useState } from 'react';
import styles from './FooterAccordion.module.css';

const FooterAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={toggleAccordion}>
        <h3 className={styles.accordionTitle}>{title}</h3>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}></span>
      </button>
      {isOpen && (
        <div className={styles.accordionContent}>
          {children}
        </div>
      )}
    </div>
  );
};

export default FooterAccordion;
