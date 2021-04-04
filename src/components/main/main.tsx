import { ReactElement, ReactNode } from 'react';

import Hero from 'components/hero';
import BreadCrumb from 'components/breadcrumb';
import Search from 'components/search';
import FilterSort from 'components/filter-sort';

interface MainProps {
  children: ReactNode;
  title: string;
}

function Main({ children, title }: MainProps): ReactElement {
  return (
    <main role="main" className="container py-4">
      <Hero />
      <BreadCrumb title={title} />
      <Search />
      <FilterSort />
      {children}
    </main>
  );
}

export default Main;
