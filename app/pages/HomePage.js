"use client";
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductCard from '../components/ProductCard/ProductCard';
import FilterToggle from '../components/FilterToggle/FilterToggle';
import FilterSidebar from '../components/FilterSidebar/FilterSidebar';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <HeroSection />
      <FilterToggle onFilterClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className={styles.mainContent}>
        {isSidebarOpen && (
          <div className={styles.sidebarContainer}>
            <FilterSidebar onClose={toggleSidebar} />
          </div>
        )}
        <div className={`${styles.contentArea} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
          <ProductCard />
        </div>
      </div>
    </div>
  );
}