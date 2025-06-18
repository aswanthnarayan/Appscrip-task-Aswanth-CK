"use client";
import React, { useState } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import ProductCard from '../ProductCard/ProductCard';
import FilterToggle from '../FilterToggle/FilterToggle';
import FilterSidebar from '../FilterSidebar/FilterSidebar';
import styles from './HomePage.module.css';

export default function HomePage({ products }) {
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
          <div className={styles.productGrid}>
            {products && products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className={styles.errorContainer}>
                <h2>Oops! Something went wrong.</h2>
                <p>We couldn't load the products at the moment. Please try again later.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
