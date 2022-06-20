//리듀서 모듈
import {createSlice,PayloadAction} from '@reduxjs/toolkit';

export interface UserState{
  id: number;
  name : string;
};

const initialState :UserState[]= [
  {
    id: 1, 
    name: '대철',
  },
];

export const addUsersSlice=createSlice({
  name: 'users',
  initialState :initialState,
  reducers:{
    addUser:(state,action : PayloadAction<UserState>)=>{
      const {id, name } =action.payload; 
      state.push({id,name});
    },
  },
});
export const {addUser}=addUsersSlice.actions;
export default addUsersSlice;
