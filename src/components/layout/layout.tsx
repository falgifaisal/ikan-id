import { ReactElement, ReactNode, memo } from 'react';
import { NextSeo } from 'next-seo';

import { useAppContext } from 'context/app-context';
import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';

interface LayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

function Layout({ children, title, description }: LayoutProps): ReactElement {
  const { globalState } = useAppContext();
  const { theme } = globalState;

  return (
    <div className={`min-vh-100 ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
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

export default memo(Layout);
