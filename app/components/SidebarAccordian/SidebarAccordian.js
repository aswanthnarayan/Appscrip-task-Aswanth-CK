"use client";
import React, { useState } from 'react';
import styles from './SidebarAccordian.module.css';

export default function AccordionItem({ title, options, isOpen, onToggle }) {
    const [selected, setSelected] = useState([]);

    const handleSelect = (option) => {
        setSelected(prev =>
            prev.includes(option)
                ? prev.filter(item => item !== option)
                : [...prev, option]
        );
    };

    const unselectAll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setSelected([]);
    };

    return (
        <div className={styles.accordionItem}>
            <button type="button" className={styles.accordionHeader} onClick={onToggle}>
                <div>
                    <h5 className={styles.title}>{title}</h5>
                    <p className={styles.subtitle}>All</p>
                </div>
                <span className={`${styles.arrow} ${isOpen ? styles.up : ''}`} />
            </button>
            {isOpen && (
                <div className={styles.accordionContent}>
                    <button type="button" className={styles.unselect} onClick={unselectAll}>
                        Unselect all
                    </button>
                    <ul className={styles.optionsList}>
                        {options.map(option => (
                            <li key={option}>
                                <input
                                    type="checkbox"
                                    id={`${title}-${option}`}
                                    checked={selected.includes(option)}
                                    onChange={() => handleSelect(option)}
                                />
                                <label htmlFor={`${title}-${option}`}>{option}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
