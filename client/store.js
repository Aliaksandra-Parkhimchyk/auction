/**
 * Created by Alexandra on 06.06.17.
 */

import { createStore } from 'redux';
import reducers from './reducers/index';

const store = createStore(reducers);

export default store;
