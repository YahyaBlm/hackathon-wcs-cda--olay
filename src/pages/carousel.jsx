import { useState } from 'react';

import PrevBtn from '../assets/icons/chevron-left.png';
import NextBtn from '../assets/icons/chevron-right.png';
import '../css/carousel.css';

import Desert from '../assets/images/desert.jpg';
import Forest from '../assets/images/forest.jpg';
import Mountain from '../assets/images/mountain.jpg';
import Sea from '../assets/images/sea.jpg';
import DiscoverButton from '../components/discover-button';
import Header from '../components/header';
import '../css/carousel.css';

const images = [
    {
        img: Sea,
        title: 'Sea',
        route: '/discovered-sea',
    },
    {
        img: Desert,
        title: 'Desert',
        route: '/discovered-desert',
    },
    {
        img: Forest,
        title: 'Forest',
        route: '/discovered-forest',
    },
    {
        img: Mountain,
        title: 'Mountain',
        route: '/discovered-mountain',
    },
];

export default function Carousel() {
    const [slideIndex, setSlideIndex] = useState(0);

    const prevSlide = () => {
        setSlideIndex((slideIndex) => (slideIndex > 0 ? slideIndex - 1 : 3));
    };

    const nextSlide = () => {
        setSlideIndex((slideIndex) => (slideIndex < 3 ? slideIndex + 1 : 0));
    };

    return (
        <>
            <Header />
            <div className="carousel-container">
                <div className="slide">
                    {images.map((myImage, index) => {
                        return (
                            <div
                                className={`card-carousel ${index === slideIndex ? 'card-carousel--active' : ''}`}
                                key={index}
                            >
                                <img src={myImage.img} alt={myImage} className="" />
                                <h3 className="titre">{myImage.title}</h3>

                                <DiscoverButton route={myImage.route} title="Discover" />
                            </div>
                        );
                    })}
                </div>

                <button onClick={prevSlide} className="prev-btn">
                    <img src={PrevBtn} alt="Previous" className="img-btn" />
                </button>

                <button onClick={nextSlide} className="next-btn">
                    <img src={NextBtn} alt="Next" className="img-btn" />
                </button>
            </div>
        </>
    );
}
