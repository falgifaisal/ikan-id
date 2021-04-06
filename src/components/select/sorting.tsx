import { ReactElement } from 'react';

import { useAppContext } from 'context/app-context';

function SelectSorting(): ReactElement {
  const { globalState, setState } = useAppContext();
  const { sort } = globalState;
  return (
    <>
      <select
        className="form-select form-select-sm mb-4"
        name="selectSorting"
        value={sort || ''}
        onChange={(e) => setState({ sort: e.target.value })}
      >
        <option value="">Pilih Urutan</option>
        <option value="newest">Terbaru</option>
        <option value="highest">Harga tertinggi</option>
        <option value="lowest">Harga termurah</option>
      </select>
    </>
  );
}

export default SelectSorting;
