import { ReactElement, memo } from 'react';

import { useAppContext } from 'context/app-context';
import { sortArrayObject, removeDuplicateObjectArray } from 'utils/common';
import { useQueryAreas } from 'utils/hooks';

function SelectCity(): ReactElement {
  const {
    isFetching, isLoading, isError, error, data,
  } = useQueryAreas('');
  const { globalState, setState } = useAppContext();
  const { city } = globalState;
  return (
    <>
      <select
        className="form-select form-select-sm mb-4"
        name="selectCity"
        value={city || ''}
        onChange={(e) => setState({ city: e.target.value })}
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
                  ? 'Pilih Kota'
                  : 'Data tidak ditemukan'}
            </option>
            {removeDuplicateObjectArray(
              sortArrayObject(data?.data, 'city'),
              'city',
            )?.map((val: any) => (
              <option key={val.city} value={val.city}>
                {val.city}
              </option>
            ))}
          </>
        )}
      </select>
    </>
  );
}

export default memo(SelectCity);
