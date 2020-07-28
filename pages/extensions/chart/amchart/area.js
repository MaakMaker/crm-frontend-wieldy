import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Area from '../../../../routes/extensions/charts/amchart/Area'

export default Page(() => (
  <>
    <Head>
      <title>Area Chart</title>
    </Head>
    <>
      <Area/>
    </>
  </>
));
