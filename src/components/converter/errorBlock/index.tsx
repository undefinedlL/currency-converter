import { FC } from 'react';

const ErrorBlock: FC = () => {
    return (
        <div className="error-block">
            <h2>Something went wrong</h2>
            <h3>
                Please Reload Page <br />
                or <br />
                Visit It Later
            </h3>
        </div>
    );
};

export default ErrorBlock;
