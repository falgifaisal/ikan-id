import {
  ReactElement, useState, useRef, memo,
} from 'react';

import { useAppContext } from 'context/app-context';

function Search(): ReactElement {
  const { globalState, setState } = useAppContext();
  const { commodity, theme } = globalState;
  const [search, setSearch] = useState(commodity || '');
  const searchRef = useRef<any>(null);

  function handleChange(e: any) {
    setSearch(e.target.value);
  }

  function handleKeyPress(e: any) {
    if (e.key === 'Enter') {
      setState({ commodity: e.target.value });
    }
  }

  function handleClick() {
    setState({ commodity: search });
  }

  function handleCancel() {
    setState({ commodity: '' });
    setSearch('');

    if (searchRef?.current) {
      searchRef.current.focus();
    }
  }

  return (
    <>
      <div
        className={`card mb-5 ${
          theme === 'dark'
            ? 'bg-dark text-light box-shadow-light-1'
            : 'bg-light text-dark box-shadow-dark-1'
        }`}
      >
        <div className="card-body">
          <h5 className="card-title">Temukan Informasi Harga Ikan-Ikan Terupdate di Indonesia</h5>
          <hr />
          <div className="d-flex">
            <div className="input-group">
              <input
                ref={searchRef}
                type="text"
                className="form-control form-control-sm"
                name="search"
                placeholder="Cari komoditas Ikan-Ikan Terupdate"
                value={search}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-sm btn-outline-danger"
                  type="button"
                  onClick={handleCancel}
                  title="Hapus data"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                </button>
                <button
                  className="btn btn-sm btn-outline-info"
                  type="button"
                  onClick={handleClick}
                  title="Cari data"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Search);
