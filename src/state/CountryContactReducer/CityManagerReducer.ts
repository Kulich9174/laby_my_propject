import { createSlice , PayloadAction} from "@reduxjs/toolkit";

interface CityManagerState{
    value: string;
}

const initialState : CityManagerState = {
    value:'city_Moscow',
}

const CityReducerSlice = createSlice({
    name: 'cityReducer',
    initialState,
    reducers:{
        setCityValue: (state, action: PayloadAction<string>)=>{
            state.value = action.payload;
        }
    }
})

export const { setCityValue} = CityReducerSlice.actions;
export default CityReducerSlice.reducer;