import { combineReducers } from '@reduxjs/toolkit';
import { transportReducer } from '../../../entities';
import { transportsReducer } from '../../../features';


export const rootReducer = combineReducers({
  transports: transportsReducer,
  transport: transportReducer,
})