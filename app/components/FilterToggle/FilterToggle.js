"use client";
import React from 'react';
import styles from './FilterToggle.module.css';
import DownArrow from '../../../public/DownArrow.svg';
import RightArrow from '../../../public/RightArrow.svg';
import Image from 'next/image';

export default function FilterToggle({ onFilterClick ,isSidebarOpen}) {
    return (
        <div className={styles.filterToggle}>
            <div className={styles.filterToggleLeft}>
                <div className={styles.filterToggleLargeScreen}>
                    <h6>1125 ITEMS</h6>
                    <h6 className={styles.showFilter} onClick={onFilterClick}>
                        <Image src={RightArrow} alt="rightArrow" width={16} height={16} />
                        {isSidebarOpen ? 'HIDE FILTER' : 'SHOW FILTER'}
                    </h6>
                </div>
                <h6 className={styles.mobileFilter} onClick={onFilterClick}>FILTER</h6>
            </div>
            <div className={styles.filterToggleRight}>
                <h6>RECOMMENDED <Image src={DownArrow} alt="downArrow" width={16} height={16} /></h6>
            </div>
        </div>
    );
}