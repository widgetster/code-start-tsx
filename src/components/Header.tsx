import './Header.css'


export function Header() {
  return (
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
  )
}