import { FC } from 'react';
import { FaMoneyBillTransfer } from 'react-icons/fa6';

const Header: FC = () => {
    return (
        <header>
            <div className="description">
                <FaMoneyBillTransfer className="logo" />
                <h2 className="logo-text">
                    Currency <br />
                    <span>Converter</span>
                </h2>
            </div>
            {/* <div className="timestamp">
                <p>Date</p>
            </div> */}
        </header>
    );
};

export default Header;
