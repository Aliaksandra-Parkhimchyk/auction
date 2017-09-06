/**
 * Created by a.parkhimchyk on 06.09.2017.
 */

export const logger = store => next => action => {
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
};
