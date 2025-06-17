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
const Header = () => {
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
            <Image src={Menu} alt="icon" width={16} height={16} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className={styles.mainHeader}>
      <div className={styles.logoContainer}>
        <Image src={Hamburger} alt="icohamburgerIcon" width={20} height={20} className={styles.hamburgerIcon} />
        <Image src={Logo} alt="logo" width={20} height={20} />
      </div>
      <h2>LOGO</h2>
      <div className={styles.searchContainer}>
        <Image src={Search} alt="search" width={20} height={20} />
        <Image src={Wishlist} alt="wishlist" width={20} height={20} />
        <Image src={Lock} alt="lock" width={20} height={20} />
        <Image 
    src={Language} 
    alt="language" 
    width={20} 
    height={20} 
    className={styles.languageIcon}
  />
      </div>
      </div>

      <nav className={styles.mainNav}>
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
