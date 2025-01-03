import '../App.css';

function About() {
    return (
        <div className="about-page">
            <div className="about-container">
                <h1>About Us</h1>
                <p>
                    Welcome to <strong>Our E-Commerce Store</strong>, your one-stop destination for the latest and
                    greatest in [specific product category, e.g., fashion, electronics, etc.]. Our mission is to
                    provide high-quality products at competitive prices with exceptional customer service.
                </p>
                <h2>Our Story</h2>
                <p>
                    Established in [Year], our journey began with a simple idea: to make shopping seamless and
                    enjoyable. Over the years, we’ve grown from a small startup to a trusted brand that values
                    innovation, quality, and customer satisfaction.
                </p>
                <h2>Why Shop With Us?</h2>
                <ul>
                    <li>Wide range of premium products</li>
                    <li>Secure and hassle-free shopping experience</li>
                    <li>Fast and reliable delivery</li>
                    <li>Dedicated customer support</li>
                </ul>
                <h2>Contact Us</h2>
                <p>
                    Have questions or need assistance? Our team is here to help! Reach out to us at:
                    <br />
                    <strong>Email:</strong> support@example.com
                    <br />
                    <strong>Phone:</strong> +123 456 7890
                </p>
                <h2>Follow Us</h2>
                <p>
                    Stay updated with our latest products and offers by following us on:
                </p>
                <ul>
                    <li><a href="https://www.facebook.com">Facebook</a></li>
                    <li><a href="https://www.twitter.com">Twitter</a></li>
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                </ul>
            </div>
        </div>
    );
}

export default About;
