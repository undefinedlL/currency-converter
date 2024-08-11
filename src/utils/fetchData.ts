import { RatesType } from '../types';
import { handleFetchError } from './ErrorHandler';
import { initialRatesState } from './variables';

export const fetchRates = async () => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}?app_id=${import.meta.env.VITE_API_ID}`
        );

        const data = await response.json();
        const rates: RatesType = {
            USD: data.rates['USD'],
            EUR: data.rates['EUR'],
            GBP: data.rates['GBP'],
            JPY: data.rates['JPY'],
            AUD: data.rates['AUD'],
            RUB: data.rates['RUB'],
        };

        return rates;
    } catch (error) {
        // Здесь мы просто возвращаем сообщение об ошибке
        handleFetchError(error);
        return initialRatesState;
    }
};
