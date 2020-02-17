


import { combineReducers } from 'redux';
import controlReducers from './controlReducers'
import calidadReducers from './calidadReducers'
import gdsReducers from './gdsReducers'

const rootReducer = combineReducers({
    control: controlReducers,
    calidad: calidadReducers,
    gds: gdsReducers
})
export default rootReducer