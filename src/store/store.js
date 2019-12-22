import { createStore } from 'redux'
import counter from '../reducer/indexReducer'
let storeApp=createStore(counter)
export default storeApp;
