import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface LangState{
    language: string;
}

const initialState : LangState = {
    language: 'ru',
}

// generation of the actioins
const LangStateSlice = createSlice({
    name: 'langMenuState',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        }
    }
})

export const { changeLanguage } = LangStateSlice.actions;
export default LangStateSlice.reducer;