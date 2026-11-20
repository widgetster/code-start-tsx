import './Benefits.css'


export function Benefits() {
  return (
    <div className="second-block-bg">
      <div className="second-block container">
        <h2 className="why-p">Why Choose CodeStart?</h2>

        <div className="reason-block">
          <div className="reason">
            <div className="icon-container">
              <img
                className="icon-img"
                src="icon/book.png"
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
                src="icon/monitor.png"
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
                src="icon/rocket.png"
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
  )
}
