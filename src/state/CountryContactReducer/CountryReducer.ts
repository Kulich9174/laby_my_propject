import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface CountryState{
    value: string;
}

const initialState : CountryState = {
    value:'country_Russia',
}

const CountryReducerSlice = createSlice({
    name: 'countryReducer',
    initialState,
    reducers:{
        setCountryValue: (state, action: PayloadAction<string>)=>{
            state.value = action.payload;
        }
    }
})

export const { setCountryValue} = CountryReducerSlice.actions;
export default CountryReducerSlice.reducer;