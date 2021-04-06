import { ReactElement, ReactNode } from 'react';

import Hero from 'components/hero';
import BreadCrumb from 'components/breadcrumb';

interface MainProps {
  children: ReactNode;
  title: string;
}

function Main({ children, title }: MainProps): ReactElement {
  return (
    <main role="main" className="container pb-4 pt-5 mt-5">
      <Hero />
      <BreadCrumb title={title} />
      {children}
    </main>
  );
}

export default Main;
