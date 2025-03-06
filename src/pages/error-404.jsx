/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import DiscoverButton from '../components/discover-button';
import Header from '../components/header';
import '../css/error-404.css';
export default function Error404() {
    return (
        <>
            <Header />
            <motion.div
                className="container-404"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h1>Page not found</h1>

                <DiscoverButton route="/" title="Go to home" />
            </motion.div>
        </>
    );
}
