import './Navbar.css'

export default function Navbar() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <div className="navbar__logo">Panhive</div>
        <button className="navbar__cta" onClick={scrollToContact}>
          Work with us
        </button>
      </div>
    </nav>
  )
}