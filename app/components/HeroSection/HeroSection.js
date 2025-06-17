import React from 'react'
import styles from './HeroSection.module.css'
export default function HeroSection() {
  return (
    <section className={styles.hero}>
        <p className={styles.breadcrumps}>Home | Shop</p>
        <div className={styles.heroContent}>
            <h3>DISCOVER OUR PRODUCTS</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
    </section>
  )
}
