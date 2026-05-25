# Team Workflow Guide

This is everything you need to contribute to this project. Read it once, follow it always.

---

## Setup

Do this once before anything else.

**Tell Git who you are:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

**Clone the repo:**
```bash
git clone https://github.com/AderogbaAdedamola/Group-7_ts_Capstone.git
cd the_space
npm install
npm run dev
```

If you see the app running in your browser, you're good to go. You'll see a placeholder for every section — that's intentional. Your job is to replace your placeholder with the real thing.

---

## Your Branch

Create it once, work on it throughout the project.

```bash
git checkout -b feature/footer          # Person 1
git checkout -b feature/navbar          # Person 2
git checkout -b feature/hero-section    # Person 3
git checkout -b feature/video-section   # Person 4
git checkout -b feature/planet-grid     # Person 5
git checkout -b feature/api-table       # Person 6
git checkout -b feature/contact-form    # Person 7
```

To confirm you're on the right branch:
```bash
git branch
```
The one with `*` is where you are. If it says `main`, stop and create your branch first.

---

## How to Preview Your Work

`App.jsx` is already set up with all components imported. You don't touch it, and you don't need to.

When you run `npm run dev` you'll see the full app in the browser. Your section starts as a placeholder div. As you build, your changes show up live in the browser automatically.

That's it. No extra setup needed to preview your work.

---

## Every Time You Sit Down to Work

No exceptions. This order every time:

```bash
# 1. Pull latest changes first
git pull origin main

# 2. Write your code

# 3. Check what you changed
git status

# 4. Stage your work
git add .

# 5. Commit with a real message
git commit -m "feat: add navbar with mobile menu"

# 6. Pull again before pushing
git pull origin main

# 7. Push
git push origin feature/your-branch-name
```

First time pushing your branch:
```bash
git push --set-upstream origin feature/your-branch-name
```

After that, `git push` is enough.

---

## Commit Messages

Write something that actually describes what you did.

```bash
# Good
git commit -m "feat: add hero CTA scroll"
git commit -m "fix: contact form validation error"
git commit -m "style: planet grid mobile layout"

# Bad
git commit -m "update"
git commit -m "done"
git commit -m "changes"
```

---

## Pull Requests

When you finish your task, open a PR on GitHub.

1. Go to the repo on GitHub
2. Click **"Compare & pull request"**
3. Set base to `main`, compare to your branch
4. Write a short title describing what you built
5. Tag Person 1 or Person 2 for review
6. Click **Create pull request**

**You do not merge your own PR. Ever.** Wait for review.

---

## After Your PR Gets Merged

```bash
git checkout main
git pull origin main
git checkout feature/your-branch-name
git pull origin main
```

---

## If You Get a Merge Conflict

Git will mark it in the file like this:
```
<<<<<<< HEAD
your code
=======
their code
>>>>>>> main
```

Pick the right version, delete the markers, then:
```bash
git add .
git commit -m "fix: resolve merge conflict"
git push origin feature/your-branch-name
```

If you're not sure what to keep, ping Person 1 before you touch anything.

---

## What Each Person is Building

| Person | Section | Branch |
|--------|---------|--------|
| Person 1 | Footer + App structure | `feature/footer` |
| Person 2 | Navbar + mobile menu | `feature/navbar` |
| Person 3 | Hero section + CTA scroll | `feature/hero-section` |
| Person 4 | Video section (no iframe, autoplay, muted, loop) | `feature/video-section` |
| Person 5 | Planet grid + figure elements | `feature/planet-grid` |
| Person 6 | Fetch API + usePlanets hook + planet table | `feature/api-table` |
| Person 7 | Contact form + validation + submit | `feature/contact-form` |

**Person 5 and Person 6** — coordinate directly. Person 6 builds the hook first, Person 5 uses it.

---

## CSS

Each component has its own CSS file. Stay in yours.

```
Navbar/Navbar.css         ← Person 2 only
Hero/Hero.css             ← Person 3 only
VideoSection/Video.css    ← Person 4 only
PlanetGrid/PlanetGrid.css ← Person 5 only
PlanetTable/Table.css     ← Person 6 only
ContactForm/Form.css      ← Person 7 only
Footer/Footer.css         ← Person 1 only
```

Shared colours and fonts live in `styles/variables.css`. Use them like this:
```css
color: var(--color-primary);
```

Don't edit `variables.css` without telling Person 1 first.

Make your own section responsive. Don't leave it for someone else.

---

## The Rules

- Never push to `main`
- Never merge your own PR
- Always pull before you push
- Stay in your component folder
- If you're stuck for more than 30 minutes, say something in the group. Don't go quiet.

---

*Questions go in the group chat.*