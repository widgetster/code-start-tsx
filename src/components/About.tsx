import { useNavigate } from 'react-router'
import './About.css'


export function About() {
  const navigate = useNavigate()

  return (
    <>
      <title>About</title>

      <section className="about-intro" aria-labelledby="about-title">
        <div className="about-intro-content container">
          <div className="about-intro-copy">
            <p className="about-eyebrow">BUILD • LEARN • GROW</p>
            <h1 id="about-title">A Simple Start to Your Coding Journey</h1>
            <p className="about-description">
              CodeStart helps beginners turn curiosity into confidence. We make
              learning to build for the web simple, practical, and easy to follow.
            </p>
            <button
              type="button"
              className="about-home-link"
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>
          </div>

          <img
            className="about-image"
            src={`${import.meta.env.BASE_URL}icon/computer1.png`}
            alt="Learner practicing web development on a laptop"
          />
        </div>
      </section>

      <section className="about-mission container" aria-labelledby="about-mission-title">
        <p className="about-eyebrow">ABOUT CODESTART</p>
        <h2 id="about-mission-title">Small Steps. Real Progress.</h2>
        <p className="about-mission-description">
          Everyone starts somewhere. Our mission is to help you understand the
          basics, practice what you learn, and build projects you can be proud of—one
          step at a time.
        </p>

        <div className="about-values">
          <article className="about-value">
            <img src={`${import.meta.env.BASE_URL}icon/book.png`} alt="" />
            <h3>Start with the Basics</h3>
            <p>Get comfortable with HTML and CSS through clear, beginner-friendly lessons.</p>
          </article>

          <article className="about-value">
            <img src={`${import.meta.env.BASE_URL}icon/monitor.png`} alt="" />
            <h3>Learn by Building</h3>
            <p>Turn each new skill into something you can see with hands-on mini projects.</p>
          </article>

          <article className="about-value">
            <img src={`${import.meta.env.BASE_URL}icon/rocket.png`} alt="" />
            <h3>Keep Moving Forward</h3>
            <p>Learn at your own pace and grow your confidence with every small win.</p>
          </article>
        </div>
      </section>
    </>
  )
}
