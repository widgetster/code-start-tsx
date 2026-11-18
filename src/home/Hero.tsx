import './Hero.css'
import { useNavigate } from 'react-router'


export function Hero() {
  const navigate = useNavigate();

  function navCourses() {
    navigate('/courses');
  }

  function navAbout() {
    navigate('/about');
  }

  return (
    <div className="first-block-bg">
      <div className="hero-content container">
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
            <button className="browse-button" onClick={navCourses}>Browse Courses</button>
            <button className="learn-button" onClick={navAbout}>Learn More</button>
          </div>
        </div>

        <img src="icon/person.png" alt="CodeStart learner" />
      </div>
    </div>
  )
}
