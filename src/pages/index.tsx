import Layout from 'components/layout';
import Product from 'components/product';
import Pagination from 'components/pagination';

function Home() {
  return (
    <Layout title="Home">
      <h1>Ditemukan harga komoditas ikan: </h1>
      <div className="row mb-4">
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
        <div className="col-sm">
          <Product />
        </div>
      </div>
      <Pagination />
    </Layout>
  );
}

export default Home;
