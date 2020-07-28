import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import Line from '../../../../routes/extensions/charts/amchart/Line'

export default Page(() => (
  <>
    <Head>
      <title>Line Chart</title>
    </Head>
    <>
      <Line/>
    </>
  </>
));
