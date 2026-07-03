import './Contact.css'
import useInView from '../hooks/UseInView'

export default function Contact() {
  const [headerRef, headerInView] = useInView()
  const [optionsRef, optionsInView] = useInView()

const handleSubmit = async (e) => {
  e.preventDefault()
  const form = e.target

  const res = await fetch('https://formspree.io/f/xrewrgrv', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(form)
  })

  if (res.ok) {
    form.reset()
    alert('Message sent. We will get back to you within one business day.')
  } else {
    alert('Something went wrong. Please email us directly at panhive.io@gmail.com')
  }
}

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div
          ref={headerRef}
          className={`contact__header fade-up ${headerInView ? 'is-visible' : ''}`}
        >
          <div className="contact__eyebrow">Contact</div>
          <h2 className="contact__headline">Let's find your PM.</h2>
          <p className="contact__subhead">Pick whichever option works for you.</p>
        </div>

        <div ref={optionsRef} className="contact__options">
          <div className={`contact__option fade-up delay-1 ${optionsInView ? 'is-visible' : ''}`}>
            <h3 className="contact__option-title">Book a call</h3>
            <p className="contact__option-description">
              Schedule a 30-minute intro call. We'll talk through your need and whether Panhive is the right fit.
            </p>
            <a
              href="https://calendly.com/barakatakinmoyero/panhive-pm-intern-interview"
              target="_blank"
              rel="noreferrer"
              className="contact__btn contact__btn--primary"
            >
              Book on Calendly
            </a>
          </div>

          <div className="contact__divider" />

          <div className={`contact__option fade-up delay-2 ${optionsInView ? 'is-visible' : ''}`}>
            <h3 className="contact__option-title">Send a message</h3>
            <p className="contact__option-description">
              Prefer to write it out? Fill this in and we'll get back to you within one business day.
            </p>
            <form className="contact__form" onSubmit={handleSubmit}>
              <input className="contact__input" type="text" name="name" placeholder="Your name" required />
              <input className="contact__input" type="text" name="company" placeholder="Company" required />
              <textarea className="contact__input contact__textarea" name="message" placeholder="Tell us about the PM role you need to fill" required />
              <button type="submit" className="contact__btn contact__btn--primary">Send message</button>
            </form>
          </div>

          <div className="contact__divider" />

          <div className={`contact__option fade-up delay-3 ${optionsInView ? 'is-visible' : ''}`}>
            <h3 className="contact__option-title">Email directly</h3>
            <p className="contact__option-description">We read everything.</p>
            <a href="mailto:panhive.io@gmail.com" className="contact__btn contact__btn--ghost">
              panhive.io@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}