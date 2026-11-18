import { Link } from 'react-router'
import './Pages.css'

export function Courses() {
  return (
    <>
      <title>Courses</title>

      <section className="page-intro">
        <div className="container">
          <p className="page-eyebrow">LEARN AT YOUR PACE</p>

          <h1>Your Next Skill Starts Here</h1>

          <p>
            Build a strong foundation with simple lessons and hands-on projects. Start
            small and keep moving forward.
          </p>
        </div>
      </section>

      <section className="page-section container" aria-labelledby="courses-heading">
        <h2 id="courses-heading">Start with the Essentials</h2>

        <p className="page-description">Follow this learning path, one step at a time.</p>

        <div className="page-grid">
          <article className="page-card">
            <img src="icon/book.png" alt="" />

            <span className="page-tag">STEP 01 · BEGINNER</span>

            <h3>HTML Fundamentals</h3>

            <p>
              Learn how headings, links, images, and forms give a web page its
              structure.
            </p>

            <ul>
              <li>Write semantic HTML</li>
              <li>Connect pages with links</li>
              <li>Project: your first personal page</li>
            </ul>
          </article>

          <article className="page-card">
            <img src="icon/monitor.png" alt="" />

            <span className="page-tag">STEP 02 · BEGINNER</span>

            <h3>CSS Essentials</h3>

            <p>
              Bring your pages to life with colors, typography, spacing, and flexible
              layouts.
            </p>

            <ul>
              <li>Understand the box model</li>
              <li>Practice Flexbox and Grid</li>
              <li>Project: a responsive landing page</li>
            </ul>
          </article>

          <article className="page-card">
            <img src="icon/rocket.png" alt="" />

            <span className="page-tag">STEP 03 · NEXT STEPS</span>

            <h3>JavaScript Basics</h3>

            <p>
              Add interaction and learn how to make your pages respond to your visitors.
            </p>

            <ul>
              <li>Work with variables and functions</li>
              <li>Handle clicks and user input</li>
              <li>Project: an interactive task list</li>
            </ul>
          </article>
        </div>

        <div className="page-callout">
          <h2>Not Sure Where to Begin?</h2>

          <p>
            Tell us what you want to build and we can help you choose a starting point.
          </p>

          <Link className="page-button" to="/contact">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
