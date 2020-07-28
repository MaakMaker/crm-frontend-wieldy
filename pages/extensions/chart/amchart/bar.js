import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Bar from '../../../../routes/extensions/charts/amchart/Bar'

export default Page(() => (
  <>
    <Head>
      <title>Bar Chart</title>
    </Head>
    <>
      <Bar/>
    </>
  </>
));
