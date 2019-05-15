import {combineReducers, createStore} from 'redux';
import dashboardReducer from './reducers/dashboardReducer';


const rootReducer = combineReducers({
    dashboard: dashboardReducer,
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;