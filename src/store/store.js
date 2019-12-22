import { createStore } from 'redux'
import appReduce from '../reducer/indexReducer'

let storeApp=createStore(appReduce)
console.log(storeApp.getState())
export default storeApp;
