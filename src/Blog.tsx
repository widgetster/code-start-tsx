import './Pages.css'

export function Blog() {
  return (
    <>
      <title>Blog</title>

      <section className="page-intro">
        <div className="container">
          <p className="page-eyebrow">IDEAS · TIPS · PRACTICE</p>

          <h1>A Little Learning, Every Day</h1>

          <p>
            Practical notes to help you understand the basics, build better habits, and
            enjoy your coding journey.
          </p>
        </div>
      </section>

      <section className="page-section container" aria-labelledby="blog-heading">
        <h2 id="blog-heading">Notes for Your Coding Journey</h2>

        <p className="page-description">Small ideas you can put into practice today.</p>

        <div className="page-grid">
          <article className="page-card">
            <img src="icon/book.png" alt="" />

            <span className="page-tag">GETTING STARTED</span>

            <h3>Your First Web Page: Keep It Simple</h3>

            <p>
              Start with a heading, a short introduction, and a link. A small page gives
              you room to understand each element before adding more.
            </p>

            <details>
              <summary>Read the tip</summary>

              <p>
                Create an HTML file and write a few sentences about yourself. Add a list
                of your interests, then open the file in your browser. Change one
                element at a time and observe the result.
              </p>
            </details>
          </article>

          <article className="page-card">
            <img src="icon/monitor.png" alt="" />

            <span className="page-tag">CSS PRACTICE</span>

            <h3>Give Your Layout Room to Breathe</h3>

            <p>
              Clear spacing makes your content easier to read. Practice with margin,
              padding, and gap before adding more visual details.
            </p>

            <details>
              <summary>Read the tip</summary>

              <p>
                Choose a consistent spacing scale, such as 8, 16, 24, and 32 pixels. Use
                padding inside cards and gap between them. Resize your browser to see
                how the layout behaves on smaller screens.
              </p>
            </details>
          </article>

          <article className="page-card">
            <img src="icon/rocket.png" alt="" />

            <span className="page-tag">LEARNING HABITS</span>

            <h3>Make Progress with Small Projects</h3>

            <p>
              You do not need a big idea to practice. A profile card, a simple menu, or
              a task list can teach you something useful.
            </p>

            <details>
              <summary>Read the tip</summary>

              <p>
                Pick one skill for each project. Build a profile card to practice
                spacing, a navigation bar to practice Flexbox, or a task list to
                practice events. Finish a small version, then improve it.
              </p>
            </details>
          </article>
        </div>
      </section>
    </>
  )
}
