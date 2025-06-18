"use client";
import React from 'react';
import styles from './FilterToggle.module.css';
import SortPopover from '../SortPopover/SortPopover';

export default function FilterToggle({ onFilterClick, isSidebarOpen }) {
    return (
        <div className={styles.filterToggle}>
            <div className={styles.filterToggleLeft}>
                <div className={styles.filterToggleLargeScreen}>
                    <p className={styles.itemCount}>3245 ITEMS</p>
                    <button type="button" className={styles.showFilter} onClick={onFilterClick}>
                        <span className={`${styles.chevron} ${isSidebarOpen ? styles.rotated : ''}`}>›</span>
                        <span className={styles.filterText}>
                            {isSidebarOpen ? 'HIDE FILTER' : 'SHOW FILTER'}
                        </span>
                    </button>
                </div>
                <button type="button" className={styles.mobileFilter} onClick={onFilterClick}>FILTER</button>
            </div>
            <div className={styles.filterToggleRight}>
                <SortPopover />
            </div>
        </div>
    );
}