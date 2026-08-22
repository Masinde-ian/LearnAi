/* Build script: merges part files into data/courses.json and validates. */
"use strict";
const fs = require("fs");
const path = require("path");

const DATA = path.join(__dirname, "..", "data");
const read = (f) => JSON.parse(fs.readFileSync(path.join(DATA, f), "utf8"));

const c1 = read("_c1.json");
const c2 = read("_c2.json");
const c3 = read("_c3.json");
const chapters = read("_ch.json");
const prompts = read("_pr.json");

const tierMin = { 1: 500, 2: 2500, 3: 5000, 4: 10000 };
const CATS = ["AI Basics", "Business", "Career", "Content", "Freelancing", "Student", "Everyday AI"];
const LEVELS = ["beginner", "pro"];
const ROLES = ["student", "job-seeker", "entrepreneur", "content-creator", "freelancer", "professional"];
const TASKS = ["study", "writing", "marketing", "admin", "design-media", "money-growth", "productivity"];
const MOCKUPS = ["book", "tablet", "folder"];

const courses = c1.courses.concat(c2.courses, c3.courses);

const errors = [];

function bad(msg) { errors.push(msg); }

/* ordering check */
courses.forEach((c, i) => { if (c.id !== i + 1) bad("id sequence broken at " + i + " (got " + c.id + ")"); });

const ids = new Set();
const slugs = new Set();
courses.forEach((c) => {
  if (ids.has(c.id)) bad("duplicate id " + c.id);
  ids.add(c.id);
  if (slugs.has(c.slug)) bad("duplicate slug " + c.slug);
  slugs.add(c.slug);
  if (tierMin[c.tier] === undefined) bad("course " + c.id + " bad tier " + c.tier);
  if (!(c.price >= tierMin[c.tier])) bad("course " + c.id + " price " + c.price + " below tier " + c.tier + " min " + tierMin[c.tier]);
  if (CATS.indexOf(c.cat) === -1) bad("course " + c.id + " bad cat " + c.cat);
  if (LEVELS.indexOf(c.level) === -1) bad("course " + c.id + " bad level");
  c.roles.forEach((r) => { if (ROLES.indexOf(r) === -1) bad("course " + c.id + " bad role " + r); });
  c.tasks.forEach((t) => { if (TASKS.indexOf(t) === -1) bad("course " + c.id + " bad task " + t); });
  if (MOCKUPS.indexOf(c.mockup) === -1) bad("course " + c.id + " bad mockup");
  c.authors.forEach((a) => { if (!c1.instructors[a]) bad("course " + c.id + " bad author " + a); });
  if (c.tier >= 3 && c.level !== "pro") bad("course " + c.id + " tier " + c.tier + " must be pro");
  const ch = chapters[String(c.id)] || [];
  const pr = prompts[String(c.id)] || [];
  if (ch.length < 4) bad("course " + c.id + " needs >=4 chapters (has " + ch.length + ")");
  if (pr.length < 2) bad("course " + c.id + " needs >=2 prompts (has " + pr.length + ")");
});

/* compute derived fields */
const priceOf = {};
const P = courses.map((c) => c.price);
courses.forEach((c) => {
  const was = Math.round((c.price * 1.9) / 100) * 100;
  c.was = Math.max(was, c.price + 100);
  c.discount = Math.round((1 - c.price / c.was) * 100);
  c.save = c.was - c.price;
});
courses.forEach((c) => { if (!(c.was > c.price)) bad("course " + c.id + " was not above price"); });

const featured = courses.filter((c) => c.featured);
if (featured.length !== 6) bad("expected 6 featured, got " + featured.length);

const promptTotal = courses.reduce((s, c) => s + c.prompts, 0);

const out = {
  meta: Object.assign({}, c1.meta, { count: courses.length, promptCount: promptTotal }),
  instructors: c1.instructors,
  courses: courses,
  chapters: chapters,
  prompts: prompts
};

fs.writeFileSync(path.join(DATA, "courses.json"), JSON.stringify(out, null, 2), "utf8");

if (errors.length) {
  console.error("VALIDATION FAILED (" + errors.length + "):");
  errors.forEach((e) => console.error("  - " + e));
  process.exit(1);
}

console.log("OK: " + courses.length + " courses merged.");
console.log("Tiers: T1=" + courses.filter(c=>c.tier===1).length + " T2=" + courses.filter(c=>c.tier===2).length + " T3=" + courses.filter(c=>c.tier===3).length + " T4=" + courses.filter(c=>c.tier===4).length);
console.log("Featured: " + featured.map(c=>c.id).join(","));
console.log("Prompt total: " + promptTotal);
console.log("Price check: min=" + Math.min(...P) + " max=" + Math.max(...P));

["_c1.json", "_c2.json", "_c3.json", "_ch.json", "_pr.json"].forEach((f) => {
  fs.unlinkSync(path.join(DATA, f));
});
console.log("Part files removed. Wrote data/courses.json");