import "./index.css"

export default function Footer() {
  const members = [
    { initial: "A", name: "Adedamola", colorClass: "avatar-a" },
    { initial: "P", name: "Peter", colorClass: "avatar-b" },
    { initial: "B", name: "Balogun", colorClass: "avatar-c" },
    { initial: "A", name: "Awoniran", colorClass: "avatar-d" },
    { initial: "R", name: "Rashidat", colorClass: "avatar-a" },
    { initial: "V", name: "Victoria", colorClass: "avatar-b" },
  ]

  return (
    <section className="footer">
      <div className="footer-content">
        <p className="about-title">About</p>
        <p>The Space</p>
        <p className="about-description">
          We are a passionate team of developers building modern web experiences.
        </p>
        <p className="members-title">Members</p>
        <div className="avatar-stack">
          {members.map((m, index) => (
            <div key={index} className={`avatar ${m.colorClass}`}>
              {m.initial}
            </div>
          ))}
        </div>
        <ol className="members-list">
          {members.map((m, index) => (
            <li key={index}>{m.name}</li>
          ))}
        </ol>
      </div>

      <hr />

      <div className="copyright">
        <div className="copyright-content">
          <p>&copy;2026 Designed by {" "}
            <a href="https://amakandukwu.com/" className="footer-link">Amaka</a> &amp; {" "}
            <a href="https://www.linkedin.com/in/ifeomaokocha" className="footer-link">Ifeoma A.</a>
          </p>
          <p>
            Built by{" "}
            <a href="https://github.com/AderogbaAdedamola/Group-7_ts_Capstone/" className="footer-link">The_Space</a>. All rights reserved
          </p>
        </div>
        <div className="tsacademy">
          <a href="#" className="footer-link">TSAcademy</a>
        </div>
      </div>
    </section>
  )
}
