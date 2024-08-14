import { useEffect, useState } from 'react';
import { TbArrowsExchange } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './loader';
import { fetchData } from '../../features/currencies/currencySlice';
import { AppDispatch, RootState } from '../../app/store';
import { initialRatesState } from '../../utils/variables';
import ErrorBlock from './errorBlock';

const Converter = () => {
    const [amount, setAmount] = useState<number>(0);
    const [convertedAmount, setConvertedAmount] = useState<number>(0);
    const [from, setFrom] = useState<string>('USD');
    const [to, setTo] = useState<string>('EUR');
    const dispatch = useDispatch<AppDispatch>();
    const { rates, loading, error } = useSelector(
        (state: RootState) => state.currencyRates
    );

    useEffect(() => {
        dispatch(fetchData());
        calculateConvertedAmount();
    }, [from, to, amount]);

    const calculateConvertedAmount = () => {
        if (JSON.stringify(rates) !== JSON.stringify(initialRatesState)) {
            const converted = (rates[to] * amount) / rates[from];
            setConvertedAmount(Number(converted.toFixed(3)));
        }
    };

    const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) =>
        setAmount(Number(e.target.value));
    const onChangeFrom = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setFrom(e.target.value);
    const onChangeTo = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setTo(e.target.value);

    return (
        <div className="converter">
            {error && <ErrorBlock />}
            <div className="field">
                <input
                    type="number"
                    className="focus:outline-none p-1"
                    value={amount}
                    onChange={onChangeAmount}
                    disabled={Boolean(error)}
                />
                <select
                    value={from}
                    className="p-1"
                    onChange={onChangeFrom}
                    disabled={Boolean(error)}
                >
                    {Object.keys(rates).map((key) => (
                        <option value={key} key={key}>
                            {key}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-[90px] flex justify-center">
                {loading ? (
                    <Loader />
                ) : (
                    <TbArrowsExchange className="convert-icon" />
                )}
            </div>

            <div className="field">
                <input
                    type="number"
                    className="focus:outline-none cursor-auto p-1"
                    value={convertedAmount}
                    readOnly
                />
                <select
                    value={to}
                    className="p-1"
                    onChange={onChangeTo}
                    disabled={Boolean(error)}
                >
                    {Object.keys(rates).map((key) => (
                        <option value={key} key={key}>
                            {key}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Converter;
