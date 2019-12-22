import { combineReducers } from 'redux'
import counter1 from './comReducers/test1'
import counter2 from './comReducers/test2'
let appReduce= combineReducers({
    counter1,
    counter2, 
})
export default appReduce