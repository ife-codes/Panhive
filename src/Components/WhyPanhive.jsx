import './WhyPanhive.css'
import useInView from '../hooks/UseInView'

const reasons = [
  {
    title: 'Advisory before matching',
    description: 'We help you define the role before we fill it. Most hiring failures start with a badly scoped brief. We fix that first.',
  },
  {
    title: 'Vetted network, not a database',
    description: 'Every PM in our network has been assessed by us directly. You are not searching a pool — we are making a recommendation.',
  },
  {
    title: 'We own the match',
    description: 'Panhive takes responsibility for the fit. This is not a referral. If the match is wrong, that is on us.',
  },
  {
    title: 'Faster time to hire',
    description: 'No job posts, no inbound volume, no filtering. You go from brief to shortlist without the drag of a traditional hiring process.',
  },
]

export default function WhyPanhive() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section className="why section">
      <div className="container">
        <div
          ref={headerRef}
          className={`why__header fade-up ${headerInView ? 'is-visible' : ''}`}
        >
          <div className="why__eyebrow">Why Panhive</div>
          <h2 className="why__headline">A consultancy, not a middleman.</h2>
          <p className="why__subhead">
            Recruiters find candidates. Panhive takes responsibility for the match.
            That distinction changes everything about how we work.
          </p>
        </div>
        <div ref={gridRef} className="why__grid">
          {reasons.map((reason, i) => (
            <div
              className={`why__card fade-up delay-${i + 1} ${gridInView ? 'is-visible' : ''}`}
              key={reason.title}
            >
              <div className="why__card-accent" />
              <h3 className="why__card-title">{reason.title}</h3>
              <p className="why__card-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}