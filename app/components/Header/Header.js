"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import Menu from '../../../public/Menu.svg';
import Logo from '../../../public/Logo.svg';
import Search from '../../../public/Search.svg';
import Wishlist from '../../../public/Wishlist.svg';
import Lock from '../../../public/Lock.svg';
import Hamburger from '../../../public/Hamburger.svg';
import Language from '../../../public/Language.svg';
import { useState } from 'react';
const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};
  const topBarItems = [
    {
      icon: Menu,
      text: "Lorem ipsum dolor"
    },
    {
      icon: Menu,
      text: "Lorem ipsum dolor"
    },
    {
      icon: Menu,
      text: "Lorem ipsum dolor"
    }
  ];
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        {topBarItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.topBarItem} ${index > 0 ? styles.hideOnMobile : ''}`}
          >
            <Image src={Menu} alt="Menu icon" width={16} height={16} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className={styles.mainHeader}>
      <div className={styles.logoContainer}>
        <button type="button" onClick={toggleMenu} className={styles.hamburgerButton}>
          <Image src={Hamburger} alt="Hamburger menu icon" width={20} height={20} />
        </button>
        <Image src={Logo} alt="Company Logo" width={20} height={20} />
      </div>
      <h2>LOGO</h2>
      <div className={styles.searchContainer}>
        <Image src={Search} alt="Search icon" width={20} height={20} />
        <Image src={Wishlist} alt="Wishlist icon" width={20} height={20} />
        <Image src={Lock} alt="Cart icon" width={20} height={20} />
        <Image 
    src={Language} 
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
