//리듀서 모듈
import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface ScrollYState{
  scrollY:number;
}

const initialState : ScrollYState={
  scrollY: 0,
} 

const scrollYSlice=createSlice({
  name: 'scrollYValue',
  initialState :initialState,
  reducers:{
    setScrollY:(state, action:PayloadAction<ScrollYState>)=>{
      const { scrollY }=action.payload;
      return {scrollY : scrollY};
    }
  }
})

export const {setScrollY}=scrollYSlice.actions;
export default scrollYSlice;