import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface CountryState{
    value: string;
}

const initialState : CountryState = {
    value:'country_Russia',
}

const CountryWarehouseReducerSlice = createSlice({
    name: 'countryWarehouseReducer',
    initialState,
    reducers:{
        setCountryWarehouseValue: (state, action: PayloadAction<string>)=>{
            state.value = action.payload;
        }
    }
})

export const { setCountryWarehouseValue} = CountryWarehouseReducerSlice.actions;
export default CountryWarehouseReducerSlice.reducer;