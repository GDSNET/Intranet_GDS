


import { combineReducers } from 'redux';
import controlReducers from './controlReducers'
import calidadReducers from './calidadReducers'
import gdsReducers from './gdsReducers'
import comercialReducer from './comercialReducers'


const rootReducer = combineReducers({
    control: controlReducers,
    calidad: calidadReducers,
    gds: gdsReducers,
    comercial:comercialReducer
})
export default rootReducer