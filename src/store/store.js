import { createStore } from 'redux';
import appReduce from '../reducer/indexReducer';
import action1 from '../action/comAction/test1Action';
let storeApp=createStore(appReduce)
console.log(storeApp.getState())
storeApp.dispatch(action1())
console.log(storeApp.getState())
export default storeApp;
