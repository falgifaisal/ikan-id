import { ReactElement, ReactNode } from 'react';

import Hero from 'components/hero';
import BreadCrumb from 'components/breadcrumb';

interface MainProps {
  children: ReactNode;
  title: string;
}

function Main({ children, title }: MainProps): ReactElement {
  return (
    <main role="main" className="container py-4">
      <Hero />
      <BreadCrumb title={title} />
      {children}
    </main>
  );
}

export default Main;
