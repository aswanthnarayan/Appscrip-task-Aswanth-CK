"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './SortPopover.module.css';

const SortPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('RECOMMENDED');
  const popoverRef = useRef(null);

  const options = [
    'RECOMMENDED',
    'NEWEST FIRST',
    'POPULAR',
    'PRICE : HIGH TO LOW',
    'PRICE : LOW TO HIGH'
  ];

  const togglePopover = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.popover} ref={popoverRef}>
      <button className={styles.popoverButton} onClick={togglePopover}>
        <span>{selectedOption}</span>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}></span>
      </button>
      {isOpen && (
        <ul className={styles.popoverMenu}>
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                className={`${styles.popoverMenuItem} ${selectedOption === option ? styles.selected : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {selectedOption === option && <span className={styles.checkmark}>✓</span>}
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortPopover;
