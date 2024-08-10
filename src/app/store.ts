import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from '../features/currencies/currencySlice';

export const store = configureStore({
    reducer: {
        currencyRates: currencyReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
