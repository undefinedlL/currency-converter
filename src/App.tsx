import { FC } from 'react';
import { Header, Converter, Footer } from './components';

const App: FC = () => {
    return (
        <>
            <Header />
            <Converter />
            <Footer />
        </>
    );
};

export default App;
