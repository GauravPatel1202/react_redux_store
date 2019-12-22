import { createStore } from 'redux';
import appReduce from '../reducer/indexReducer';
import action1 from '../action/comAction/test1Action';
let storeApp=createStore(appReduce,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
storeApp.dispatch(action1())
export default storeApp;
