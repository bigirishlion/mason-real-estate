import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            {' '}
            Welcome to Isaiah Mason <br /> Where Your Vision Becomes
            Reality
          </h2>
          <p>
            At Mason Built, we specialize in transforming dreams into tangible
            results. With years of experience in the construction industry, our
            dedicated team of professionals is committed to delivering quality
            craftsmanship and exceptional service on every project. Whether
            you’re looking to build your dream home, renovate your existing
            space, or tackle a roofing, siding project, we’ve got the expertise
            and passion to bring your vision to life. Explore our services and
            discover how we can help you create the perfect environment tailored
            to your unique needs.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-hammer major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-home major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>Experienced Professionals</h2>
          <p>
            Our skilled team consists of experienced contractors, skilled
            tradespeople, and project managers who are dedicated to maintaining
            the highest standards of quality.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>Customer-Centric Approach</h2>
          <p>
            We prioritize clear communication and transparency throughout the
            construction process, ensuring our clients are informed and involved
            at every stage.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>Quality Materials</h2>
          <p>
            We source only the finest materials, combining durability with
            aesthetics to provide solutions that stand the test of time.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Relationship Focused</h2>
          <p>
            At Isaiah Mason, we are not just building structures; we
            are building relationships. We invite you to explore our portfolio
            and see firsthand how we can turn your dreams into reality.
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-hammer">
            <h3>Roofing</h3>
            <p>
              A well-executed roofing job ensures lasting protection and
              enhances the overall safety and appearance of a home.
            </p>
          </li>
          <li className="icon solid fa-home">
            <h3>Siding</h3>
            <p>
              Properly installed siding not only boosts a home's curb appeal but
              also provides crucial protection against the elements.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <Link className="button fit primary" to="/Contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="button fit" to="/About">
              Learn More
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
