import { ReactElement } from 'react';

// import styles from './filter-sort.module.scss';

function Filter(): ReactElement {
  return (
    <>
      <div className="card mb-5 shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4">
              <h5 className="card-title">Urutkan</h5>
              <hr />
              <div className="d-flex flex-column">
                <select
                  className="form-select form-select-sm mb-4"
                  aria-label="Default select example"
                >
                  <option value="1" selected>
                    Terbaru
                  </option>
                  <option value="2">Harga tertinggi</option>
                  <option value="3">Harga termurah</option>
                </select>
              </div>
            </div>
            <div className="col-sm-8">
              <h5 className="card-title">Filter</h5>
              <hr />
              <div className="d-flex flex-column">
                <h5 className="card-title">Lokasi</h5>
                <select
                  className="form-select form-select-sm mb-4"
                  aria-label="Default select example"
                >
                  <option selected>Buka Cari Provinsi</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select
                  className="form-select form-select-sm mb-4"
                  aria-label="Default select example"
                >
                  <option selected>Buka Cari Kota/Kabupaten</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <h5 className="card-title">Ukuran</h5>
                <select
                  className="form-select form-select-sm mb-4"
                  aria-label="Default select example"
                >
                  <option selected>Buka Cari Ukuran</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
