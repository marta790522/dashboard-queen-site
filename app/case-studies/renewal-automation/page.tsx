export default function RenewalAutomationCaseStudy() {
  return (
    <main style={{ background: "#fff8f6", color: "#23151e" }}>
      {/* HERO */}

      <section style={heroSection}>
        <p style={eyebrow}>👑 Dashboard Queen Case Study</p>

        <h1 style={heroTitle}>
          The Renewal
          <br />
          Engine
        </h1>

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

      {/* PROJECT STORY */}

      <section style={sectionStyle}>
        <p style={eyebrow}>Project Story</p>

        <h2 style={sectionTitle}>
          From manual tracking to predictable renewals.
        </h2>

        <div style={comicPlaceholder}>
          Renewal Comic Coming Here
        </div>
      </section>

      {/* STAR */}

      <section style={sectionStyle}>
        <p style={eyebrow}>STAR Case Study</p>

        <h2 style={sectionTitle}>
          A practical rebuild of a renewal process that relied on spreadsheets
          and calendar reminders.
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
              renewals early and provided leadership visibility into future
              revenue.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Action</h3>

            <p style={cardText}>
              Built a Salesforce Flow that automatically created Renewal
              Opportunities 120 days before contract expiration, assigned them
              to the correct owner, and triggered notifications and reporting.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Result</h3>

            <p style={cardText}>
              Renewals became predictable, measurable, and easier to manage
              across the entire organization.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I BUILT */}

      <section style={sectionStyle}>
        <p style={eyebrow}>What I Built</p>

        <h2 style={sectionTitle}>
          Automation that protected existing revenue.
        </h2>

        <div style={buildGrid}>
          <div style={buildCard}>
            <h3 style={buildTitle}>Automatic Renewal Opportunity</h3>

            <p style={buildText}>
              Opportunities created automatically 120 days before contract
              expiration.
            </p>
          </div>

          <div style={buildCard}>
            <h3 style={buildTitle}>Owner Assignment</h3>

            <p style={buildText}>
              Renewals assigned directly to the appropriate Account Manager.
            </p>
          </div>

          <div style={buildCard}>
            <h3 style={buildTitle}>Automated Notifications</h3>

            <p style={buildText}>
              Consistent reminders and visibility without manual follow-up.
            </p>
          </div>

          <div style={buildCard}>
            <h3 style={buildTitle}>Forecast Reporting</h3>

            <p style={buildText}>
              Leadership could see upcoming renewal revenue months in advance.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}

      <section style={sectionStyle}>
        <div style={impactBox}>
          <p style={impactEyebrow}>The Result</p>

          <h2 style={impactTitle}>120 Days Earlier</h2>

          <p style={impactText}>
            Instead of reacting to contracts that were about to expire, the team
            could proactively manage customer conversations, identify risks
            earlier, and forecast renewal revenue with confidence.
          </p>
        </div>
      </section>

      {/* TAKEAWAY */}

      <section style={sectionStyle}>
        <p style={eyebrow}>Dashboard Queen Takeaway</p>

        <h2 style={sectionTitle}>
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

      {/* CTA */}

      <section style={ctaSection}>
        <p style={ctaEyebrow}>Need a better renewal process?</p>

        <h2 style={ctaTitle}>
          Let’s build a Salesforce process your team actually uses.
        </h2>

        <p style={ctaText}>
          If your CRM relies on spreadsheets and calendar reminders, there is a
          better way.
        </p>

        <a href="mailto:marta@fancymissy.com" style={ctaButton}>
          Book a Free Assessment
        </a>
      </section>
    </main>
  );
}

/* STYLES */

const heroSection = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "80px 24px 48px",
};

const eyebrow = {
  color: "#d92e83",
  fontWeight: 900,
  textTransform: "uppercase" as const,
  letterSpacing: ".12em",
  marginBottom: "14px",
};

const heroTitle = {
  fontSize: "clamp(58px, 8vw, 90px)",
  lineHeight: ".9",
  margin: "0 0 20px",
};

const heroText = {
  fontSize: "24px",
  maxWidth: "760px",
  color: "#725c68",
  lineHeight: "1.5",
};

const heroStats = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
  marginTop: "40px",
};

const statBox = {
  background: "white",
  padding: "24px",
  borderRadius: "24px",
};

const statValue = {
  display: "block",
  color: "#d92e83",
  fontSize: "24px",
  fontWeight: 900,
};

const statLabel = {
  color: "#725c68",
};

const sectionStyle = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "60px 24px",
};

const sectionTitle = {
  fontSize: "clamp(34px,5vw,58px)",
  lineHeight: "1",
  marginBottom: "30px",
};

const comicPlaceholder = {
  background: "white",
  height: "500px",
  borderRadius: "30px",
  display: "grid",
  placeItems: "center",
  color: "#725c68",
};

const starGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gap: "22px",
};

const cardStyle = {
  background: "white",
  padding: "28px",
  borderRadius: "24px",
};

const cardTitle = {
  fontSize: "24px",
};

const cardText = {
  color: "#725c68",
  lineHeight: "1.7",
};

const buildGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gap: "22px",
};

const buildCard = {
  background: "white",
  padding: "28px",
  borderRadius: "24px",
};

const buildTitle = {
  fontSize: "22px",
};

const buildText = {
  color: "#725c68",
};

const impactBox = {
  background: "linear-gradient(135deg,#241222,#5a1742)",
  color: "white",
  borderRadius: "32px",
  padding: "48px",
};

const impactEyebrow = {
  color: "#ffd36e",
  fontWeight: 900,
};

const impactTitle = {
  fontSize: "clamp(42px,6vw,72px)",
  margin: "12px 0",
};

const impactText = {
  color: "#f7ddea",
  fontSize: "21px",
  lineHeight: "1.7",
};

const bodyText = {
  fontSize: "21px",
  lineHeight: "1.7",
  color: "#725c68",
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
};

const ctaTitle = {
  fontSize: "clamp(42px,6vw,72px)",
};

const ctaText = {
  color: "#f7ddea",
  maxWidth: "700px",
  margin: "0 auto 30px",
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
