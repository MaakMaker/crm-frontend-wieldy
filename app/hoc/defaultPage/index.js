import {compose} from 'redux';
import WithData from './withData';
import WithLang from '../withLang';

export default compose(
  WithData, WithLang
);
