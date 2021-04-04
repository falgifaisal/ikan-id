import { ReactElement } from 'react';

import styles from './hero.module.scss';

function Hero(): ReactElement {
  return (
    <>
      <div className={`${styles.customCard} card mb-5`}>
        <div className="card-body">
          <h2 className="card-title">Harga Ikan Indonesia</h2>
          <p className="card-text">
            Berikut adalah kumpulan harga ikan di Indonesia menurut data
            {' '}
            <a
              href="https://efishery.com/"
              target="_blank"
              title="halaman resmi eFishery"
              rel="noopener noreferrer"
            >
              eFishery
            </a>
          </p>
          <footer className="blockquote-footer">
            Noted: data bersifat dummy
            {' '}
            <cite title="noted-desc">(bukan sumber sebenarnya)</cite>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Hero;
