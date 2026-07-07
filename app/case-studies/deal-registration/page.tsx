import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deal Registration in Salesforce',
  description:
    'How to build a scalable Deal Registration process in Salesforce with a custom object, approval workflow, partner notifications, Opportunity creation, and reporting.',
};

export default function DealRegistrationCaseStudy() {
  return (
    <main style={{ background: "#fff8f6", color: "#23151e" }}>
      <section style={heroSection}>
        <a href="/" style={backButton}>
          ← Back to Portfolio
        </a>

        <p style={eyebrow}>👑 Dashboard Queen Case Study</p>

        <h1 style={heroTitle}>Deal Registration</h1>

        <p style={heroText}>
          How a partner-submitted deal process became a scalable Salesforce system
          with approval governance, automated notifications, and better pipeline visibility.
        </p>

        <div style={heroStats}>
          <div style={statBox}>
            <strong style={statValue}>Cleaner process</strong>
            <span style={statLabel}>No more registrations buried in emails or spreadsheets</span>
          </div>

          <div style={statBox}>
            <strong style={statValue}>Better partner experience</strong>
            <span style={statLabel}>Partners receive consistent approval or rejection updates</span>
          </div>

          <div style={statBox}>
            <strong style={statValue}>Pipeline visibility</strong>
            <span style={statLabel}>Leadership can track partner-sourced revenue</span>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={eyebrow}>Project Story</p>

        <h2 style={sectionTitle}>
          From a simple form to a real partner sales process.
        </h2>

        <p style={bodyText}>
          Deal Registration is often treated like a website form. In reality, it is a business
          process that connects partner experience, sales ownership, approval governance,
          Opportunity creation, and reporting.
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={eyebrow}>STAR Case Study</p>

        <h2 style={sectionTitle}>
          A practical Salesforce build for managing partner-submitted opportunities.
        </h2>

        <div style={starGrid}>
          <div style={cardStyle}>
            <h3 style={cardTitle}>Situation</h3>
            <p style={cardText}>
              Partners were submitting potential deals, but the process lacked structure.
              Sales teams needed a better way to review registrations, avoid confusion,
              and track partner-generated pipeline.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Task</h3>
            <p style={cardText}>
              Build a scalable Salesforce process that captured Deal Registration requests,
              routed them for review, notified partners, and created Opportunities when approved.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Action</h3>
            <p style={cardText}>
              I designed a dedicated Deal Registration custom object with key fields,
              approval logic, automated emails, Opportunity creation, and reporting for
              partner-sourced pipeline.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Result</h3>
            <p style={cardText}>
              The process became cleaner, easier to manage, and more transparent for partners,
              sales teams, and leadership.
            </p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={impactBox}>
          <p style={impactEyebrow}>Business Impact</p>

          <h2 style={impactTitle}>Better Partner Pipeline Visibility</h2>

          <p style={impactText}>
            A dedicated Deal Registration process helped standardize partner submissions,
            reduce manual follow-up, improve approval visibility, and create cleaner reporting
            on partner-generated revenue.
          </p>
        </div>
      </section>

      <section style={ctaSection}>
        <p style={ctaEyebrow}>Salesforce Process Design</p>

        <h2 style={ctaTitle}>Need a cleaner partner sales process?</h2>

        <p style={ctaText}>
          I help teams turn messy manual workflows into scalable Salesforce processes
          with better automation, reporting, and user experience.
        </p>

        <div style={ctaButtons}>
          <a href="mailto:marta@fancymissy.com" style={ctaButton}>
            Work with me
          </a>

          <a href="/" style={secondaryButton}>
            Back to Portfolio
          </a>
        </div>
      </section>
    </main>
  );
}
