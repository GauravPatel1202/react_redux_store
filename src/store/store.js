import { createStore } from 'redux';
import appReduce from '../reducer/indexReducer';
let storeApp=createStore(appReduce,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default storeApp;
