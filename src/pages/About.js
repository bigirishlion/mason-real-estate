import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/Layout';
import family from '../assets/images/family.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h3>About Us</h3>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <div>
            <span className="image left">
              <img src={family} alt="" />
            </span>
            <h3>Who We Are</h3>
            <p>
              Welcome to Isaiah Mason, your trusted partner in
              construction and renovation. Together, as a family business, we
              strive to leave a positive impact on our clients, our community,
              and the environment while building a legacy of excellence that our
              family can be proud of for generations to come.
            </p>
            <p>
              At Mason Built, we believe that every project is a collaboration.
              Our team works closely with clients to understand their vision,
              preferences, and needs, ensuring that we exceed their expectations
              every step of the way. Whether it’s a small renovation, a
              commercial build-out, or a custom home, we tailor our approach to
              suit each unique project.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to create spaces that inspire and enhance the lives
              of our clients. We strive to uphold our values of integrity,
              quality, and sustainability in every project. Our commitment to
              excellence ensures that we not only meet but often surpass
              industry standards.
            </p>
            <h3>Why Choose Us?</h3>
            <ul>
              <li>
                Experienced Professionals: Our skilled team consists of
                experienced contractors, skilled tradespeople, and project
                managers who are dedicated to maintaining the highest standards
                of quality.
              </li>
              <li>
                Customer-Centric Approach: We prioritize clear communication and
                transparency throughout the construction process, ensuring our
                clients are informed and involved at every stage.
              </li>
              <li>
                Quality Materials: We source only the finest materials,
                combining durability with aesthetics to provide solutions that
                stand the test of time.
              </li>
              <li>
                Timely Completion: We respect your time and work diligently to
                complete projects on schedule without compromising on quality.
              </li>
              <li>
                Community Focused: As a local business, we care about our
                community and strive to give back through various initiatives
                and partnerships.
              </li>
            </ul>
            <p>
              At Isaiah Mason, we are not just building structures;
              we are building relationships. We invite you to explore our
              portfolio and see firsthand how we can turn your dreams into
              reality.
            </p>
            <p>
              Ready to start your next project? Reach out to us today to discuss
              your ideas and get a free consultation. Let’s build something
              great together!
            </p>
            <div className="align-center">
              <Link className="button fit primary" to="/Contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
