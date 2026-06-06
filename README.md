# Frontend Capstone Project - Group 7

A React web application that explores our solar system through data. It fetches real planet data from an external API and displays it in a responsive grid and table. It also includes a video section and a validated contact form. Built as a capstone project for the TS Academy Frontend Development course.

---

## 🔗 Live Demo

[group-7-ts-capstone.vercel.app](#)

---

## Project Summary

This application recreates a provided mockup as a fully working React web app. It fetches real planet data from an API and displays it in a responsive grid of planet cards. It also includes a comparative planet data table, a video section, and a validated contact form with a submission endpoint. The project demonstrates HTML, CSS and JavaScript fundamentals, React component-based architecture, the Fetch API, responsive web design, and collaborative Git workflows, all skills covered throughout the TS Academy Frontend Development course.

---

## Team Members

| Name | Role | GitHub |
|------|------|--------|
| [Aderogba Adedamola] | Team Lead — Footer + App Structure | [github.com/AderogbaAdedamola](https://github.com/AderogbaAdedamola) |
| [Adekunle Peter] | Assistant Team Lead — Navbar | [github.com/Auspicious39](https://github.com/Auspicious39) |
| [⁠Lawal Rashidat] | Hero Section | [github.com/Oyinkansola04](https://github.com/Oyinkansola04) |
| [Pastorey and Victory Okeke] | Video Section | [github.com/CodingWithPastorey](https://github.com/CodingWithPastorey) & [github.com/TorieSteph](https://github.com/TorieSteph) |
| [Abigail Balogun and Abdulmateen Awoniran] | Planet Grid | [github.com/AA-Mateen](https://github.com/AA-Mateen) |
| [Abigail Balogun] | Fetch API + Planet Table | [github.com/Abiy33](https://github.com/Abiy33) |
| [Akindoyin Best] | Contact Form | [github.com/Mobolar18](https://github.com/Mobolar18) |

---

## Components

| Component | File |
|-----------|------|
| App structure + assembly | `App.jsx` |
| Navbar + mobile menu | `components/Navbar` |
| Hero section + CTA scroll | `components/Hero` |
| Video section | `components/VideoSection` |
| Planet grid + figure elements | `components/PlanetGrid` |
| Fetch API + usePlanets hook | `services/api.js`, `hooks/usePlanets.js` |
| Planet data table | `components/PlanetTable` |
| Contact form + validation + submit | `components/ContactForm` |
| Footer | `components/Footer` |

---

## Folder Structure

```
src/
  components/
    Navbar/
    Hero/
    VideoSection/
    PlanetGrid/
    PlanetTable/
    ContactForm/
    Footer/
  services/
    api.js
  hooks/
    usePlanets.js
  assets/
  styles/
  App.jsx
  main.jsx
```

---

## How to Run Locally

**Requirements:** Node.js installed on your machine.

**1. Clone the repository**
```bash
git clone https://github.com/AderogbaAdedamola/Group-7_ts_Capstone.git
cd the_space
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

**4. Open in browser**

Visit the link shown in your terminal, usually `http://localhost:5173`

---

## Git Workflow

- All work is done on separate feature branches
- Contributions are submitted through Pull Requests
- No one merges their own PR
- PRs must be reviewed and approved before merging into `main`

---

## Credits

- Instructors: [Amaka](https://amakandukwu.com/) and [Ifeoma](https://www.linkedin.com/in/ifeomaokocha)
- Academy: [TS Academy](https://tsacademyonline.com/)
- Repository: [Group 7](#)