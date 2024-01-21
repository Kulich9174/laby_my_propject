import {configureStore} from '@reduxjs/toolkit';
import headerMenuStateReducer from './HeaderMenuReducer/HeaderMenuReducer';
import agreementStateReducer from './AgreementReducer/AgreementReducer';
import formDataStateReducer from './FormDataReducer/FormDataReducer';

export const store = configureStore({
    reducer:{
        headerMenuState : headerMenuStateReducer,
        formDataStateReducer : formDataStateReducer,
        agreementState : agreementStateReducer,
    }
}
)

export type RootState = ReturnType<typeof store.getState>; // Тип для состояния.
export type AppDispatch = typeof store.dispatch; // Тип для dispatch.