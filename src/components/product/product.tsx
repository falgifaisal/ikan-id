/* eslint-disable react/destructuring-assignment */
import { ReactElement } from 'react';

import { defaultCurrency } from 'constants/common';
import { formatStringUcFirst, formatNumber } from 'utils/common';
import { formatDate } from 'utils/date';

interface ProductProps {
  komoditas: string;
  size: string;
  price: string;
  timestamp: string;
  [key: string]: string;
}

function Product(props: ProductProps): ReactElement {
  const {
    komoditas, size, price, timestamp,
  } = props;
  const commodity: string = komoditas;
  // eslint-disable-next-line react/destructuring-assignment
  // eslint-disable-next-line react/prop-types
  const province: string = props.area_provinsi;
  // eslint-disable-next-line react/destructuring-assignment
  // eslint-disable-next-line react/prop-types
  const city: string = props.area_kota;
  const currency: string = defaultCurrency;
  return (
    <div className="card border border-info">
      <div className="card-body">
        <h5 className="card-title">{commodity || '-'}</h5>
        <p className="card-text">
          Ukuran:
          {size || '-'}
        </p>
        <p className="small text-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-calendar-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          {' '}
          {formatDate(timestamp, 'dd MMM yyyy')}
        </p>
        <p className="small text-muted">
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
          {`${formatStringUcFirst(city)}, ${formatStringUcFirst(province)}`}
        </p>
      </div>
      <div className="card-footer">
        <p className="card-text">{`${currency} ${formatNumber(price || 0)}`}</p>
      </div>
    </div>
  );
}

export default Product;
