import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CurrencySliceType } from '../../types';
import { initialRatesState } from '../../utils/variables';
import { fetchRates } from '../../utils/fetchData';
import { handleFetchError } from '../../utils/ErrorHandler';

const initialState: CurrencySliceType = {
    rates: initialRatesState,
    loading: false,
    error: null,
};

export const fetchData = createAsyncThunk('currencies/fetchData', async () => {
    try {
        const response = await fetchRates();
        return response;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return Promise.reject(handleFetchError(error));
    }
});

const currencySlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.rates = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch rates';
            });
    },
});

export default currencySlice.reducer;
