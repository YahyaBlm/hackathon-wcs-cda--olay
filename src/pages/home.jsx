// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import DiscoverButton from '../components/discover-button';
import Header from '../components/header';
import '../css/home.css';

export default function Home() {
    return (
        <section className="homeSection">
            <Header />
            <motion.div
                className="backgroundHome"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            ></motion.div>
            <motion.div className="homeTextContent">
                <div>
                    <p>Dream. Travel. Discover.</p>{' '}
                    <p> Disconnect and embark on an adventure in nature to rejuvenate yourself. </p>
                    <DiscoverButton route={'/landscapes'} title={'Discover'} />
                </div>
            </motion.div>
        </section>
    );
}
