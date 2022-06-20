//리듀서 모듈
import {createSlice,PayloadAction} from '@reduxjs/toolkit';

export interface WindowSizeState{
  innerWidth: number;
  innerHeight: number;
};

const initialState :WindowSizeState={
    innerWidth: 0, 
    innerHeight: 0,
  };

export const windowSizeSlice=createSlice({
  name: 'users',
  initialState :initialState,
  reducers:{
    setWindowSize:(state,action : PayloadAction<WindowSizeState>)=>{
      const { innerWidth, innerHeight } =action.payload; 
      return { innerWidth:innerWidth, innerHeight:innerHeight };
    },
  },
});
export const {setWindowSize}=windowSizeSlice.actions;
export default windowSizeSlice;
