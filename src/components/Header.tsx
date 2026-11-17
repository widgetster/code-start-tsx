import { Link, NavLink } from 'react-router'
import './Header.css'


export function Header() {
  return (
    <header>
      <div className="header container">
        <Link className="left" to="/" aria-label="CodeStart home">
          <img
            className="logo-img"
            src={`${import.meta.env.BASE_URL}icon/logo.png`}
            alt="CodeStart logo"
          />

          <p>CodeStart</p>
        </Link>

        <nav className="middle" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <p>Courses</p>
          <p>Blog</p>
          <p>Contact</p>
        </nav>

        <div className="sign-up-div">
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  )
}
