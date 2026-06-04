import "./index.css"

export default function Footer() {
  const members = [
    { initial: "A", name: "Adedamola", colorClass: "avatar-a" },
    { initial: "P", name: "Peter", colorClass: "avatar-m" },
    { initial: "B", name: "Balogun", colorClass: "avatar-i" },
    { initial: "A", name: "Awoniran", colorClass: "avatar-m" },
    { initial: "R", name: "Rashidat", colorClass: "avatar-a" },
  ]

  return (
    <div className="footer">
      <div className="footer-content">
        <p className="about-title">About</p>
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
          <p>&copy;2026 Designed by Amaka &amp; Ifeoma A.</p>
          <p>Built by GroupName. All rights reserved</p>
        </div>
        <div className="tsacademy">
          <p>TSAcademy</p>
        </div>
      </div>
    </div>
  )
}
