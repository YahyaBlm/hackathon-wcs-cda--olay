import '../css/discovered-footer.css';
import { Link } from 'react-router-dom';

export default function DiscoveredFooter({ className }) {
    return (
        <footer className={`discovered-footer ${className}`}>
            <section className="footer-link">
                <div>
                    <Link to="/discovered/sea" className="link">
                        <p>Home</p>
                    </Link>
                    <Link to="/discovered/sea" className="link">
                        <p>Sea</p>
                    </Link>

                    <Link to="/discovered/mountain" className="link">
                        <p>Mountain</p>
                    </Link>

                    <Link to="/discovered/desert" className="link">
                        <p>Desert</p>
                    </Link>

                    <Link to="/discovered/forest" className="link">
                        <p>Forest</p>
                    </Link>
                </div>

                <div>
                    <Link to="/discovered/sea" className="link">
                        <p>Terms & conditions</p>
                    </Link>

                    <Link to="/discovered/mountain" className="link">
                        <p>Privacy policy</p>
                    </Link>
                </div>
            </section>
            <h1 className="logo center" id="logo">
                O L A Y
            </h1>
            <p className="copy">Copyright © 2025 OLAY • Made with love by Océane • Luc • Alhassane • Yahya</p>
        </footer>
    );
}
