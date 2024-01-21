import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormDataState{
    name: string;
    phone: string | number;
}
const initialState : FormDataState = {
    name : '',
    phone : '',
}

// generation of the actioins
const formDataStateReducer = createSlice({
    name: 'formDataState',
    initialState,
    reducers:{
       // Обновление редьюсера для добавления имени
        addName: (state, action: PayloadAction<string>) => {
        state.name = action.payload;
    },
        // Дополнительно, вы можете добавить аналогичный редьюсер для номера телефона
        addPhone: (state, action: PayloadAction<string | number>) => {
            state.phone = action.payload;
        }
    }
})

export const { addName , addPhone} =formDataStateReducer .actions;
export default formDataStateReducer .reducer;