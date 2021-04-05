import { ReactElement } from 'react';

import { useAppContext } from 'context/app-context';
import { sortArrayObject, removeDuplicateObjectArray } from 'utils/common';
import { useAreas } from 'utils/hooks';

function SelectProvince(): ReactElement {
  const {
    isLoading, isError, error, data,
  } = useAreas('');
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
        {data?.data?.length && (
          <option value="" selected>
            Pilih Provinsi
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
