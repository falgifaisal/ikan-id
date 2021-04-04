import { ReactElement } from 'react';

interface BreadcrumbProps {
  title: string;
}

function Breadcrumb({ title }: BreadcrumbProps): ReactElement {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
