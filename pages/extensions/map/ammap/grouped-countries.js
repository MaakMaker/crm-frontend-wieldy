import Head from 'next/head';
import Page from '../../../../app/hoc/securedPage';
import GroupedCountries from '../../../../routes/extensions/map/ammap/GroupedCountries'

export default Page(() => (
  <>
    <Head>
      <title>Ammap-GroupedCountries</title>
    </Head>
    <>
      <GroupedCountries/>
    </>
  </>
));
