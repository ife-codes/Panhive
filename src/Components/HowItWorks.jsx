import './HowItWorks.css'
import useInView from '../hooks/useInView'

const steps = [
  {
    number: '01',
    title: 'You brief us',
    description: 'Tell us about your product, your team, and the gap you are trying to fill. No forms — just a direct conversation.',
  },
  {
    number: '02',
    title: 'We clarify the role',
    description: 'Before any matching happens, we run an advisory session to define exactly what kind of PM you need. Most companies skip this. We do not.',
  },
  {
    number: '03',
    title: 'We match from our network',
    description: 'We pull from a vetted internal network of PMs. Every person in it has been assessed by us. You do not sift through applications.',
  },
  {
    number: '04',
    title: 'You review and move',
    description: 'You receive a tight shortlist — not a pile. Review, meet, and make a decision fast.',
  },
]

function Step({ step, delay }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`hiw__step fade-up delay-${delay} ${inView ? 'is-visible' : ''}`}
    >
      <div className="hiw__number">{step.number}</div>
      <div className="hiw__content">
        <h3 className="hiw__title">{step.title}</h3>
        <p className="hiw__description">{step.description}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [headerRef, headerInView] = useInView()

  return (
    <section className="hiw section">
      <div className="container">
        <div
          ref={headerRef}
          className={`hiw__header fade-up ${headerInView ? 'is-visible' : ''}`}
        >
          <div className="hiw__eyebrow">How it works</div>
          <h2 className="hiw__headline">From brief to match,<br />without the noise.</h2>
        </div>
        <div className="hiw__steps">
          {steps.map((step, i) => (
            <Step key={step.number} step={step} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}