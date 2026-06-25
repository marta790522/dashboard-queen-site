export default function RFPCaseStudy() {
  return (
    <main style={{ background: "#fff8f6", color: "#23151e" }}>
      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "80px 24px 40px" }}>
        <p style={{ color: "#d92e83", fontWeight: 900, textTransform: "uppercase", letterSpacing: ".12em" }}>
          👑 Dashboard Queen Case Study
        </p>

        <h1 style={{ fontSize: "clamp(56px, 8vw, 96px)", lineHeight: ".9", maxWidth: "900px", margin: "20px 0" }}>
          The RFP Project
        </h1>

        <p style={{ fontSize: "26px", lineHeight: "1.4", maxWidth: "760px", color: "#725c68" }}>
          How a messy spreadsheet-based RFP process became a scalable Salesforce system that improved visibility, ownership, and win rate.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px", marginTop: "42px" }}>
          <div style={statBox}>
            <strong>+30%</strong>
            <span>RFP win rate improvement</span>
          </div>
          <div style={statBox}>
            <strong>Clear ownership</strong>
            <span>No more guessing who owns the next step</span>
          </div>
          <div style={statBox}>
            <strong>Executive visibility</strong>
            <span>Leadership could finally see what was working</span>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>The Challenge</h2>
        <p style={pStyle}>
          The RFP workflow was inconsistent, manual, and difficult to measure. Data lived in spreadsheets, ownership was unclear, deadlines were easy to miss, and leadership had limited visibility into why deals were won or lost.
        </p>
        <p style={pStyle}>
          What looked like a sales performance issue was actually a system design problem.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>What I Built</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          <div style={cardStyle}>
            <h3>Custom RFP Process</h3>
            <p>Created a structured Salesforce process to track RFPs from intake through final outcome.</p>
          </div>

          <div style={cardStyle}>
            <h3>Ownership & Stages</h3>
            <p>Defined clear ownership, stages, and exit criteria so teams knew exactly what needed to happen next.</p>
          </div>

          <div style={cardStyle}>
            <h3>Approval Workflow</h3>
            <p>Built workflow structure to reduce delays, missed handoffs, and inconsistent review steps.</p>
          </div>

          <div style={cardStyle}>
            <h3>Executive Reporting</h3>
            <p>Created dashboards and reports showing RFP volume, status, outcomes, and performance trends.</p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>The Result</h2>
        <p style={pStyle}>
          The new process gave the team a cleaner way to manage RFPs, improved leadership visibility, and helped create a more consistent, measurable, and scalable sales operation.
        </p>

        <div style={{ background: "#241222", color: "white", borderRadius: "32px", padding: "40px", marginTop: "32px" }}>
          <p style={{ color: "#ffcf57", fontWeight: 900, textTransform: "uppercase", letterSpacing: ".08em" }}>
            Business Impact
          </p>
          <h3 style={{ fontSize: "44px", margin: "10px 0" }}>30% increase in RFP win rate</h3>
          <p style={{ fontSize: "20px", lineHeight: "1.6", color: "#f7ddea" }}>
            Better process created better data. Better data helped leadership make better decisions.
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Dashboard Queen Takeaway</h2>
        <p style={pStyle}>
          Salesforce does not create value just because data lives inside it. It creates value when the system reflects how the business actually works.
        </p>
        <p style={pStyle}>
          In this project, the real win was not just cleaner tracking. It was turning a reactive process into a repeatable system that supported growth.
        </p>
      </section>

      <section style={{ background: "linear-gradient(135deg, #241222, #5a1742)", color: "white", padding: "80px 24px", textAlign: "center" }}>
        <p style={{ color: "#ffcf57", fontWeight: 900, textTransform: "uppercase", letterSpacing: ".12em" }}>
          Need something similar?
        </p>
        <h2 style={{ fontSize: "clamp(42px, 6vw, 72px)", lineHeight: "1", margin: "18px auto", maxWidth: "800px" }}>
          Let’s build a Salesforce process your team actually uses.
        </h2>
        <p style={{ fontSize: "22px", maxWidth: "720px", margin: "0 auto 34px", color: "#f7ddea" }}>
          If your CRM creates more work than clarity, I can help identify what is broken and design a better way forward.
        </p>

        <a
          href="mailto:marta@fancymissy.com"
          style={{
            display: "inline-block",
            background: "#d92e83",
            color: "white",
            padding: "16px 26px",
            borderRadius: "999px",
            fontWeight: 900,
            textDecoration: "none",
          }}
        >
          Book a Free Assessment
        </a>
      </section>
    </main>
  );
}

const sectionStyle = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "54px 24px",
};

const h2Style = {
  fontSize: "clamp(42px, 5vw, 68px)",
  lineHeight: "1",
  marginBottom: "22px",
};

const pStyle = {
  fontSize: "21px",
  lineHeight: "1.7",
  color: "#725c68",
  maxWidth: "850px",
};

const cardStyle = {
  background: "white",
  borderRadius: "26px",
  padding: "28px",
  boxShadow: "0 18px 50px rgba(74, 24, 53, .10)",
};

const statBox = {
  background: "white",
  borderRadius: "24px",
  padding: "24px",
  boxShadow: "0 12px 40px rgba(74, 24, 53, .08)",
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
};
