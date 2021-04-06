import { ReactElement } from 'react';

import { useAppContext } from 'context/app-context';
import { sortArrayObject, removeDuplicateObjectArray } from 'utils/common';
import { useQueryAreas } from 'utils/hooks';

function SelectCity(): ReactElement {
  const {
    isLoading, isError, error, data,
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
          <option value="">Pilih Kota</option>
        ) : (
          <option value="" disabled selected>
            Data tidak ditemukan
          </option>
        )}
        {data?.data?.length
          && removeDuplicateObjectArray(
            sortArrayObject(data?.data, 'city'),
            'city',
          )?.map((val: any) => (
            <option key={val.city} value={val.city}>
              {val.city}
            </option>
          ))}
      </select>
    </>
  );
}

export default SelectCity;
