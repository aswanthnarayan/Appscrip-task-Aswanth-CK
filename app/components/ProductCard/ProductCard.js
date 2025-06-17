import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';
import Wishlist from '../../../public/Wishlist.svg';

const ProductCard = ({ product }) => {
  const { id, title, image } = product || {};
  
  const truncateTitle = (title) => {
    if (!title) return '';
    const words = title.split(' ');
    if (words.length <= 2) return title;
    return `${words[0]} ${words[1]}...`;
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.productImage}
        />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardInfo}>
          <div className={styles.productNameContainer}>
            <h3 className={styles.productName} title={title}>
              {truncateTitle(title)}
            </h3>
            <button className={styles.wishlistButton}>
            <svg width="16" height="16" viewBox="0 0 17 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91398 13.8731C8.68732 13.9531 8.31398 13.9531 8.08732 13.8731C6.15398 13.2131 1.83398 10.4597 1.83398 5.79307C1.83398 3.73307 3.49398 2.06641 5.54065 2.06641C6.75398 2.06641 7.82732 2.65307 8.50065 3.55974C9.17398 2.65307 10.254 2.06641 11.4607 2.06641C13.5073 2.06641 15.1673 3.73307 15.1673 5.79307C15.1673 10.4597 10.8473 13.2131 8.91398 13.8731Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              {/* <Image src={Wishlist} alt="Add to wishlist" width={16} height={16} /> */}
            </button>
          </div>
          <p className={styles.loginText}>
            <span>Sign in</span> or Create an account to see pricing
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;