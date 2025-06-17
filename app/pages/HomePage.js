"use client";
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductCard from '../components/ProductCard/ProductCard';
import FilterToggle from '../components/FilterToggle/FilterToggle';
import FilterSidebar from '../components/FilterSidebar/FilterSidebar';
import styles from './HomePage.module.css';
import axios from 'axios';

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  console.log(products);
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
  }, []);

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
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

