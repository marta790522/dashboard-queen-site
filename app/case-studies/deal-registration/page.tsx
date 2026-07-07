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

        <h1 style={heroTitle}>Partner Deal Registration</h1>

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

  <div style={comicContainer}>
    <img
      src="/case-studies/partner-deal-registration-case-study.png"
      alt="Partner Deal Registration Salesforce process infographic"
      style={comicImage}
    />
  </div>
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

    <h2 style={impactTitle}>100% Visibility Into Partner-Sourced Pipeline</h2>

    <p style={impactText}>
      A dedicated Deal Registration process helped transform partner submissions
      from isolated requests into a measurable revenue channel.
    </p>

    <p style={impactText}>
      It improved visibility into partner-generated opportunities, reduced manual
      follow-up, supported cleaner forecasting, and enabled partner growth through
      better visibility into cross-sell and expansion opportunities.
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
const heroSection = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "80px 24px 44px",
};

const eyebrow = {
  color: "#d92e83",
  fontWeight: 900,
  textTransform: "uppercase" as const,
  letterSpacing: ".12em",
  marginBottom: "14px",
};

const heroTitle = {
  fontSize: "clamp(58px, 8vw, 92px)",
  lineHeight: ".9",
  margin: "0 0 22px",
};

const heroText = {
  fontSize: "24px",
  maxWidth: "780px",
  color: "#725c68",
  lineHeight: "1.5",
  marginBottom: "40px",
};

const heroStats = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
};

const statBox = {
  background: "white",
  padding: "24px",
  borderRadius: "24px",
  boxShadow: "0 14px 44px rgba(74,24,53,.08)",
};

const statValue = {
  display: "block",
  color: "#d92e83",
  fontSize: "25px",
  fontWeight: 900,
  marginBottom: "6px",
};

const statLabel = {
  color: "#725c68",
  fontSize: "16px",
  lineHeight: "1.45",
};

const sectionStyle = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "54px 24px",
};

const sectionTitle = {
  fontSize: "clamp(36px, 5vw, 58px)",
  lineHeight: "1",
  margin: "0 0 34px",
  maxWidth: "920px",
};

const comicContainer = {
  background: "#ffffff",
  borderRadius: "34px",
  padding: "18px",
  boxShadow: "0 18px 60px rgba(74,24,53,.10)",
};

const comicImage = {
  width: "100%",
  display: "block",
  borderRadius: "20px",
};

const starGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "22px",
};

const cardStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "26px",
  boxShadow: "0 18px 50px rgba(74,24,53,.08)",
};

const cardTitle = {
  fontSize: "25px",
  margin: "0 0 12px",
};

const cardText = {
  color: "#725c68",
  fontSize: "18px",
  lineHeight: "1.65",
  margin: 0,
};

const buildGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "22px",
};

const buildCard = {
  background: "white",
  padding: "30px",
  borderRadius: "26px",
  boxShadow: "0 18px 50px rgba(74,24,53,.08)",
};

const buildTitle = {
  fontSize: "24px",
  margin: "0 0 12px",
};

const buildText = {
  color: "#725c68",
  fontSize: "18px",
  lineHeight: "1.6",
  margin: 0,
};

const impactBox = {
  background: "linear-gradient(135deg,#241222,#5a1742)",
  color: "white",
  borderRadius: "34px",
  padding: "48px",
  boxShadow: "0 28px 80px rgba(74,24,53,.22)",
};

const impactEyebrow = {
  color: "#ffd36e",
  fontWeight: 900,
  textTransform: "uppercase" as const,
  letterSpacing: ".1em",
  marginBottom: "12px",
};

const impactTitle = {
  fontSize: "clamp(46px, 7vw, 78px)",
  lineHeight: "1",
  margin: "0 0 18px",
};

const impactText = {
  color: "#f7ddea",
  fontSize: "22px",
  lineHeight: "1.65",
  maxWidth: "900px",
};

const takeawayTitle = {
  fontSize: "clamp(38px, 5vw, 64px)",
  lineHeight: "1",
  margin: "0 0 24px",
  maxWidth: "980px",
};

const bodyText = {
  fontSize: "21px",
  lineHeight: "1.7",
  color: "#725c68",
  maxWidth: "880px",
};

const ctaSection = {
  background: "linear-gradient(135deg,#241222,#5a1742)",
  color: "white",
  textAlign: "center" as const,
  padding: "90px 24px",
};

const ctaEyebrow = {
  color: "#ffd36e",
  fontWeight: 900,
  textTransform: "uppercase" as const,
  letterSpacing: ".1em",
  marginBottom: "18px",
};

const ctaTitle = {
  fontSize: "clamp(42px, 6vw, 72px)",
  lineHeight: "1",
  maxWidth: "950px",
  margin: "0 auto 24px",
};

const ctaText = {
  color: "#f7ddea",
  maxWidth: "760px",
  margin: "0 auto 34px",
  fontSize: "21px",
  lineHeight: "1.6",
};

const ctaButton = {
  display: "inline-block",
  background: "#d92e83",
  color: "white",
  padding: "16px 28px",
  borderRadius: "999px",
  fontWeight: 900,
  textDecoration: "none",
};
const secondaryButton = {
  display: "inline-block",
  background: "transparent",
  color: "white",
  padding: "16px 28px",
  borderRadius: "999px",
  fontWeight: 900,
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,.45)",
};

const ctaButtons = {
  display: "flex",
  gap: "14px",
  justifyContent: "center",
  flexWrap: "wrap" as const,
};
const backButton = {
  display: "inline-flex",
  alignItems: "center",
  padding: "10px 16px",
  borderRadius: "999px",
  background: "white",
  border: "1px solid rgba(35,21,30,.12)",
  color: "#23151e",
  fontWeight: 700,
  textDecoration: "none",
  marginBottom: "24px",
  transition: "all .2s ease",
};
