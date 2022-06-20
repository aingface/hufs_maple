//리듀서 모듈 통합
import { combineReducers,AnyAction, CombinedState } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { ReducerState } from "react";

import usersReducer,{UserState} from 'store/modules/slice/addUsersSlice';

//slice들 타입 모으기
export interface IState{
  users:UserState[];
}

const rootReducer =(
  state : IState, 
  action :AnyAction 
  ):CombinedState<IState>=>{
    switch(action.type){
      case HYDRATE:
        return action.payload;
      default: {
        const combinedReducer=combineReducers({
          users : usersReducer.reducer,      
        })
        return combinedReducer(state,action);  
      }
    }
  }


export default rootReducer;
