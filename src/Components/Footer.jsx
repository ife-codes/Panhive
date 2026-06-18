import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__logo">Panhive</div>
        <p className="footer__tagline">PM consultancy. Advisory-first. Vetted network.</p>
        <p className="footer__copy">&copy; {new Date().getFullYear()} Panhive. All rights reserved.</p>
      </div>
    </footer>
  )
}