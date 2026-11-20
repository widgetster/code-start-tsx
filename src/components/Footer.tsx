import { Link } from 'react-router'
import './Footer.css'


export function Footer() {

  return (
    <footer className="third-block-bg">
      <div className="first-row container">
        <div className="first-column">
          <p className="code-p">CodeStart</p>
          <p className="empowering-p">Empowering beginners to build the web of tomorrow.</p>
        </div>

        <div className="second-column">
          <p className="white-p">Quick Links</p>         
          <Link className="grey-p" to="/">
            Home
          </Link>

          <Link className="grey-p" to="/about">
            About
          </Link>

          <Link className="grey-p" to="/courses">
            Courses
          </Link>

          <Link className="grey-p" to="/blog">
            Blog
          </Link>

          <Link className="grey-p" to="/contact">
            Contact
          </Link>
        </div>

        <div className="third-column">
          <p className="white-p">Resources</p>
          <p className="grey-p">HTML Guide</p>
          <p className="grey-p">CSS Guide</p>
          <p className="grey-p">Project Ideas</p>
          <p className="grey-p">FAQs</p>
        </div>

        <div className="fourth-column">
          <p className="white-p">Stay Updated</p>
          <p className="grey-p">Subscribe to get the latest tutorials and coding tips.</p>

          <div className="third-row">
            <input
              type="email"
              className="enter-email"
              placeholder="Enter your email"
              aria-label="Email address"
            />

            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer">
          <p className="copyright">&copy; 2024 CodeStart. All rights reserved.</p>

          <div className="socmed-icons">
            <img src="icon/facebook.png" alt="Facebook" />
            <img src="icon/twitter.png" alt="Twitter" />
            <img src="icon/instagram.png" alt="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  )
}
