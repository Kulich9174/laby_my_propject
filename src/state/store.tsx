import {configureStore} from '@reduxjs/toolkit';
import headerMenuStateReducer from './HeaderMenuReducer/HeaderMenuReducer';
import agreementStateReducer from './AgreementReducer/AgreementReducer';
import formDataStateReducer from './FormDataReducer/FormDataReducer';
import calcCountryStateReducer from './CalcuationStateReducer/CalcCountryReducer';
import CalcDateReducer from './CalcuationStateReducer/CalcDateReducer';
import LangStateReducer from './Language/LangStateReducer';
import countryReducer from './CountryContactReducer/CountryReducer';
import CityManagerReducer from './CountryContactReducer/CityManagerReducer';
export const store = configureStore({
    reducer:{
        headerMenuState : headerMenuStateReducer,
        LangStateReducer : LangStateReducer,
        calcCountryState : calcCountryStateReducer,
        CalcDateReducer:CalcDateReducer,
        formDataStateReducer : formDataStateReducer,
        agreementState : agreementStateReducer,
        CountryReducer : countryReducer,
        CityManagerReducer : CityManagerReducer,
    }
}
)

export type RootState = ReturnType<typeof store.getState>; // Тип для состояния.
export type AppDispatch = typeof store.dispatch; // Тип для dispatch.