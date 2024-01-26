import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StartCalcDateState {
    startDate: string;
    collectionDate : string;
}
const initialState : StartCalcDateState = {
    startDate : '',
    collectionDate : ''
}

const CalcDateStateReducer = createSlice({
    name:'calcDateState',
    initialState,
    reducers:{
        addStartDate: (state, action: PayloadAction<string>) => {
            // const formattedDate = `${year}-${month}-${day}`;
            state.startDate = action.payload;
    },
        //как использовать состояние для изменения другого состояния
        countShipmentCollectionDate : (state) => {
            const current = new Date();
            current.setDate(current.getDate() + 3);
            const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
            state.collectionDate = new Intl.DateTimeFormat('ru-RU', options).format(current) + ' в 16:00';
        }

}}
)
export const {addStartDate,countShipmentCollectionDate } = CalcDateStateReducer.actions;
export default CalcDateStateReducer.reducer;