"use client";
import React, { useState } from 'react';
import styles from './FilterSidebar.module.css';
import AccordionItem from '../SidebarAccordian/SidebarAccordian';

export default function FilterSidebar({ onClose }) {
    const [openAccordion, setOpenAccordion] = useState('idealFor');

    const handleToggle = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const filterData = [
        { id: 'idealFor', title: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids'] },
        { id: 'occasion', title: 'OCCASION', options: ['Casual', 'Formal', 'Party', 'Wedding'] },
        { id: 'work', title: 'WORK', options: ['Office', 'Remote', 'Field'] },
        { id: 'fabric', title: 'FABRIC', options: ['Cotton', 'Linen', 'Polyester'] },
        { id: 'segment', title: 'SEGMENT', options: ['Budget', 'Mid-Range', 'Luxury'] },
        { id: 'suitableFor', title: 'SUITABLE FOR', options: ['Teens', 'Adults', 'Seniors'] },
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <h4>FILTER</h4>
                <button onClick={onClose} className={styles.closeButton}>×</button>
            </div>
            <div className={styles.sidebarContent}>
                <div className={styles.customizable}>
                    <input type="checkbox" id="customizable" />
                    <label htmlFor="customizable">CUSTOMIZABLE</label>
                </div>

                {filterData.map(filter => (
                    <AccordionItem
                        key={filter.id}
                        title={filter.title}
                        options={filter.options}
                        isOpen={openAccordion === filter.id}
                        onToggle={() => handleToggle(filter.id)}
                    />
                ))}
            </div>
        </aside>
    );
}