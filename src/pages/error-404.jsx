import Header from '../components/header';
import '../css/error-404.css';
import DiscoverButton from '../components/discover-button';
export default function Error404() {
    return (
        <>
            <Header />
            <div className="container-404">
                <h1>Page not found</h1>

                <DiscoverButton route="/" title="Go to home" />
            </div>
        </>
    );
}
