import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import ProductGrid from '../../../routes/customViews/eCommerce/ProductGrid'

export default Page(() => (
  <>
    <Head>
      <title>Product Grid</title>
    </Head>
    <>
      <ProductGrid/>
    </>
  </>
));
