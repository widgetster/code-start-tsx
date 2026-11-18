import './Pages.css'

export function Contact() {
  return (
    <>
      <title>Contact</title>

      <section className="page-intro">
        <div className="container">
          <p className="page-eyebrow">LET’S CONNECT</p>

          <h1>Every Question Is a Good Start</h1>

          <p>
            Have a question about learning to code or an idea for CodeStart? We would
            love to hear it.
          </p>
        </div>
      </section>

      <section
        className="page-section container contact-grid"
        aria-labelledby="contact-heading"
      >
        <div>
          <h2 id="contact-heading">How Can We Help?</h2>

          <p className="page-description">
            A little context makes it easier to understand your question.
          </p>

          <article className="page-card contact-note">
            <h3>Learning Support</h3>

            <p>Share what you are learning, what you tried, and where you got stuck.</p>
          </article>

          <article className="page-card contact-note">
            <h3>Ideas & Feedback</h3>

            <p>Tell us which topics, examples, or projects you would like to see next.</p>
          </article>
        </div>

        <div className="page-card">
          <h2>Plan Your Message</h2>

          <p className="page-description">Use these prompts to prepare your question.</p>

          <label className="contact-label" htmlFor="contact-name">Your name</label>

          <input
            className="contact-input"
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
          />

          <label className="contact-label" htmlFor="contact-email">Email address</label>

          <input
            className="contact-input"
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />

          <label className="contact-label" htmlFor="contact-topic">Topic</label>

          <select className="contact-input" id="contact-topic" name="topic">
            <option>Learning support</option>
            <option>Course question</option>
            <option>Ideas and feedback</option>
          </select>

          <label className="contact-label" htmlFor="contact-message">Your message</label>

          <textarea
            className="contact-input"
            id="contact-message"
            name="message"
            rows={5}
            placeholder="What would you like to ask or share?"
          />

          <p className="contact-hint">
            This practice page does not send or save messages yet.
          </p>
        </div>
      </section>
    </>
  )
}
