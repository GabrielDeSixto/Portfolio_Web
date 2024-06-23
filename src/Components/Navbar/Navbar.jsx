import "./Navbar.css"

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <a className="title" href="/">Portoflio</a>
        <div className="menu">
            <ul className="menuItems">
                <li><a href="#about">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#about">Contact</a></li>
            </ul>
        </div>
      </nav>
    </> 
  )
}

