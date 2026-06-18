import './Hero.css'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__eyebrow">PM Consultancy</div>
        <h1 className="hero__headline">The right PM,<br />the first time.</h1>
        <p className="hero__subhead">
          Panhive is a PM consultancy. You brief us, we clarify the role,
          we match from a vetted network. No wasted interviews.
        </p>
        <button className="hero__cta" onClick={scrollToContact}>
          Work with us
        </button>
      </div>
    </section>
  )
}