import { ReactElement, memo } from 'react';

import { useAppContext } from 'context/app-context';
import {
  SelectSorting,
  SelectProvince,
  SelectCity,
  SelectSize,
} from 'components/select';

function Filter(): ReactElement {
  const { globalState } = useAppContext();
  const { theme } = globalState;

  return (
    <>
      <div
        className={`card mb-5 ${
          theme === 'dark'
            ? 'bg-dark text-light box-shadow-light-1'
            : 'bg-light text-dark box-shadow-dark-1'
        }`}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4">
              <h5 className="card-title">Urutkan</h5>
              <hr />
              <div className="d-flex flex-column">
                <SelectSorting />
              </div>
            </div>
            <div className="col-sm-8">
              <h5 className="card-title">Filter</h5>
              <hr />
              <div className="d-flex flex-column">
                <h5 className="card-title">Lokasi</h5>
                <SelectProvince />
                <SelectCity />
                <h5 className="card-title">Ukuran</h5>
                <SelectSize />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Filter);
