export default function RFPCaseStudy() {
  return (
    <main style={{ background: "#fff8f6", color: "#23151e" }}>
      <section style={heroSection}>
        <p style={eyebrow}>👑 Dashboard Queen Case Study</p>

        <h1 style={heroTitle}>The RFP Project</h1>

        <p style={heroText}>
          How a messy spreadsheet-based RFP process became a scalable Salesforce
          system that improved ownership, visibility, and win rate.
        </p>

        <div style={heroStats}>
          <div style={statBox}>
            <strong style={statValue}>+30%</strong>
            <span style={statLabel}>RFP win rate improvement</span>
          </div>

          <div style={statBox}>
            <strong style={statValue}>Clear ownership</strong>
            <span style={statLabel}>No more guessing who owns the next step</span>
          </div>

          <div style={statBox}>
            <strong style={statValue}>Better visibility</strong>
            <span style={statLabel}>Leadership could finally see what was working</span>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={eyebrow}>Project Story</p>

        <h2 style={sectionTitle}>
          From spreadsheet chaos to a Salesforce success story.
        </h2>

        <div style={comicFrame}>
          <img
            src="/case-studies/rfp-comic.png"
            alt="Dashboard Queen RFP Project comic case study"
            style={comicImage}
          />
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={eyebrow}>STAR Case Study</p>

        <h2 style={sectionTitle}>
          A practical rebuild of an RFP process that was slowing the team down.
        </h2>

        <div style={starGrid}>
          <div style={cardStyle}>
            <h3 style={cardTitle}>Situation</h3>
            <p style={cardText}>
              The RFP process lived in spreadsheets. Ownership was unclear,
              deadlines were missed, and leadership had limited visibility into
              why deals were won or lost.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Task</h3>
            <p style={cardText}>
              Build a scalable Salesforce process that made RFP work structured,
              measurable, and easier for sales teams to manage.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Action</h3>
            <p style={cardText}>
              I rebuilt the workflow inside Salesforce with custom tracking,
              defined stages, ownership rules, approval flow, reporting, and
              leadership dashboards.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Result</h3>
            <p style={cardText}>
              The process became cleaner, more consistent, and easier to manage,
              resulting in a 30% increase in RFP win rate.
            </p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={impactBox}>
          <p style={impactEyebrow}>Business Impact</p>

          <h2 style={impactTitle}>+30% RFP Win Rate</h2>

          <p style={impactText}>
            No new tools. No additional headcount. Just a Salesforce process
            designed around how the team actually worked.
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={eyebrow}>Dashboard Queen Takeaway</p>

        <h2 style={sectionTitle}>
          What looked like a sales problem was actually a process problem.
        </h2>

        <p style={bodyText}>
          Salesforce does not create value just because data lives inside it.
          It creates value when the system reflects how the business actually
          works.
        </p>

        <p style={bodyText}>
          Better process created better data. Better data enabled better
          decisions.
        </p>
      </section>

      <section style={ctaSection}>
        <p style={ctaEyebrow}>Need something similar?</p>

        <h2 style={ctaTitle}>
          Let’s build a Salesforce process your team actually uses.
        </h2>

        <p style={ctaText}>
          If your CRM creates more work than clarity, I can help identify what is
          broken and design a better way forward.
        </p>

        <div style={ctaButtons}>
          <a
  href="mailto:marta@fancymissy.com?subject=Free%20Salesforce%20Assessment"
  style={ctaButton}
>
  Book a Free Assessment
</a>
</main>
  );
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
  fontSize: "clamp(54px, 8vw, 88px)",
  lineHeight: ".92",
  margin: "0 0 22px",
};

const heroText = {
  fontSize: "24px",
  lineHeight: "1.45",
  maxWidth: "760px",
  color: "#725c68",
  marginBottom: "42px",
};

const heroStats = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "18px",
};

const statBox = {
  background: "white",
  borderRadius: "24px",
  padding: "24px",
  boxShadow: "0 12px 40px rgba(74, 24, 53, .08)",
};

const statValue = {
  display: "block",
  color: "#d92e83",
  fontSize: "24px",
  fontWeight: 900,
  marginBottom: "8px",
};

const statLabel = {
  color: "#725c68",
  fontSize: "16px",
  lineHeight: "1.45",
};

const sectionStyle = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "52px 24px",
};

const sectionTitle = {
  fontSize: "clamp(36px, 5vw, 58px)",
  lineHeight: "1",
  maxWidth: "900px",
  margin: "0 0 34px",
};

const comicFrame = {
  background: "white",
  borderRadius: "32px",
  padding: "18px",
  boxShadow: "0 24px 70px rgba(74, 24, 53, .16)",
};

const comicImage = {
  width: "100%",
  display: "block",
  borderRadius: "22px",
};

const starGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "22px",
};

const cardStyle = {
  background: "white",
  borderRadius: "26px",
  padding: "30px",
  boxShadow: "0 18px 50px rgba(74, 24, 53, .10)",
};

const cardTitle = {
  fontSize: "26px",
  margin: "0 0 12px",
};

const cardText = {
  color: "#725c68",
  fontSize: "18px",
  lineHeight: "1.65",
  margin: 0,
};

const impactBox = {
  background: "linear-gradient(135deg, #241222, #5a1742)",
  color: "white",
  borderRadius: "34px",
  padding: "44px",
  boxShadow: "0 28px 80px rgba(74, 24, 53, .22)",
};

const impactEyebrow = {
  color: "#ffcf57",
  fontWeight: 900,
  textTransform: "uppercase" as const,
  letterSpacing: ".1em",
  marginBottom: "12px",
};

const impactTitle = {
  fontSize: "clamp(42px, 6vw, 72px)",
  lineHeight: "1",
  margin: "0 0 18px",
};

const impactText = {
  fontSize: "21px",
  lineHeight: "1.6",
  color: "#f7ddea",
  maxWidth: "760px",
};

const bodyText = {
  fontSize: "21px",
  lineHeight: "1.7",
  color: "#725c68",
  maxWidth: "850px",
};

const ctaSection = {
  background: "linear-gradient(135deg, #241222, #5a1742)",
  color: "white",
  padding: "80px 24px",
  textAlign: "center" as const,
};

const ctaEyebrow = {
  color: "#ffcf57",
  fontWeight: 900,
  textTransform: "uppercase" as const,
  letterSpacing: ".12em",
};

const ctaTitle = {
  fontSize: "clamp(42px, 6vw, 72px)",
  lineHeight: "1",
  margin: "18px auto",
  maxWidth: "850px",
};

const ctaText = {
  fontSize: "21px",
  maxWidth: "720px",
  margin: "0 auto 34px",
  color: "#f7ddea",
  lineHeight: "1.6",
};

const ctaButtons = {
  display: "flex",
  gap: "14px",
  justifyContent: "center",
  flexWrap: "wrap" as const,
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
