"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import FooterAccordion from '../FooterAccordion/FooterAccordion';

const Footer = () => {
  const mettaMuseLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/stories', label: 'Stories' },
    { href: '/artisans', label: 'Artisans' },
    { href: '/boutiques', label: 'Boutiques' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/compliance', label: 'EU Compliances Docs' },
  ];

  const quickLinks = [
    { href: '/orders', label: 'Orders & Shipping' },
    { href: '/join', label: 'Join/Login as a Seller' },
    { href: '/payment', label: 'Payment & Pricing' },
    { href: '/returns', label: 'Return & Refunds' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.newsletterSection}>
            <h3 className={styles.footerTitle}>Be the first to know</h3>
            <p className={styles.smallScreenOnlyText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
            <p className={styles.largeScreenOnlyText}>Sign up for updates from mettā muse.</p>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="Enter your e-mail..." />
              <button type="submit">Subscribe</button>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <h3 className={styles.footerTitle}>Call Us</h3>
           
            <p>+44 221 133 5360</p>
            <p><Link href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</Link></p>
      
            <h3 className={styles.footerTitle}>Currency</h3>
            <div className={styles.currencySelector}>
              <Image src="/Usa-flag.svg" alt="USA Flag" width={24} height={24} />
              <span>USD</span>
            </div>
            <p className={styles.currencyNote}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          {/* Desktop */}
          <div className={styles.desktopLinks}>
            <div className={styles.linkColumn}>
              <h3 className={styles.footerTitle}>mettā muse</h3>
              <ul>
                {mettaMuseLinks.map(link => (
                  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h3 className={styles.footerTitle}>QUICK LINKS</h3>
              <ul>
                {quickLinks.map(link => (
                  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h3 className={styles.footerTitle}>FOLLOW US</h3>
              <div className={styles.socialIcons}>
                <a href="#"><Image src="/Instagram.svg" alt="Instagram" width={24} height={24} /></a>
                <a href="#"><Image src="/LinkedIn.svg" alt="LinkedIn" width={24} height={24} /></a>
              </div>
              <h3 className={styles.footerTitle} style={{marginTop: '2rem'}}>mettā muse ACCEPTS</h3>
              <div className={styles.paymentIcons}>
                <Image src="/GooglePay.svg" alt="Google Pay" width={50} height={32} />
                <Image src="/MasterCard.svg" alt="Mastercard" width={50} height={32} />
                <Image src="/PayPal.svg" alt="PayPal" width={50} height={32} />
                <Image src="/Amex.svg" alt="American Express" width={50} height={32} />
                <Image src="/ApplePay.svg" alt="Apple Pay" width={50} height={32} />
                <Image src="/ShopPay.svg" alt="ShopPay" width={50} height={32} />
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className={styles.mobileLinks}>
            <FooterAccordion title="mettā muse">
              <ul>
                {mettaMuseLinks.map(link => (
                  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </FooterAccordion>
            <FooterAccordion title="Quick Links">
              <ul>
                {quickLinks.map(link => (
                  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </FooterAccordion>
            <FooterAccordion title="Follow Us">
              <div className={styles.socialIcons}>
                <a href="#"><Image src="/Instagram.svg" alt="Instagram" width={24} height={24} /></a>
                <a href="#"><Image src="/LinkedIn.svg" alt="LinkedIn" width={24} height={24} /></a>
              </div>
            </FooterAccordion>
            <h3 className={styles.footerTitle} style={{marginTop: '1rem'}}>mettā muse ACCEPTS</h3>
            <div className={styles.paymentIcons}>
            <Image src="/GooglePay.svg" alt="Google Pay" width={50} height={30} />
                <Image src="/MasterCard.svg" alt="Mastercard" width={50} height={30} />
                <Image src="/PayPal.svg" alt="PayPal" width={50} height={30} />
                <Image src="/Amex.svg" alt="American Express" width={50} height={30} />
                <Image src="/ApplePay.svg" alt="Apple Pay" width={50} height={30} />
                <Image src="/ShopPay.svg" alt="ShopPay" width={50} height={30} />
            </div>
          </div>
        </div>

        <p className={styles.copyright}>Copyright  2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
