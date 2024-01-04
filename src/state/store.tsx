import {configureStore} from '@reduxjs/toolkit';
import headerMenuStateReducer from './HeaderMenuReducer/HeaderMenuReducer';

export const store = configureStore({
    reducer:{
        headerMenuState : headerMenuStateReducer,
    }
}
)

export type RootState = ReturnType<typeof store.getState>; // Тип для состояния.
export type AppDispatch = typeof store.dispatch; // Тип для dispatch.