# Sir Osama Musani · EconoBuz · Business website (demo)

A multi-page site for Sir Osama Musani, who teaches Cambridge O Level Business 7115/7081, IGCSE Business 0450/0264 and AS & A Level Business 9609 in Karachi and online. The design is black, cream and signal yellow, with hazard-tape details taken from his EconoBuz case-file posts.

Built by Nexlyr Solutions on the same system as the Sir Yawar Abbas, Sir Rohail Ahmed and Sir Sohail Ahmed sites. It has a short first-visit preloader, a 3D particle background that changes shape section by section (growth chart, break-even chart, coin stacks, market-share pie, globe, 40/40, OM monogram), stacking cards and a pinned case file.

**This is a demo.** The student portal and admin panel are static. They run on sample data saved only in the visitor's own browser, and nothing is sent to any server.

## Files

| File | What it is |
|---|---|
| `index.html` | Home, in this order: hero with a looping video from his lecture-hall reel; the three 40/40 marks reports; the KitKat case file (pinned); the three courses; the six-step method as stacking cards; the burger-shop break-even studio from his whiteboard; classroom stills; the syllabus map; study tools; where he teaches; command words |
| `courses.html` | 7081 (replacing 7115), 0264 (replacing 0450) and 9609, paper by paper, plus what changes in 2027 and the command words |
| `syllabus.html` | Every topic for 7081, 0264 and 9609, with a progress tracker, the formula sheet, 15 theories and models, and a key-terms glossary |
| `cases.html` | Case files: the full KitKat carousel with a model answer plan, the Judging the Billboard series, and how to build your own case file |
| `past-papers.html` | 7115, 0450 and 9609 question papers and mark schemes, a score tracker and an exam timer |
| `lab.html` | Business Lab: break-even with what-ifs, ratio analysis, cash-flow forecast, investment appraisal, price elasticity, billboard judge, a which-formula trainer, a quick-check quiz and flashcards |
| `portal.html` | Student portal demo. Sample student: ID `OM-1001`, code `DEMO-2026` |
| `admin.html` | Admin panel demo: issue IDs, add lectures, post announcements, record marks, see enquiries |
| `about.html` | His profile, how he teaches, where he teaches, reel stills |
| `contact.html` | Enrolment form that opens a ready-written WhatsApp message; FAQ |
| `404.html` | Not-found page |
| `config.js` | **The only file you edit**: WhatsApp number, social links, campuses, results, reviews |
| `assets/` | Everything the pages load, all self-hosted (no outside links): `site.css` and `app.js` (shared by every page, cached once), `db.js` (portal demo), `vendor/` (three.js, GSAP, ScrollTrigger, Lenis), `fonts/` (Anton, DM Sans, DM Mono), `img/` (logo, portrait, reel stills, marks reports, KitKat slides, hero video) |
| `og.jpg`, `favicon.svg`, `apple-touch-icon.png` | Share image and icons |
| `vercel.json`, `robots.txt`, `sitemap.xml` | Hosting and search files |

## Speed

- Each page carries only its own HTML, CSS and script. The shared CSS, JS, fonts and images are separate files that the browser caches for a year. Every URL ends in `?v=` plus a content hash, so an update always reaches visitors.
- Text is never hidden while the page loads. Anything on screen at load shows at once; only content further down eases in as you scroll.
- The 3D background loads after the page is ready and fades in. The preloader plays once per visit, for about 1.6 seconds.
- The hero video is 13 seconds, 480 × 720, about 600 KB. It plays only while on screen and can be paused.

## Before showing it to Sir Osama

1. **Contact.** `0331 3294318` comes from his EconoBuz carousels. Confirm it, or change `whatsapp` and `phoneDisplay` in `config.js`.
2. **Facts used, all from his own posts and public pages:**
   - IBA, BBA in Finance and Marketing.
   - Founder of EVO Institute (Bahadurabad, 0323 2288077) and NexGen Ed.
   - Business batches at Success Institute, Block L, North Nazimabad (0333 4510668).
   - Titan College and Axora Academy, from their own announcements.
   - Three 9609/12 marks reports at 40/40, June 2026, with names and candidate numbers left off.
   His reel overlay ("+1 = 14") suggests 14 students reached 40/40 on Paper 1. That figure is not on the site; add it to `RESULTS` once he confirms it.
3. **Two looks in his reels.** His reels show him with two hairstyles. The portrait on the site is the profile photo you sent.
4. **Places.** Remove any he no longer teaches at from `campuses` in `config.js` and from `about.html#where`.
5. **Social links.** `youtube` and `linkedin` are blank, so they are hidden. Fill them in if he wants them shown.
6. **Domain.** Pages use `https://osama-musani.nexlyr.solutions`. Find and replace if the address changes.

## Notes on content

- Syllabus content is summarised in our own words from Cambridge's published syllabuses. Command-word definitions are paraphrased.
- The quick-check questions, the Lab examples and the KitKat model plan were written for this site; they are not Cambridge questions.
- KitKat figures are agency-reported (WPP Media, LBB Online, Campaign), as credited on his carousel.
- Past papers open from PapaCambridge's public archive (© UCLES).

## Sources

- Cambridge O Level Business 7081 syllabus 2027–2029: https://www.cambridgeinternational.org/Images/718211-2027-2029-syllabus.pdf
- Cambridge O Level Business Studies 7115 syllabus 2026: https://www.cambridgeinternational.org/Images/697338-2026-syllabus.pdf
- Cambridge IGCSE Business 0264 syllabus 2027–2029: https://www.cambridgeinternational.org/Images/718123-2027-2029-syllabus.pdf
- Cambridge International AS & A Level Business 9609 syllabus 2026–2028: https://www.cambridgeinternational.org/Images/697371-2026-2028-syllabus.pdf
