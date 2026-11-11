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
      </main>
    </>
  )
}

export default App
