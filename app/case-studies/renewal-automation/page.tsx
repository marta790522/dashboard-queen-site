import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Renewal Automation in Salesforce',
  description:
    'Automated renewal opportunity creation, CSM ownership assignment, product copying, notifications, and 180-day visibility into upcoming renewals.',
};
export default function RenewalAutomationCaseStudy() {
  return (
    <main style={{ background: "#fff8f6", color: "#23151e" }}>
     <section style={heroSection}>

  <a href="/" style={backButton}>
    ← Back to Portfolio
  </a>

  <p style={eyebrow}>👑 Dashboard Queen Case Study</p>

  <h1 style={heroTitle}>The Renewal Engine</h1>

        <p style={heroText}>
          How Salesforce stopped contracts from slipping through the cracks and
          turned renewals into a predictable revenue process.
        </p>

        <div style={heroStats}>
          <div style={statBox}>
            <strong style={statValue}>120 Days</strong>
            <span style={statLabel}>Before contract expiration</span>
          </div>

          <div style={statBox}>
            <strong style={statValue}>Automated</strong>
            <span style={statLabel}>No manual tracking required</span>
          </div>

          <div style={statBox}>
            <strong style={statValue}>Predictable</strong>
            <span style={statLabel}>Renewal revenue visibility</span>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
  <div style={comicContainer}>
    <img
      src="/case-studies/renewal-engine-comic.png"
      alt="Renewal Engine comic case study"
      style={comicImage}
    />
  </div>
</section>

      <section style={sectionStyle}>
        <p style={eyebrow}>How It Worked</p>

        <h2 style={sectionTitle}>
          How Salesforce turned manual renewals into a predictable process.
        </h2>

        <div style={starGrid}>
          <div style={cardStyle}>
            <h3 style={cardTitle}>Situation</h3>
            <p style={cardText}>
              Customer contracts expired every month, but renewal tracking was
              managed through spreadsheets, Outlook reminders, and individual
              account manager processes.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Task</h3>
            <p style={cardText}>
              Create a scalable Salesforce process that surfaced upcoming
              renewals early and gave leadership visibility into future revenue.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Action</h3>
            <p style={cardText}>
              Built a Salesforce Flow that automatically created Renewal
              Opportunities 120 days before contract expiration, assigned
              ownership, triggered notifications, and supported reporting.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Result</h3>
            <p style={cardText}>
              Renewals became predictable, measurable, and easier to manage
              across the organization.
            </p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={eyebrow}>What I Built</p>

        <h2 style={sectionTitle}>
          Automation that protected existing revenue.
        </h2>

        <div style={buildGrid}>
          <div style={buildCard}>
            <h3 style={buildTitle}>Auto-Created Renewals</h3>
            <p style={buildText}>
              Renewal Opportunities created automatically 120 days before
              contract expiration.
            </p>
          </div>

          <div style={buildCard}>
            <h3 style={buildTitle}>Owner Assignment</h3>
            <p style={buildText}>
              Renewals routed to the right Account Manager or CSM without manual
              handoff.
            </p>
          </div>

          <div style={buildCard}>
            <h3 style={buildTitle}>Proactive Alerts</h3>
            <p style={buildText}>
              Automated reminders kept the team ahead of renewal conversations.
            </p>
          </div>

          <div style={buildCard}>
            <h3 style={buildTitle}>Renewal Forecasting</h3>
            <p style={buildText}>
              Leadership could see upcoming renewal revenue months in advance.
            </p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={impactBox}>
          <p style={impactEyebrow}>The Result</p>

          <h2 style={impactTitle}>120 Days Earlier</h2>

          <p style={impactText}>
            Instead of reacting to expiring contracts, the team could
            proactively manage customer conversations, identify risks earlier,
            and forecast renewal revenue with confidence.
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={eyebrow}>Dashboard Queen Takeaway</p>

        <h2 style={takeawayTitle}>
          Revenue growth is important.
          <br />
          Revenue retention is essential.
        </h2>

        <p style={bodyText}>
          The cheapest customer to acquire is the one you already have.
        </p>

        <p style={bodyText}>
          Good RevOps is not only about creating pipeline. It is also about
          protecting the revenue that already exists.
        </p>
      </section>

      <section style={ctaSection}>
        <p style={ctaEyebrow}>Need a better renewal process?</p>

        <h2 style={ctaTitle}>
          Let’s turn renewals into a predictable revenue engine.
        </h2>

        <p style={ctaText}>
          If contracts are still tracked through spreadsheets, Outlook
          reminders, or tribal knowledge, there is a better way.
        </p>

        <a
  href="mailto:marta@fancymissy.com?subject=Free%20Salesforce%20Assessment"
  style={ctaButton}
>
  Book a Free Assessment
</a>
      </section>
      <section style={sectionStyle}>
  <p style={eyebrow}>Related Case Study</p>

  <div style={cardStyle}>
    <h3 style={cardTitle}>The RFP Project</h3>

    <p style={cardText}>
      How a messy spreadsheet-based RFP process became a scalable
      Salesforce system with clear ownership, visibility, and improved
      win rates.
    </p>

    <a
      href="/case-studies/rfp-management"
      style={{
        color: "#d92e83",
        fontWeight: 700,
        textDecoration: "none",
      }}
    >
      View Case Study →
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
