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
          <p>I&apos;m Isaiah Mason, bringing a unique blend of compassion and competitiveness to the real estate world. With many years of experience in customer service and sales, I&apos;ve learned that success isn&apos;t just about closing deals—it&apos;s about helping people achieve their dreams. That&apos;s my edge: a heartfelt commitment to your goals paired with the tenacity to negotiate the best deal.</p>
          <p>As I grow my real estate career, I&apos;m dedicated to helping clients navigate the complexities of buying and selling properties, ensuring each transaction is smooth and successful. Real estate is about more than transactions; it&apos;s about building meaningful relationships, creating homes, and contributing to a thriving community—one I love right here in Prineville.</p>
          <p>I chose to partner with Windermere Country Roads because of their unwavering commitment to clients, dedication to giving back to the community, and focus on doing what is right. While being new to real estate can present challenges, I&apos;m surrounded by a supportive team that offers over 50 years of combined knowledge and experience.</p>
          <p>Outside of work, you&apos;ll find me making memories with my family. My daughter is my greatest accomplishment—watching her grow is my greatest joy. In my free time, I enjoy hunting, fishing, camping, and shooting, which allow me to connect with nature and recharge.</p>
          <p>Let me help guide you to your next home—a place that&apos;s more than just a property, but a true sanctuary where your story can unfold</p>
          {close}
        </article>

        <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <p> Windermere Country Roads, LLC<br />
              150 NW 4th Street<br />
              Prineville, OR 97754
          </p>
          <p>
            Office: 541-447-7502<br />
            Cell: 503-819-0039
          </p>
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