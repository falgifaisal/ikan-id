import { ReactElement, memo } from 'react';

import { useAppContext } from 'context/app-context';

function Hero(): ReactElement {
  const { globalState } = useAppContext();
  const { theme } = globalState;

  return (
    <>
      <div
        className={`card mb-5 border-info-10 ${
          theme === 'dark'
            ? 'bg-dark text-light box-shadow-light-3'
            : 'bg-light text-dark box-shadow-dark-3'
        }`}
      >
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

export default memo(Hero);
