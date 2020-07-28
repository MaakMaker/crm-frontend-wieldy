import Head from 'next/head';
import Page from '../../app/hoc/securedPage';
import asyncComponent from "../../util/asyncComponent";

const Todo = asyncComponent(() => import('../../routes/inbuiltApps/Todo'));

export default Page(() => (
  <>
    <Head>
      <title>Todo</title>
    </Head>
    <>
      <Todo/>
    </>
  </>
));
