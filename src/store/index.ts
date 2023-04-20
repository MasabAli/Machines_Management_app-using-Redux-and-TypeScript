
import { combineReducers, createStore } from 'redux';
import machineReducers from './reducers/machine';
import machineTypeReducers from './reducers/machineType';
import machineAttributeReducers from './reducers/attribute';

const reducers = combineReducers({
    machines: machineReducers,
    machineTypes: machineTypeReducers,
    machineAttributes: machineAttributeReducers
});

const store = createStore(reducers);
export default store;