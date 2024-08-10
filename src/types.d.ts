export type CurrencySliceType = {
    rates: WritableDraft<RatesType>;
    loading: boolean;
    error: string | null | undefined;
};

export type RatesType = {
    USD: number;
    EUR: number;
    GBP: number;
    JPY: number;
    AUD: number;
    RUB: number;
};
