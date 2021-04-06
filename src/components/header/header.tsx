import { ReactElement } from 'react';
import Image from 'next/image';

import { useAppContext } from 'context/app-context';
import styles from './header.module.scss';

function Header(): ReactElement {
  const { globalState, setState } = useAppContext();
  const { isAdmin } = globalState;
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light fixed-top bg-light border-bottom border-dark">
        <div className="container">
          <a
            href="/"
            title="Home"
            className={`${styles.navbarBrand} navbar-brand rounded`}
          >
            <Image
              alt="Brand logo"
              src="/fish.png"
              width="50"
              height="32"
              priority
            />
          </a>
          <h1 className="text-info mb-0">Ikan-ID</h1>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item ${isAdmin ? 'active' : ''}`}>
                <a
                  className={`nav-link pointer ${isAdmin ? 'text-info' : ''}`}
                  title={`Ubah sebagai user ${isAdmin ? 'Biasa' : 'Admin'}`}
                  onClick={() => setState({ isAdmin: !isAdmin })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-check-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  {' '}
                  {isAdmin ? (
                    <span className="text-info small">Admin</span>
                  ) : (
                    ''
                  )}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/danangekal"
                  target="_blank"
                  title="source github"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
