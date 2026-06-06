import "./index.css"

export default function Footer() {
  const members = [
    { initial: "A", name: "Adedamola", colorClass: "avatar-a", github: "https://github.com/AderogbaAdedamola" },
    { initial: "P", name: "Peter", colorClass: "avatar-b", github: "https://github.com/Auspicious39" },
    { initial: "B", name: "Balogun", colorClass: "avatar-c", github: "https://github.com/Abiy33" },
    { initial: "P", name: "Pastorey", colorClass: "avatar-d", github: "https://github.com/CodingWithPastorey" },
    { initial: "A", name: "Awoniran", colorClass: "avatar-e", github: "https://github.com/AA-Mateen" },
    { initial: "R", name: "Rashidat", colorClass: "avatar-a", github: "https://github.com/Oyinkansola04" },
    { initial: "B", name: "Best", colorClass: "avatar-b", github: "https://github.com/Mobolar18" },
    { initial: "V", name: "Victoria", colorClass: "avatar-c", github: "https://github.com/TorieSteph" },
  ];
  return (
    <section className="footer">
      <div className="footer-content">
        <p className="about-title">About</p>
        <p>Group 7</p>
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
            <li key={index}>
              <a href={m.github} target="_blank" rel="noopener noreferrer">
                {m.name}
              </a>
            </li>
          ))}
        </ol>
      </div>

      <hr />

      <div className="copyright">
        <div className="copyright-content">
          <p>&copy;2026 Designed by {" "}
            <a href="https://amakandukwu.com/" target="_blank" className="footer-link">Amaka</a> &amp; {" "}
            <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" className="footer-link">Ifeoma A.</a>
          </p>
          <p>
            Built by{" "}
            <a href="https://github.com/AderogbaAdedamola/Group-7_ts_Capstone/" target="_blank"  className="footer-link">The_Space</a>. All rights reserved
          </p>
        </div>
        <div className="tsacademy">
          <a href="https://tsacademyonline.com/" target="_blank" className="footer-link">TSAcademy</a>
        </div>
      </div>
    </section>
  )
}
