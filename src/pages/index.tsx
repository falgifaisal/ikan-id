import { dehydrate } from 'react-query/hydration';

// import { defaultLimit } from 'constants/common';
import { fetchGetSize, fetchGetArea, fetchGetProduct } from 'utils/api';
import queryClient from 'utils/query-client';
import Layout from 'components/layout';
import Search from 'components/search';
import FilterSort from 'components/filter-sort';
import Result from 'components/result';

function Home(props: any) {
  // eslint-disable-next-line no-console
  console.log('render Home -> props', props);
  return (
    <Layout title="Home" description="Ini halaman utama">
      <Search />
      <FilterSort />
      <Result />
    </Layout>
  );
}

export async function getServerSideProps() {
  const params: string = `?commodity=&province=&city=&size=&sort=`;
  await queryClient.prefetchQuery(['sizes', ''], () => fetchGetSize(''));
  await queryClient.prefetchQuery(['areas', ''], () => fetchGetArea(''));
  await queryClient.prefetchQuery(['products', params], () =>
    fetchGetProduct(params),
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
}

export default Home;
