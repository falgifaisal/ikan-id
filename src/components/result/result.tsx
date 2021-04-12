import { ReactElement, memo } from 'react';

import { useAppContext } from 'context/app-context';
// import { defaultLimit } from 'constants/common';
import Product from 'components/product';
// import Pagination from 'components/pagination';
import { useQueryProducts } from 'utils/hooks';

function Result(): ReactElement {
  const { globalState } = useAppContext();
  const {
    commodity, province, city, size, sort, isAdmin, theme,
  } = globalState;
  // const paging: number = page || 1;
  // const offset: number = page ? ((paging * defaultLimit) - defaultLimit) : 0;
  const params: string = `?commodity=${commodity || ''}&province=${
    province || ''
  }&city=${city || ''}&size=${size || ''}&sort=${sort || ''}`;
  const {
    isFetching, isLoading, isError, error, data,
  } = useQueryProducts(
    params,
  );

  return (
    <>
      {isAdmin && (
        <div className="py-4">
          <h5 className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
            Tambah data
          </h5>
          <Product
            isAdmin={!!isAdmin}
            theme={theme}
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

      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center py-4">
          <div className="spinner-grow hw-5 text-info" role="status" />
        </div>
      ) : isError ? (
        <div className="d-flex justify-content-center align-items-center py-4">
          <p className="h3 text-danger">
            {error?.message || 'Something problem!'}
          </p>
        </div>
      ) : (
        <>
          {isFetching ? (
            <div className="d-flex justify-content-center align-items-center py-4">
              <div className="spinner-grow hw-5 text-info" role="status" />
            </div>
          ) : (
            <div className="py-4">
              <h5
                className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}
              >
                {data?.count > 0
                  ? `Ditemukan hasil pencarian ikan: ${data.data.length} Data`
                  : 'Data tidak ditemukan'}
              </h5>
              <div className="row">
                {data?.data?.map((val: any) => (
                  <div
                    key={`${val.uuid}-${val.komoditas}-${val.province}-${val.city}`}
                    className="col-sm-3 my-4"
                  >
                    <Product
                      isAdmin={!!isAdmin}
                      theme={theme}
                      isAdd={false}
                      {...val}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
      {/* <Pagination /> */}
    </>
  );
}

export default memo(Result);
