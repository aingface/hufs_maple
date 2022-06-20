//store 생성 && wrapper 생성import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';

import {AnyAction, configureStore, Reducer} from '@reduxjs/toolkit';
import rootReducer,{IState} from 'store/modules';
import { createWrapper } from "next-redux-wrapper";
import logger from 'redux-logger';

const makeStore=()=>{
  const store=configureStore({
    reducer: rootReducer as Reducer<IState,AnyAction>,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });
  return store;
}

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});

