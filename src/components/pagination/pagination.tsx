import { ReactElement, memo } from 'react';
import Link from 'next/link';

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
            <Link href="/">
              <a className="page-link" tabIndex={-1}>
                Previous
              </a>
            </Link>
          </li>
          {dataPage?.length &&
            dataPage.map((val: any) => (
              <li
                key={val}
                className={`page-item ${val === defaultPage ? 'active' : ''}`}
              >
                <Link href="/">
                  <a
                    className="page-link"
                    onClick={() => setState({ page: val })}
                  >
                    {val}
                  </a>
                </Link>
              </li>
            ))}
          <li className="page-item">
            <Link href="/">
              <a className="page-link">Next</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default memo(Pagination);
