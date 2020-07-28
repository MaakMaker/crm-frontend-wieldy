import Head from 'next/head';
import Page from '../../../app/hoc/securedPage';
import PricingTable from '../../../routes/customViews/extras/PricingTable'

export default Page(() => (
  <>
    <Head>
      <title>Pricing Table</title>
    </Head>
    <>
      <PricingTable/>
    </>
  </>
));
