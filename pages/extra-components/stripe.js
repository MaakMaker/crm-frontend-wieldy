import React from 'react';
import Page from '../../app/hoc/securedPage';
import asyncComponent from '../../util/asyncComponent'

const Stripe = asyncComponent(() => import('../../routes/extraComponents/Stripe'));

export default Page(() => <Stripe/>);
