import { ReactElement } from 'react';

import { useAppContext } from 'context/app-context';
import { useSizes } from 'utils/hooks';

function SelectProvince(): ReactElement {
  const {
    isLoading, isError, error, data,
  } = useSizes('');
  const { globalState, setState } = useAppContext();
  const { size } = globalState;
  return (
    <>
      <select
        className="form-select form-select-sm mb-4"
        value={size}
        onChange={(e) => setState({ size: e.target.value })}
      >
        {isLoading && (
          <option value="loading" disabled selected>
            Loading...
          </option>
        )}
        {isError && (
          <option value="error" disabled selected>
            {error?.message}
          </option>
        )}
        {data?.count > 0 ? (
          <option value="" selected>
            Pilih Ukuran
          </option>
        ) : (
          <option value="" disabled selected>
            Data tidak ditemukan
          </option>
        )}
        {data?.data?.length
          && data?.data?.map((val: any) => (
            <option key={val.size} value={val.sizes}>
              {val.size}
            </option>
          ))}
      </select>
    </>
  );
}

export default SelectProvince;
