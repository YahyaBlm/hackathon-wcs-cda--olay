import '../css/discovered-card.css';
import { Link } from 'react-router-dom';
import IconLocalisation from '../assets/icons/localisation.png';

export default function DiscoveredCard({ img, city, description }) {
    return (
        <section className="card">
            <img src={img} />
            <div className="black"></div>
            <div>
                <img className="icon-localisation" src={IconLocalisation} alt="icon localisation" />
                <p className="city">{city}</p>
            </div>
            <p className="description">{description}</p>
        </section>
    );
}
