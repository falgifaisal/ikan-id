import { ReactElement } from 'react';

interface BreadcrumbProps {
  title: string;
}

function Breadcrumb({ title }: BreadcrumbProps): ReactElement {
  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">{title}</li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
