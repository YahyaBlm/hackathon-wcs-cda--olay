import '../css/home.css';
import DiscoverButton from '../components/discover-button';
import Header from '../components/header';

export default function Home() {
    return (
        <section className="homeSection">
            <Header />
            <div className="backgroundHome"> </div>
            <div className="homeTextContent">
                <div>
                    <p>Dream. Travel. Discover.</p>{' '}
                    <p> Disconnect and embark on an adventure in nature to rejuvenate yourself. </p>
                    <DiscoverButton route={'/landscapes'} />
                </div>
            </div>
        </section>
    );
}
