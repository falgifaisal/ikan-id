import { ReactElement } from 'react';

function Product(): ReactElement {
  return (
    <div className="card border border-info">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">Ukuran: 20</p>
        <p className="card-text small text-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          {' '}
          PROBOLINGGO, JAWA TIMUR
        </p>
      </div>
      <div className="card-footer">Rp. 20.000</div>
    </div>
  );
}

export default Product;
