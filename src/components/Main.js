import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Isaiah Mason is a licensed real estate broker with a robust
            background in the recreational vehicle sales industry. Most
            recently, he served as the general manager for a dealership,
            overseeing operations at two locations. This experience honed his
            leadership skills and provided him with valuable insights into
            customer service, negotiation, and sales strategy.
          </p>
          <p>
            Isaiah has chosen to partner with Windermere Country Roads because
            of their unwavering commitment to clients, dedication to giving back
            to the community, and their focus on doing what is right. While
            being new to real estate can present challenges, he has surrounded
            himself with a supportive team that offers over 50 years of combined
            knowledge and experience.
          </p>
          <p>
            As he transitions into real estate, Isaiah is dedicated to helping
            clients navigate the complexities of buying and selling properties,
            ensuring each transaction is smooth and successful. He understands
            the importance of building meaningful relationships with clients and
            is passionate about helping them achieve their real estate goals.
            His aspiration is to become a trusted name in the real estate
            industry and to actively contribute to the development of the
            Prineville community.
          </p>
          <p>
            Outside of work, Isaiah enjoys making memories with his close
            friends and family. His daughter is his greatest life
            accomplishment, and he loves watching her grow and learn. In his
            free time, he enjoys hunting, fishing, camping, and shooting, which
            allow him to connect with nature and recharge.
          </p>
          {close}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="b-f"
          >
            <input type="hidden" name="b-f" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" required name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" required name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Main
