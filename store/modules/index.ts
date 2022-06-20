//리듀서 모듈 통합
import { combineReducers,AnyAction, CombinedState } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import windowSizeSlice,{WindowSizeState} from 'store/modules/slice/windowSizeSlice';
import scrollYSlice,{ScrollYState} from "./slice/scrollYSlice";
//slice들 타입 모으기
export interface IState{
  windowSize: WindowSizeState;
  scrollY: ScrollYState;
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
          windowSize : windowSizeSlice.reducer,  
          scrollY : scrollYSlice.reducer,    
        })
        return combinedReducer(state,action);  
      }
    }
  }


export default rootReducer;
