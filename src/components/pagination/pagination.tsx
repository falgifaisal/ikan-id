import { ReactElement, memo } from 'react';

import { useAppContext } from 'context/app-context';
import { createArrayNumber } from 'utils/common';

function Pagination(): ReactElement {
  const { globalState, setState } = useAppContext();
  const { page } = globalState;
  const defaultPage = page || 1;
  const totalPage = 5;
  const dataPage = createArrayNumber(totalPage);
  return (
    <>
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="/" tabIndex={-1}>
              Previous
            </a>
          </li>
          {dataPage?.length
            && dataPage.map((val: any) => (
              <li
                key={val}
                className={`page-item ${val === defaultPage ? 'active' : ''}`}
              >
                <a
                  className="page-link"
                  href="/"
                  onClick={() => setState({ page: val })}
                >
                  {val}
                </a>
              </li>
            ))}
          <li className="page-item">
            <a className="page-link" href="/">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default memo(Pagination);
