import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Lead Capture in Salesforce | Dashboard Queen',
  description:
    'Salesforce Event Lead Capture case study: tablet-based lead collection, real-time Salesforce lead creation, improved event ROI, and lower event technology costs.',
  openGraph: {
    title: 'Event Lead Capture in Salesforce',
    description:
      'Salesforce-native event lead capture process using tablets instead of expensive badge scanners.',
    images: ['/case-studies/event-lead-capture-case-study.png'],
  },
};

export default function EventLeadCaptureCaseStudy() {
  return (
    <main style={{ background: "#fff8f6", color: "#23151e" }}>
      <section style={heroSection}>
        <a href="/" style={backButton}>
          ← Back to Portfolio
        </a>

        <p style={eyebrow}>👑 Dashboard Queen Case Study</p>

        <h1 style={heroTitle}>Event Lead Capture</h1>

        <p style={heroText}>
          A Salesforce-native event lead capture solution that replaced expensive
          badge scanners with a simple tablet-based process connected directly to Salesforce.
        </p>

        <div style={heroStats}>
          <div style={statBox}>
            <strong style={statValue}>Lower Event Costs</strong>
            <span style={statLabel}>
              Reduced reliance on expensive badge scanning solutions
            </span>
          </div>

          <div style={statBox}>
            <strong style={statValue}>Real-Time Leads</strong>
            <span style={statLabel}>
              Leads created instantly during booth conversations
            </span>
          </div>

          <div style={statBox}>
            <strong style={statValue}>Faster Follow-Up</strong>
            <span style={statLabel}>
              Sales teams could act immediately after the event
            </span>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={eyebrow}>Project Story</p>

        <h2 style={sectionTitle}>
          Sometimes the best solution isn't the most expensive one.
        </h2>

        <p style={bodyText}>
          The client attended multiple conferences each year and wanted a more
          affordable alternative to traditional event badge scanners.
        </p>

        <p style={bodyText}>
          Instead of investing in additional hardware, I designed a Salesforce-native
          lead capture process using a tablet and a simple form connected directly
          to Salesforce.
        </p>

        <div
  style={{
    ...comicContainer,
    maxWidth: "700px",
    margin: "40px auto 0",
  }}
>
  <img
    src="/case-studies/event-lead-capture-case-study.png"
    alt="Event Lead Capture Salesforce Case Study"
    style={comicImage}
  />
</div>
      </section>

      <section style={sectionStyle}>
        <p style={eyebrow}>STAR Case Study</p>

        <h2 style={sectionTitle}>
          Turning event conversations into Salesforce leads in real time.
        </h2>

        <div style={starGrid}>
          <div style={cardStyle}>
            <h3 style={cardTitle}>Situation</h3>
            <p style={cardText}>
              The client attended trade shows and industry events but relied on
              costly badge scanners and manual lead imports after each event.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Task</h3>
            <p style={cardText}>
              Create a simpler and more cost-effective process that would capture
              leads directly in Salesforce while improving visibility and data quality.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Action</h3>
            <p style={cardText}>
              Built a tablet-based Salesforce form that allowed reps to capture
              contact information, notes, product interest, and follow-up details
              during booth conversations.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Result</h3>
            <p style={cardText}>
              Leads became instantly available in Salesforce, eliminating manual
              imports and giving leadership immediate visibility into event-generated pipeline.
            </p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={impactBox}>
          <p style={impactEyebrow}>Business Impact</p>

          <h2 style={impactTitle}>Real-Time Event Pipeline Visibility</h2>

          <p style={impactText}>
            Event leads were no longer trapped in spreadsheets or waiting for
            post-event uploads. Salesforce became the single source of truth from
            the moment the conversation happened.
          </p>

          <p style={impactText}>
            The solution improved lead quality, accelerated follow-up, reduced
            administrative work, lowered event technology costs, and provided
            immediate visibility into event-generated pipeline and ROI.
          </p>
        </div>
      </section>

      <section style={ctaSection}>
        <p style={ctaEyebrow}>Salesforce Process Design</p>

        <h2 style={ctaTitle}>
          Need a smarter way to capture event leads?
        </h2>

        <p style={ctaText}>
          I help organizations design practical Salesforce solutions that improve
          data quality, user adoption, reporting, and revenue visibility.
        </p>

        <div style={ctaButtons}>
          <a href="mailto:marta@fancymissy.com" style={ctaButton}>
            Work with Me
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
