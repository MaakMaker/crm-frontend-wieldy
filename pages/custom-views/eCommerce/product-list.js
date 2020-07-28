import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import ProductList from '../../../routes/customViews/eCommerce/ProductList'

export default Page(() => (
  <>
    <Head>
      <title>Product List</title>
    </Head>
    <>
      <ProductList/>
    </>
  </>
));
