import './App.css'

function App() {

  return (
    <>
      <header>
        <div className="header">
          <div className="left">
            <img
              className="logo-img"
              src="/icon/logo.png"
              alt="CodeStart logo"
            />

            <p>CodeStart</p>
          </div>

          <div className="middle">
            <p>Home</p>
            <p>About</p>
            <p>Courses</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>

          <div className="sign-up-div">
            <button>Sign Up</button>
          </div>
        </div>
      </header>


      <main>
        <div className="first-block-bg">
          <div className="first-block">
            <p className="build-p">
              BUILD • LEARN • GROW
            </p>

            <p className="start-p">
              Start Your Coding Journey Today
            </p>

            <p className="learn-p">
              Learn HTML, CSS, and modern web skills step by step
              with simple examples and hands-on practice
            </p>

            <div className="first-block-buttons">
              <button className="browse-button">Browse Courses</button>
              <button className="learn-button">Learn More</button>
            </div>
          </div>

          <img src="/icon/person.png" alt="CodeStart learner" />
        </div>


        <div className="second-block-bg">
          <div className="second-block">
            <p className="why-p">Why Choose CodeStart?</p>

            <div className="reason-block">
              <div className="reason">
                <div className="icon-container">
                  <img 
                    className="icon-img" 
                    src="/icon/book.png"
                    alt="Book" />
                </div>

                <div>
                  <p className="reason-p">Beginner Friendly</p>
                  <p className="reason1-p">Easy to follow lessons designed for absolute beginners.</p>
                </div>
              </div>

              <div className="reason">
                <div className="icon-container">
                  <img 
                    className="icon-img" 
                    src="/icon/monitor.png"
                    alt="Monitor" />
                </div>

                <div>
                  <p className="reason-p">Hands-on Practice</p>
                  <p className="reason1-p">Practice with real examples and mini projects.</p>
                </div>
              </div>

              <div className="reason">
                <div className="icon-container">
                  <img 
                    className="icon-img" 
                    src="/icon/rocket.png"
                    alt="Rocket" />
                </div>

                <div>
                  <p className="reason-p">Learn at Your Pace</p>
                  <p className="reason1-p">Study anytime, anywhere, and improce step by step.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default App
