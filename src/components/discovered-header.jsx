import '../css/discovered-header.css';
import { Link } from 'react-router-dom';

export default function DiscoveredHeader({ className }) {
    return (
        <header className={`discovered-header ${className}`}>
            <Link to="/">
                <h1 className="logo center" id="logo">
                    O L A Y
                </h1>
            </Link>
            <div>
                <Link to="/discovered-sea" className="link">
                    <p>Sea</p>
                </Link>

                <Link to="/discovered-mountain" className="link">
                    <p>Mountain</p>
                </Link>

                <Link to="/discovered-desert" className="link">
                    <p>Desert</p>
                </Link>

                <Link to="/discovered-forest" className="link">
                    <p>Forest</p>
                </Link>
            </div>
        </header>
    );
}
