import { ReactElement } from 'react';

import { useAppContext } from 'context/app-context';
// import { defaultLimit } from 'constants/common';
import Product from 'components/product';
// import Pagination from 'components/pagination';
import { useQueryProducts } from 'utils/hooks';

function Result(): ReactElement {
  const { globalState } = useAppContext();
  const {
    commodity, province, city, size, sort, isAdmin,
  } = globalState;
  // const paging: number = page || 1;
  // const offset: number = page ? ((paging * defaultLimit) - defaultLimit) : 0;
  const params: string = `?commodity=${commodity || ''}&province=${
    province || ''
  }&city=${city || ''}&size=${size || ''}&sort=${sort || ''}`;
  const {
    isLoading, isError, error, data,
  } = useQueryProducts(params);
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

      {isAdmin && (
        <div className="mb-4">
          <h5>Tambah data</h5>
          <Product
            isAdmin={!!isAdmin}
            isAdd
            uuid=""
            komoditas=""
            province=""
            city=""
            size=""
            price=""
            timestamp=""
          />
        </div>
      )}

      {data?.count > 0 && (
        <h5>
          Ditemukan harga komoditas ikan:
          {` ${data.data.length} Data`}
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
              <Product isAdmin={!!isAdmin} isAdd={false} {...val} />
            </div>
          ))}
      </div>
      {/* <Pagination /> */}
    </>
  );
}

export default Result;
