import '../css/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <Link to="/">
                <h1 className="logo center">O L A Y</h1>
            </Link>
        </header>
    );
}
