import { ReactElement, memo } from 'react';

import { useAppContext } from 'context/app-context';
import { sortArrayObject, removeDuplicateObjectArray } from 'utils/common';
import { useQueryAreas } from 'utils/hooks';

function SelectProvince(): ReactElement {
  const {
    isFetching, isLoading, isError, error, data,
  } = useQueryAreas('');
  const { globalState, setState } = useAppContext();
  const { province } = globalState;

  return (
    <>
      <select
        className="form-select form-select-sm mb-4"
        name="selectProvince"
        value={province || ''}
        onChange={(e) => setState({ province: e.target.value })}
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
                  ? 'Pilih Provinsi'
                  : 'Data tidak ditemukan'}
            </option>
            {!isFetching
              && removeDuplicateObjectArray(
                sortArrayObject(data?.data, 'province'),
                'province',
              )?.map((val: any) => (
                <option key={val.province} value={val.province}>
                  {val.province}
                </option>
              ))}
          </>
        )}
      </select>
    </>
  );
}

export default memo(SelectProvince);
