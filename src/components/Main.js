import React from 'react'

import isaiah1 from '../images/isaiah-1.jpg'

const Main = (props) => {
  /**
   * 
   * @param {HTMLFormElement} e 
   */
    const onSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData(e.target);
      const message = formData.get('message') || 'Hi Isaiah, I am interested in setting up a time to meet to discuss my real estate needs.';
      window.location.href = `mailto:isaiahmason@windermere.com?subject=Real Estate Inquiry&body=${message}`;
    }

    let close = <div className="close" onClick={() => { props.onCloseArticle() }}></div>

    return (
      <div id="main" style={props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article id="about" className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={isaiah1} alt="" /></span>
          <p>Isaiah Mason comes to the real estate industry with many years’ experience in customer service and sales. His previous work gives Isaiah a compassionate side to help his clients achieve their dreams while also bringing forward a competitive edge to negotiate the best deal for his clients.</p>
          <p>As Isaiah grows his real estate career, he is dedicated to helping clients navigate the complexities of buying and selling properties, ensuring each transaction is smooth and successful. Isaiah understands the importance of building meaningful relationships with clients and is passionate about helping them achieve their real estate goals. His aspiration is to become a trusted name in the real estate industry and to actively contribute to the ongoing development and community that makes up Prineville.</p>
          <p>Isaiah chose to partner with Windermere Country Roads because of their unwavering commitment to clients, dedication to giving back to the community, and their focus on doing what is right. While being new to real estate can present challenges, he has surrounded himself with a supportive team that offers over 50 years of combined knowledge and experience.</p>
          <p>Outside of work, Isaiah enjoys making memories with his close friends and family. His daughter is his greatest life accomplishment, and he loves watching her grow and learn. In his free time, he enjoys hunting, fishing, camping and shooting, which allow him to connect with nature and recharge.</p>
          {close}
        </article>

        <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <p> Windermere Country Roads, LLC<br />
              150 NW 4th Street<br />
              Prineville, OR 97754
          </p>
          <p>Office: 541-447-7502</p>
          <form name="contact" onSubmit={onSubmit}>
            <input type="hidden" name="b-f" />
            {/* <div className="field first">
              <label htmlFor="name">Name</label>
              <input type="text" required name="name" id="name" />
            </div> */}
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          {close}
        </article>

      </div>
    )
}

export default Main