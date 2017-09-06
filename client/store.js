/**
 * Created by Alexandra on 06.06.17.
 */

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';
import { logger } from './middlewares/logger';

const store = createStore(reducers, applyMiddleware(logger));

export default store;
