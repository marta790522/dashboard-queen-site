import { ArrowRight, BarChart3, Crown, Database, GitBranch, Layers, RefreshCw, ShieldCheck, Sparkles, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Salesforce Administration',
    text: 'Ongoing Salesforce support for growing teams that need clean configuration, better adoption, and less chaos.',
    icon: Database,
  },
  {
    title: 'Reporting & Dashboards',
    text: 'Executive dashboards, pipeline visibility, forecasting reports, and KPIs leadership can actually trust.',
    icon: BarChart3,
  },
  {
    title: 'Process Automation',
    text: 'Salesforce Flows, approvals, routing, reminders, and lifecycle automation that reduce manual work.',
    icon: Workflow,
  },
  {
    title: 'Revenue Operations',
    text: 'CRM processes that connect sales, marketing, customer success, and leadership around the same data.',
    icon: GitBranch,
  },
];

const projects = [
  {
    title: 'RFP Management System',
    metric: '+30% win rate',
    text: 'Moved RFP tracking from spreadsheets into Salesforce with ownership, stages, reporting, and executive visibility.',
  },
  {
    title: 'Renewal Automation',
    metric: '180-day visibility',
    text: 'Built a renewal process that creates opportunities before contract expiration, assigns CSM ownership, copies products, and triggers notifications.',
  },
  {
    title: 'Deal Registration',
    metric: 'Partner-ready process',
    text: 'Designed a Salesforce deal registration flow with web intake, approvals, partner notifications, and opportunity creation.',
  },
  {
    title: 'Event Lead Capture',
    metric: 'Real-time lead intake',
    text: 'Created a tablet-based event process that captured leads directly into Salesforce during conferences and trade shows.',
  },
  {
    title: 'Opportunity Revisit Program',
    metric: 'Lost deals revived',
    text: 'Built reminders and reports around closed-lost opportunities that should be revisited after 6 or 9 months.',
  },
  {
    title: 'Executive Forecasting Dashboards',
    metric: '+25% forecast accuracy',
    text: 'Improved leadership visibility into pipeline, deal movement, and sales performance with practical Salesforce reporting.',
  },
];

const stats = [
  ['10+', 'Years in Salesforce & RevOps'],
  ['1000+', 'Dashboards and reports built'],
  ['30%', 'RFP win rate improvement'],
  ['50%', 'CSM adoption improvement'],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav">
          <div className="brand">
  <Crown size={24} />
  <div>
    <div>Dashboard Queen</div>
  </div>
</div>
          <div className="navLinks">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact" className="navCta">Contact</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow"><Sparkles size={16}/> Salesforce & RevOps Consulting</p>
            <h1>Too many CRMs create work instead of supporting it.</h1>
            <p className="heroText">
  I help growing companies turn Salesforce into a system that supports revenue growth, operational efficiency, and better decisions.
</p>
            <div className="heroActions">
              <a className="button primary" href="#contact">Let’s Fix Your Salesforce <ArrowRight size={18}/></a>
              <a className="button secondary" href="#projects">View Projects</a>
            </div>
          </div>

<div className="queenCard">
<img
  src="/dashboard-queen-hero.png"
  alt="Marta Szymanska - Dashboard Queen"
  style={{
    width: "110%",
    marginLeft: "-6%",
    marginTop: "-4%",
    borderRadius: "24px",
    display: "block"
  }}
/>
 </div>
</div>
 </section>

      <section className="stats">
        {stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="services">
        <div className="sectionHeader">
          <p className="eyebrow">What I do</p>
          <h2>Practical Salesforce support without corporate theater.</h2>
          <p>I focus on the work that makes Salesforce cleaner, faster, and more useful for the people who depend on it every day.</p>
        </div>
        <div className="cards four">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="card" key={service.title}>
                <Icon size={30}/>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section dark" id="projects">
        <div className="sectionHeader">
          <p className="eyebrow">Portfolio</p>
          <h2>Real projects. Real business problems.</h2>
          <p>Not just fields, flows, and dashboards. These are operational systems built to solve specific problems.</p>
        </div>
        <div className="cards three">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <span>{project.metric}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>
<section className="section" id="recommendations">
  <div className="sectionHeader">
    <p className="eyebrow">Recommendations</p>
    <h2>Recommendations from managers and executives</h2>
  </div>

  <div className="testimonialGrid">

    <div className="testimonialCard">
      <p>
  "Her knowledge of Salesforce, data management, and sales enablement has been a tremendous value to our company. Marta is always ready to help and consistently delivers with a smile."
</p>
<strong>Brent Frazier</strong>
<span>Director of Sales Operations, Runbeck ELection Services</span>
    </div>

    <div className="testimonialCard">
      <p>
  "Marta is a high-energy Salesforce wizard. In a short period of time, she transformed our sales reporting and built great relationships across sales and marketing teams."
</p>
<strong>Ashish Nagar</strong>
<span>Founder & CEO, Level AI</span>
    </div>

    <div className="testimonialCard">
     <p>
  "Marta consistently delivers high-quality work on time. She brings professionalism, enthusiasm, and drive to every project. She is a fantastic team member and a pleasure to work with."
</p>
<strong>Matt Hadreas</strong>
<span>RevOps & GTM Leader, Tempered.io</span>
    </div>

  </div>

  <div style={{ textAlign: "center", marginTop: "40px" }}>
    <a
      className="button primary"
      href="https://www.linkedin.com/in/marta-s-revops"
      target="_blank"
    >
      See All LinkedIn Recommendations
    </a>
  </div>
</section>
      <section className="section split" id="about">
        <div>
          <p className="eyebrow">Meet Marta</p>
          <h2>Salesforce Administrator. Revenue Operations Partner. Dashboard Queen.</h2>
<p>
Most companies don't need more Salesforce.
</p>

<p>
They need Salesforce that actually helps people do their jobs.
Too many CRM systems become a collection of fields, reports, and processes that create work instead of supporting it.
</p>

<p>
That's where I come in.
</p>

<p>
For more than 10 years, I've helped sales, marketing, customer success, and leadership teams simplify processes, improve reporting, automate repetitive work, and increase CRM adoption.
</p>

<p>
My goal is simple: build systems that people actually want to use and that leaders can trust when making decisions.
</p>
        </div>
        <div className="aboutBox">
  <ShieldCheck size={34}/>
  <h3>Best fit</h3>

  <p>
    Growing teams that need Salesforce support, better reporting,
    process cleanup, and practical RevOps execution without hiring a
    full-time internal admin team.
  </p>

  <p>
    <strong>Salesforce Certified Administrator</strong><br />
    10+ years of Salesforce and RevOps experience
  </p>
</div>
      </section>

      <section className="section process">
        <div className="sectionHeader">
          <p className="eyebrow">How it works</p>
          <h2>Clean process. Clear priorities. Useful system.</h2>
        </div>
        <div className="steps">
          <div><Layers/><h3>Assess</h3><p>Review your Salesforce setup, business processes, reporting, and user adoption to identify what is slowing the team down.</p></div>
          <div><RefreshCw/><h3>Optimize</h3><p>CSimplify processes, improve automation, and remove friction that prevents adoption.</p></div>
          <div><BarChart3/><h3>Measure</h3><p>Build dashboards that help leaders understand performance and make better decisions.</p></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Ready?</p>
        <h2>Book a Free Salesforce Review</h2>
        <p>Need help with Salesforce administration, automation, reporting, or RevOps process design?</p>
        <div className="contactActions">
          <a className="button primary" href="mailto:marta@fancymissy.com">Email Marta</a>
          <a className="button secondary" href="https://www.linkedin.com/in/marta-s-revops/">Connect on LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
