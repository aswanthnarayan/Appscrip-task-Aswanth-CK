"use client";
import React from 'react';
import styles from './FilterToggle.module.css';
import SortPopover from '../SortPopover/SortPopover';

export default function FilterToggle({ onFilterClick, isSidebarOpen }) {
    return (
        <div className={styles.filterToggle}>
            <div className={styles.filterToggleLeft}>
                <div className={styles.filterToggleLargeScreen}>
                    <h6>1125 ITEMS</h6>
                    <h6 className={styles.showFilter} onClick={onFilterClick}>
                        <span className={`${styles.chevron} ${isSidebarOpen ? styles.rotated : ''}`}>›</span>
                        {isSidebarOpen ? 'HIDE FILTER' : 'SHOW FILTER'}
                    </h6>
                </div>
                <h6 className={styles.mobileFilter} onClick={onFilterClick}>FILTER</h6>
            </div>
            <div className={styles.filterToggleRight}>
                <SortPopover />
            </div>
        </div>
    );
}