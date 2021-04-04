import { ReactElement, ReactNode } from 'react';
import { NextSeo } from 'next-seo';

import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';

interface LayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

function Layout({ children, title, description }: LayoutProps): ReactElement {
  return (
    <div className="min-vh-100">
      <NextSeo title={title} description={description} />
      <Header />
      <Main title={title}>{children}</Main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  description: '',
};

export default Layout;
