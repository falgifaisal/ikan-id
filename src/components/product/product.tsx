/* eslint-disable react/destructuring-assignment */
import {
  ReactElement, useState, useRef, useEffect,
} from 'react';

import { defaultCurrency } from 'constants/common';
import { formatStringUcFirst, formatNumber } from 'utils/common';
import { formatDate } from 'utils/date';
import {
  queryClient,
  usePostProducts,
  useUpdateProducts,
  useDeleteProducts,
} from 'utils/hooks';

interface ProductProps {
  isAdmin: any;
  isAdd: any;
  uuid: string;
  komoditas: string;
  size: string;
  price: string;
  timestamp: string;
  [key: string]: any;
}

function Product(props: ProductProps): ReactElement {
  const {
    isAdmin, isAdd, uuid, komoditas, size, price, timestamp,
  } = props;
  const commodity: string = komoditas;
  // eslint-disable-next-line react/destructuring-assignment
  // eslint-disable-next-line react/prop-types
  const province: string = props.area_provinsi;
  // eslint-disable-next-line react/destructuring-assignment
  // eslint-disable-next-line react/prop-types
  const city: string = props.area_kota;
  const currency: string = defaultCurrency;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [payloads, setPayloads] = useState<any>({
    commodity: komoditas,
    size,
    price,
    province,
    city,
  });
  const params: any = uuid ? `?uuid=${uuid}` : '';
  const paramsPayloads: any = { params, payloads };
  const mutationPost = usePostProducts(payloads);
  const mutationUpdate = useUpdateProducts(paramsPayloads);
  const mutationDelete = useDeleteProducts(params);
  const commodityRef = useRef<any>(null);

  useEffect(() => {
    if (isEdit && commodityRef?.current) {
      commodityRef.current.focus();
    }
  }, [isEdit]);

  function handleCancel() {
    setPayloads({
      commodity: komoditas,
      size,
      price,
      province,
      city,
    });

    if (!isAdd) {
      setIsEdit(!isEdit);
    }

    if (isAdd && commodityRef?.current) {
      commodityRef.current.focus();
    }
  }

  function handleSave() {
    mutationPost.mutate(payloads, {
      onError: (error: any) => {
        alert(
          `Gagal menyimpan data. error: ${
            error || 'terjadi kesalahan sistem!'
          }`,
        );

        if (commodityRef?.current) {
          commodityRef.current.focus();
        }
      },
      onSuccess: (data: any) => {
        if (data?.isSuccess) {
          queryClient.getQueryState('products');
          alert('Sukses menyimpan data');
          setPayloads({
            commodity: komoditas,
            size,
            price,
            province,
            city,
          });
        } else {
          alert(
            `Gagal menyimpan data. error: ${
              data?.message || 'terjadi kesalahan sistem!'
            }`,
          );
        }

        if (commodityRef?.current) {
          commodityRef.current.focus();
        }
      },
    });
  }

  function handleUpdate() {
    mutationUpdate.mutate(paramsPayloads, {
      onError: (error: any) => {
        alert(
          `Gagal memperbarui data. error: ${
            error || 'terjadi kesalahan sistem!'
          }`,
        );

        if (commodityRef?.current) {
          commodityRef.current.focus();
        }
      },
      onSuccess: (data: any) => {
        if (data?.isSuccess) {
          queryClient.getQueryState('products');
          alert('Sukses memperbarui data');
          setIsEdit(false);
        } else {
          alert(
            `Gagal memperbarui data. error: ${
              data?.message || 'terjadi kesalahan sistem!'
            }`,
          );
        }

        if (commodityRef?.current) {
          commodityRef.current.focus();
        }
      },
    });
  }

  function handleDelete() {
    mutationDelete.mutate(params, {
      onError: (error: any) => {
        alert(
          `Gagal menghapus data. error: ${
            error || 'terjadi kesalahan sistem!'
          }`,
        );
      },
      onSuccess: (data: any) => {
        if (data?.isSuccess) {
          queryClient.getQueryState('products');
          alert('Sukses menghapus data');
        } else {
          alert(
            `Gagal menghapus data. error: ${
              data?.message || 'terjadi kesalahan sistem!'
            }`,
          );
        }
      },
    });
  }

  return (
    <div className="card border border-info">
      <div className="card-body">
        {isAdmin && (isAdd || isEdit) ? (
          <>
            <input
              ref={commodityRef}
              name="commodity"
              className={`form-control form-control-sm mb-2 ${
                payloads.commodity ? 'is-valid' : 'is-invalid'
              }`}
              placeholder="Isi komoditas"
              value={payloads.commodity || ''}
              onChange={(e) => setPayloads({ ...payloads, commodity: e.target.value })}
            />
            <input
              className={`form-control form-control-sm mb-2 ${
                payloads.size ? 'is-valid' : 'is-invalid'
              }`}
              name="size"
              placeholder="Isi ukuran"
              value={payloads.size || ''}
              onChange={(e) => setPayloads({ ...payloads, size: e.target.value })}
            />
            <input
              className={`form-control form-control-sm mb-2 ${
                payloads.province ? 'is-valid' : 'is-invalid'
              }`}
              placeholder="Isi provinsi"
              value={payloads.province || ''}
              onChange={(e) => setPayloads({ ...payloads, province: e.target.value })}
            />
            <input
              className={`form-control form-control-sm ${
                payloads.city ? 'is-valid' : 'is-invalid'
              }`}
              name="city"
              placeholder="Isi kota"
              value={payloads.city || ''}
              onChange={(e) => setPayloads({ ...payloads, city: e.target.value })}
            />
          </>
        ) : (
          <>
            <h5 className="card-title">{commodity || '-'}</h5>
            <p className="card-text">
              Ukuran:
              {` ${size}` || '-'}
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
          </>
        )}
      </div>
      <div className="card-footer">
        <div className="d-flex flex-column">
          {isAdmin && (isAdd || isEdit) ? (
            <input
              className={`form-control form-control-sm mb-2 ${
                payloads.price ? 'is-valid' : 'is-invalid'
              }`}
              name="price"
              placeholder="Isi harga"
              value={payloads.price || ''}
              onChange={(e) => setPayloads({ ...payloads, price: e.target.value })}
            />
          ) : (
            <p className="card-text">
              {`${currency} ${formatNumber(price || 0)}`}
            </p>
          )}
          <div className="d-flex">
            {isAdmin && (
              <>
                <a
                  className={`btn btn-sm btn-outline-info mr-2 ${
                    mutationPost.isLoading
                    || mutationUpdate.isLoading
                    || mutationDelete.isLoading
                      ? 'disabled'
                      : ''
                  }`}
                  title={isEdit ? 'Batal edit data' : 'Edit data'}
                  onClick={handleCancel}
                >
                  {isEdit || isAdd ? (
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
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  )}
                </a>
                <a
                  className={`btn btn-sm btn-outline-info ${
                    mutationPost.isLoading
                    || mutationUpdate.isLoading
                    || mutationDelete.isLoading
                      ? 'disabled'
                      : ''
                  }`}
                  title={isEdit ? 'Simpan data' : 'Delete data'}
                  onClick={
                    !isEdit && !isAdd
                      ? handleDelete
                      : isAdd
                        ? handleSave
                        : handleUpdate
                  }
                >
                  {mutationPost.isLoading
                  || mutationUpdate.isLoading
                  || mutationDelete.isLoading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-hourglass-top"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 1 0 0-1h-1v-1a4.5 4.5 0 0 0-2.557-4.06c-.29-.139-.443-.377-.443-.59v-.7c0-.213.154-.451.443-.59A4.5 4.5 0 0 0 12.5 3V2h1a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h1v1a4.5 4.5 0 0 0 2.557 4.06c.29.139.443.377.443.59v.7c0 .213-.154.451-.443.59A4.5 4.5 0 0 0 3.5 13v1h-1a.5.5 0 0 0-.5.5zm2.5-.5v-1a3.5 3.5 0 0 1 1.989-3.158c.533-.256 1.011-.79 1.011-1.491v-.702s.18.101.5.101.5-.1.5-.1v.7c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13v1h-7z" />
                    </svg>
                    ) : isEdit || isAdd ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    )}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
