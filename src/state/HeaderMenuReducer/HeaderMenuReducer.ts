import { createSlice } from "@reduxjs/toolkit";

interface HeaderMenuState{
    value: boolean;
}

const initialState : HeaderMenuState = {
    value:false,
}

// generation of the actioins
const HeaderMenuStateSlice = createSlice({
    name: 'headerMenuState',
    initialState,
    reducers:{
        changeValue:(state) =>{
            state.value = !state.value
        }
    }
})

export const { changeValue} = HeaderMenuStateSlice.actions;
export default HeaderMenuStateSlice.reducer;