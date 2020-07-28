import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import ColorPicker from '../../routes/extraComponents/ColorPicker'

export default Page(() => (
  <>
    <Head>
      <title>ColorPicker </title>
    </Head>
    <>
      <ColorPicker/>
    </>
  </>
));
