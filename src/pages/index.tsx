import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

// import { defaultLimit } from 'constants/common';
import { fetchGetSize, fetchGetArea, fetchGetProduct } from 'utils/api';
import Layout from 'components/layout';
import Result from 'components/result';

function Home() {
  return (
    <Layout title="Home">
      <Result />
    </Layout>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  // const params: any = `?limit=${defaultLimit}&offset=0`;
  const params: any = '';
  await queryClient.prefetchQuery(['sizes', ''], () => fetchGetSize(''));
  await queryClient.prefetchQuery(['areas', ''], () => fetchGetArea(''));
  await queryClient.prefetchQuery(['products', params], () => fetchGetProduct(params));

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
}

export default Home;
