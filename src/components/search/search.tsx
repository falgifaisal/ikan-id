import { ReactElement, useState } from 'react';

import { useAppContext } from 'context/app-context';

function Search(): ReactElement {
  const { globalState, setState } = useAppContext();
  const { commodity } = globalState;
  const [search, setSearch] = useState(commodity);

  function handleSubmit() {
    setState({ commodity: search });
  }

  return (
    <>
      <div className="card mb-5 shadow">
        <div className="card-body">
          <h5 className="card-title">Temukan Informasi Harga Ikan Indonesia</h5>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="d-flex">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cari komoditas ikan"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="btn btn-info"
                  type="submit"
                  id="button-search"
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
          </form>
        </div>
      </div>
    </>
  );
}

export default Search;
