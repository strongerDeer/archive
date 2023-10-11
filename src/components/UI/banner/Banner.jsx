'use client';
import { useState } from 'react';
import styles from './Banner.module.scss';
import BannerItem from './BannerItem';

export default function Banner() {
  const [pageNum, setPageNum] = useState(0);
  const bannerData = [{ title: 'A' }, { title: 'B' }, { title: 'C' }];
  const CONTROLL_ID = 'slide_ctrl';

  const changePage = (e) => {
    setPageNum(Number(e.target.value));
  };
  return (
    <section className={styles.bannerWrap}>
      <h2 className="a11y-hidden">Banner</h2>

      <ul
        id={CONTROLL_ID}
        className={styles.bannerList}
        aria-live="polite"
        style={{ transform: `translateX(${-100 * pageNum}vw)` }}>
        {bannerData.map((banner, index) => (
          <li key={index}>
            <BannerItem data={banner} />
          </li>
        ))}
      </ul>

      <ul className={styles.bannerPager}>
        {bannerData.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={pageNum === index ? styles.active : ''}
              onClick={changePage}
              value={index}
              data-slide-index={index}
              aria-controls={CONTROLL_ID}
              aria-current={pageNum === index ? true : false}
              aria-label={`배너${index + 1}`}>
              <span className="a11y-hidden">{`page ${index + 1}`}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
