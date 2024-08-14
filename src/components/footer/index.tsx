import { FC } from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa6';

const Footer: FC = () => {
    return (
        <footer>
            <a href="https://github.com/undefinedlL" target="_blank">
                <FaGithub className="link" />
            </a>
            <a href="https://t.me/undefinedl_l" target="_blank">
                <FaTelegram className="link" />
            </a>
        </footer>
    );
};

export default Footer;
