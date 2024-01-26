import { createSlice,  PayloadAction } from "@reduxjs/toolkit";

interface CalcCountryState{
    country : string
}
const initialState : CalcCountryState = {
    country : 'ecuador',
}

const calcCountryState = createSlice({
    name:'calcCountryState',
    initialState,
    reducers:{
        changeCountry : (state, action: PayloadAction<string>)=>{
            state.country = action.payload;
        }
    }
})

export const {changeCountry } = calcCountryState.actions;
export default calcCountryState.reducer;