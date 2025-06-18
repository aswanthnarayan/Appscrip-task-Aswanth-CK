"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useState } from 'react';
const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`${styles.topBarItem} ${index > 0 ? styles.hideOnMobile : ''}`}
          >
            <Image src="/Menu.svg" alt="Menu icon" width={16} height={16} />
            <span>Lorem ipsum dolor</span>
          </div>
        ))}
      </div>

      <div className={styles.mainHeader}>
      <div className={styles.logoContainer}>
        <button type="button" onClick={toggleMenu} className={styles.hamburgerButton}>
          <Image src="/Hamburger.svg" alt="Hamburger menu icon" width={20} height={20} />
        </button>
        <Image src="/Logo.svg" alt="Company Logo" width={20} height={20} />
      </div>
      <h2>LOGO</h2>
      <div className={styles.searchContainer}>
        <Image src="/Search.svg" alt="Search icon" width={20} height={20} />
        <Image src="/Wishlist.svg" alt="Wishlist icon" width={20} height={20} />
        <Image src="/Lock.svg" alt="Cart icon" width={20} height={20} />
        <Image 
    src="/Language.svg" 
    alt="Language selection icon" 
    width={20} 
    height={20} 
    className={styles.languageIcon}
  />
      </div>
      </div>

<nav className={`${styles.mainNav} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
  <Link href="/shop">SHOP</Link>
  <Link href="/skills">SKILLS</Link>
  <Link href="/stories">STORIES</Link>
  <Link href="/about">ABOUT</Link>
  <Link href="/contact">CONTACT US</Link>
</nav>
    </header>
  );
};

export default Header;
