import { ReactElement } from 'react';

import { useAppContext } from 'context/app-context';
import { sortArrayObject, removeDuplicateObjectArray } from 'utils/common';
import { useQueryAreas } from 'utils/hooks';

function SelectProvince(): ReactElement {
  const {
    isLoading, isError, error, data,
  } = useQueryAreas('');
  const { globalState, setState } = useAppContext();
  const { province } = globalState;
  return (
    <>
      <select
        className="form-select form-select-sm mb-4"
        value={province}
        onChange={(e) => setState({ province: e.target.value })}
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
            Pilih Provinsi
          </option>
        ) : (
          <option value="" disabled selected>
            Data tidak ditemukan
          </option>
        )}
        {data?.data?.length
          && removeDuplicateObjectArray(
            sortArrayObject(data?.data, 'province'),
            'province',
          )?.map((val: any) => (
            <option key={val.province} value={val.province}>
              {val.province}
            </option>
          ))}
      </select>
    </>
  );
}

export default SelectProvince;
