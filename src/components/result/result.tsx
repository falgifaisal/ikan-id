import { ReactElement } from 'react';

import { useAppContext } from 'context/app-context';
// import { defaultLimit } from 'constants/common';
import Product from 'components/product';
// import Pagination from 'components/pagination';
import { useProducts } from 'utils/hooks';

function Result(): ReactElement {
  const { globalState } = useAppContext();
  const {
    commodity, province, city, size,
  } = globalState;
  // const paging: number = page || 1;
  // const offset: number = page ? ((paging * defaultLimit) - defaultLimit) : 0;
  const params: string = `?commodity=${commodity || ''}&province=${
    province || ''
  }&city=${city || ''}&size=${size || ''}`;
  const {
    isLoading, isError, error, data,
  } = useProducts(params);
  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="spinner-grow hw-10 text-info" role="status" />
        </div>
      )}
      {isError && (
        <div className="d-flex justify-content-center align-items-center mb-4">
          <p className="h3 text-danger">
            {error?.message || 'Something problem!'}
          </p>
        </div>
      )}
      {data?.count > 0 && (
        <h5>
          Ditemukan harga komoditas ikan:
          {`${data.data.length} Data`}
        </h5>
      )}
      {data?.count === 0 && <h5>Data tidak ditemukan</h5>}
      <div className="row mb-4">
        {data?.count > 0
          && data?.data?.map((val: any) => (
            <div
              key={`${val.uuid}-${val.komoditas}-${val.province}-${val.city}`}
              className="col-sm-3 my-4"
            >
              <Product {...val} />
            </div>
          ))}
      </div>
      {/* <Pagination /> */}
    </>
  );
}

export default Result;
