import { Link } from 'react-router-dom';
import '../css/header.css';

export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <h1 className="logo center" id="logo">
                    O L A Y
                </h1>
            </Link>
        </header>
    );
}
