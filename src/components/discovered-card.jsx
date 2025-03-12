import IconLocalisation from '../assets/icons/localisation.png';
import '../css/discovered-card.css';

export default function DiscoveredCard({ img, city, description, onClick }) {
    return (
        <section className="card" onClick={onClick}>
            <a href="#info">
                <img src={img} />
                <div className="black"></div>
                <div>
                    <img className="icon-localisation" src={IconLocalisation} alt="icon localisation" />
                    <p className="city">{city}</p>
                </div>
                <p className="description">{description}</p>
            </a>
        </section>
    );
}
