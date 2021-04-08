import { ReactElement, memo } from 'react';

import { useAppContext } from 'context/app-context';
import { useQuerySizes } from 'utils/hooks';

function SelectProvince(): ReactElement {
  const {
    isFetching, isLoading, isError, error, data,
  } = useQuerySizes('');
  const { globalState, setState } = useAppContext();
  const { size } = globalState;

  return (
    <>
      <select
        className="form-select form-select-sm mb-4"
        name="selectSize"
        value={size || ''}
        onChange={(e) => setState({ size: e.target.value })}
      >
        {isLoading ? (
          <option value="" disabled>
            Loading...
          </option>
        ) : isError ? (
          <option value="" disabled>
            {error?.message}
          </option>
        ) : (
          <>
            <option value="" disabled={!!isFetching}>
              {isFetching
                ? 'Refreshing...'
                : data?.count > 0
                  ? 'Pilih Ukuran'
                  : 'Data tidak ditemukan'}
            </option>
            {data?.data?.map((val: any) => (
              <option key={val.size} value={val.sizes}>
                {val.size}
              </option>
            ))}
          </>
        )}
      </select>
    </>
  );
}

export default memo(SelectProvince);
