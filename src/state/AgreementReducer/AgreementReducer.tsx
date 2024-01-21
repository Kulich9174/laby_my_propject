import { createSlice } from "@reduxjs/toolkit";

interface AgreementCheckBoxState{
    value: boolean;
}

const initialState : AgreementCheckBoxState = {
    value:false,
}

const AgreementCheckBoxSlice = createSlice({
    name: 'agreementStateReducer',
    initialState,
    reducers:{
        changeValue:(state) =>{
            state.value = !state.value
        }
    }
})

export const { changeValue} = AgreementCheckBoxSlice.actions;
export default AgreementCheckBoxSlice.reducer;