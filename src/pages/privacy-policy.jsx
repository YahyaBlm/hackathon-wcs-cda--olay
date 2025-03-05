import '../css/privacy-policy.css';

export default function PrivacyPolicy() {
    return (
        <div className="privacy-container">
            <h1 className="privacy-title">Privacy Policy</h1>

            <section className="privacy-section">
                <h2>1. Information We Collect</h2>
                <p>
                    We collect personal information that you provide to us, such as your name, email address, and usage
                    data when you use our services.
                </p>
            </section>

            <section className="privacy-section">
                <h2>2. How We Use Your Information</h2>
                <p>
                    We use your information to provide and improve our services, communicate with you, and ensure the
                    security of our platform.
                </p>
            </section>

            <section className="privacy-section">
                <h2>3. Data Sharing and Disclosure</h2>
                <p>
                    We do not sell your personal information. We may share data with service providers or if required by
                    law.
                </p>
            </section>

            <section className="privacy-section">
                <h2>4. Data Security</h2>
                <p>
                    We implement appropriate technical and organizational measures to protect your personal information.
                </p>
            </section>

            <section className="privacy-section">
                <h2>5. Your Rights</h2>
                <p>
                    You have the right to access, correct, or delete your personal information. Contact us to exercise
                    these rights.
                </p>
            </section>

            <section className="privacy-section">
                <h2>6. Cookies and Tracking</h2>
                <p>We use cookies and similar technologies to enhance your experience on our platform.</p>
            </section>

            <section className="privacy-section">
                <h2>7. Changes to This Policy</h2>
                <p>
                    We may update this privacy policy from time to time. We will notify you of any significant changes.
                </p>
            </section>

            <section className="privacy-section">
                <h2>8. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please{' '}
                    <a href="mailto:ducksociety@duck.com" className="contact-link">
                        contact us
                    </a>
                    .
                </p>
            </section>
        </div>
    );
}
