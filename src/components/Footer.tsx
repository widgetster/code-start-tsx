import './Footer.css'


export function Footer() {
  return (
    <div className="third-block-bg">
      <div className="first-row container">
        <div className="first-column">
          <p className="code-p">CodeStart</p>
          <p className="empowering-p">Empowering beginners to build the web of tomorrow.</p>
        </div>

        <div className="second-column">
          <p className="white-p">Quick Links</p>
          <p className="grey-p">Home</p>
          <p className="grey-p">About</p>
          <p className="grey-p">Courses</p>
          <p className="grey-p">Blog</p>
          <p className="grey-p">Contact</p>
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
            <input type="text" className="enter-email" placeholder="Enter your email" />

            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="second-row container">
        <div className="rectangle"></div>

        <footer className="footer">
          <div></div>

          <p className="copyright">&copy; 2024 CodeStart. All rights reserved.</p>

          <div className="socmed-icons">
            <img src="icon/facebook.png" alt="Facebook" />
            <img src="icon/twitter.png" alt="Twitter" />
            <img src="icon/instagram.png" alt="Instagram" />
          </div>


        </footer>


      </div>
    </div>
  )
}
