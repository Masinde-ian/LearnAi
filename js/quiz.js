/* ============================================================
   LEARNAI — QUIZ FUNNEL
   Interactive lead-gen quiz · Steps · Recommendations · WhatsApp
   ============================================================ */
(function () {
  "use strict";

  /* --------------------------------------------------------
     QUIZ DATA — Steps, options, icons
     -------------------------------------------------------- */

  var STEPS = [
    /* ---- Step 0: Welcome ---- */
    {
      type: "welcome"
    },

    /* ---- Step 1: Role ---- */
    {
      type: "question",
      key: "role",
      label: "Step 1 of 4",
      text: "What best describes you?",
      grid: "wide",
      options: [
        {
          value: "student",
          label: "Student",
          desc: "Still in school or university",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>'
        },
        {
          value: "job-seeker",
          label: "Job Seeker",
          desc: "Looking for employment",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3h-8v4h8V3Z"/></svg>'
        },
        {
          value: "entrepreneur",
          label: "Entrepreneur",
          desc: "Running a business or side hustle",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>'
        },
        {
          value: "content-creator",
          label: "Content Creator",
          desc: "Making videos, posts, or newsletters",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'
        },
        {
          value: "freelancer",
          label: "Freelancer",
          desc: "Working for clients independently",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"/><path d="M4 12h16"/></svg>'
        },
        {
          value: "professional",
          label: "Professional",
          desc: "Employed, want to level up at work",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5"/></svg>'
        }
      ]
    },

    /* ---- Step 2: AI Experience ---- */
    {
      type: "question",
      key: "experience",
      label: "Step 2 of 4",
      text: "How comfortable are you with AI?",
      grid: "3",
      options: [
        {
          value: "beginner",
          label: "Total beginner",
          desc: "Never used AI tools before",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5"/><circle cx="12" cy="16" r=".5" fill="currentColor"/></svg>'
        },
        {
          value: "some",
          label: "Tried it a few times",
          desc: "Used ChatGPT or similar tools",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>'
        },
        {
          value: "experienced",
          label: "I use AI regularly",
          desc: "Comfortable with prompts and tools",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c.5 4.6 2.6 6.7 7 7-4.4.3-6.5 2.4-7 7-.5-4.6-2.6-6.7-7-7 4.4-.3 6.5-2.4 7-7z"/></svg>'
        }
      ]
    },

    /* ---- Step 3: Primary Goal ---- */
    {
      type: "question",
      key: "goal",
      label: "Step 3 of 4",
      text: "What do you want AI to help you with?",
      grid: "wide",
      options: [
        {
          value: "study",
          label: "Study & Research",
          desc: "Exams, assignments, revision",
          tasks: ["study", "productivity"],
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>'
        },
        {
          value: "writing",
          label: "Writing & Content",
          desc: "Captions, blogs, newsletters",
          tasks: ["writing", "marketing"],
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>'
        },
        {
          value: "marketing",
          label: "Marketing & Sales",
          desc: "Ads, customer replies, growth",
          tasks: ["marketing"],
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>'
        },
        {
          value: "career",
          label: "Career & Job Hunt",
          desc: "CVs, interviews, portfolios",
          tasks: ["writing", "productivity"],
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>'
        },
        {
          value: "business",
          label: "Business Operations",
          desc: "Admin, automation, efficiency",
          tasks: ["admin", "productivity"],
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>'
        },
        {
          value: "freelancing",
          label: "Freelancing Income",
          desc: "Proposals, clients, pricing",
          tasks: ["writing", "money"],
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.5-1.5-3-1.5-2.2 0-4 1.3-4 3s1.8 3 4 3c1.5 0 2.5-.5 3-1.5"/><path d="M12 6v1.5m0 9V18"/></svg>'
        }
      ]
    },

    /* ---- Step 4: Time Available ---- */
    {
      type: "question",
      key: "time",
      label: "Step 4 of 4",
      text: "How much time can you invest per week?",
      grid: "3",
      options: [
        {
          value: "quick",
          label: "15–30 min",
          desc: "Quick wins I can apply today",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
        },
        {
          value: "moderate",
          label: "1–2 hours",
          desc: "Deeper learning, real practice",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/></svg>'
        },
        {
          value: "deep",
          label: "3+ hours",
          desc: "Full mastery, all-in",
          icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c.5 4.6 2.6 6.7 7 7-4.4.3-6.5 2.4-7 7-.5-4.6-2.6-6.7-7-7 4.4-.3 6.5-2.4 7-7z"/></svg>'
        }
      ]
    }
  ];

  /* --------------------------------------------------------
     MOTIVATIONAL MESSAGES per role
     -------------------------------------------------------- */

  var ROLE_MESSAGES = {
    "student": {
      headline: "Your learning path is set!",
      sub: "As a student, these courses will transform how you study, research, and prepare for exams — using AI to work smarter, not harder."
    },
    "job-seeker": {
      headline: "Your career toolkit awaits!",
      sub: "These courses will give you the AI-powered edge to craft winning CVs, ace interviews, and stand out in the job market."
    },
    "entrepreneur": {
      headline: "Your business is about to level up!",
      sub: "These courses are built for entrepreneurs like you — to automate operations, nail your marketing, and grow your revenue with AI."
    },
    "content-creator": {
      headline: "Your content game just changed!",
      sub: "These courses will help you create scroll-stopping content, write captions that convert, and build a content system that runs on AI."
    },
    "freelancer": {
      headline: "Your income toolkit is ready!",
      sub: "These courses will help you write better proposals, price with confidence, and deliver work faster — so you can charge more."
    },
    "professional": {
      headline: "Your competitive advantage is here!",
      sub: "These courses will make you the AI-savvy person in your workplace — automate reports, write faster, and impress your team."
    }
  };

  var SOCIAL_PROOF = [
    { name: "Mercy K.", loc: "Kisumu", initials: "MK", bg: "linear-gradient(140deg,#064E3B,#047857)" },
    { name: "Brian O.", loc: "Nairobi", initials: "BO", bg: "linear-gradient(140deg,#111827,#334155)" },
    { name: "Faith M.", loc: "Eldoret", initials: "FM", bg: "linear-gradient(140deg,#B45309,#D97706)" },
    { name: "Kevin N.", loc: "Thika", initials: "KN", bg: "linear-gradient(140deg,#065F46,#10B981)" }
  ];

  /* --------------------------------------------------------
     STATE
     -------------------------------------------------------- */

  var currentStep = 0;
  var answers = {};
  var courses = [];
  var WA_NUMBER = "254792238421";

  /* --------------------------------------------------------
     HELPERS
     -------------------------------------------------------- */

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function ksh(n) {
    return "KSh " + Number(n).toLocaleString("en-KE");
  }

  function waLink(msg) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  }

  /* Cover art (simplified from covers.js) */
  var STYLES = [
    { a: "#064E3B", b: "#047857", accent: "#D97706" },
    { a: "#111827", b: "#334155", accent: "#10B981" },
    { a: "#065F46", b: "#059669", accent: "#FDE68A" },
    { a: "#0F172A", b: "#1E293B", accent: "#D97706" },
    { a: "#78350F", b: "#92400E", accent: "#FBBF24" },
    { a: "#1E293B", b: "#0F172A", accent: "#10B981" }
  ];

  function coverGradient(course) {
    var s = STYLES[course.cover % STYLES.length];
    return "linear-gradient(180deg, " + s.a + ", " + s.b + ")";
  }

  /* --------------------------------------------------------
     RENDERING — Build quiz DOM
     -------------------------------------------------------- */

  function buildQuiz() {
    var viewport = $(".quiz__viewport");
    if (!viewport) return;

    var html = "";

    STEPS.forEach(function (step, i) {
      if (step.type === "welcome") {
        html += renderWelcome(i);
      } else {
        html += renderQuestion(step, i);
      }
    });

    html += renderResults();
    viewport.innerHTML = html;
  }

  function renderWelcome(i) {
    return (
      '<div class="quiz-step' + (i === 0 ? " is-active" : "") + '" data-step="' + i + '">' +
        '<div class="quiz-step__inner">' +
          '<div class="quiz-welcome">' +
            '<div class="quiz-welcome__icon">' +
              '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
                '<path d="M12 2c.5 4.6 2.6 6.7 7 7-4.4.3-6.5 2.4-7 7-.5-4.6-2.6-6.7-7-7 4.4-.3 6.5-2.4 7-7z"/>' +
              '</svg>' +
            '</div>' +
            '<span class="quiz-welcome__badge">' +
              '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>' +
              'Personalised for you' +
            '</span>' +
            '<h1>Find the perfect AI courses for you</h1>' +
            '<p class="quiz-welcome__sub">Answer 4 quick questions and we\'ll match you with the courses that fit your exact needs — no guesswork.</p>' +
            '<div class="quiz-welcome__meta">' +
              '<span>' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>' +
                'Takes less than 60 seconds' +
              '</span>' +
              '<span>' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>' +
                '65+ localised courses' +
              '</span>' +
            '</div>' +
          '</div>' +
          '<button class="btn btn--primary btn--lg quiz-start-btn">' +
            'Start the Quiz' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>'
    );
  }

  function renderQuestion(step, i) {
    var optsHtml = "";
    step.options.forEach(function (opt) {
      optsHtml +=
        '<button class="quiz-option" data-value="' + esc(opt.value) + '" data-key="' + esc(step.key) + '">' +
          '<span class="quiz-option__check">' +
            '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg>' +
          '</span>' +
          '<span class="quiz-option__icon">' + opt.icon + '</span>' +
          '<span class="quiz-option__label">' + esc(opt.label) + '</span>' +
          '<span class="quiz-option__desc">' + esc(opt.desc) + '</span>' +
        '</button>';
    });

    var gridClass = "quiz-options";
    if (step.grid === "wide") gridClass += " quiz-options--wide";
    else if (step.grid === "3") gridClass += "";

    return (
      '<div class="quiz-step" data-step="' + i + '">' +
        '<div class="quiz-step__inner">' +
          '<div class="quiz-question">' +
            '<span class="quiz-question__step-label">' + esc(step.label) + '</span>' +
            '<h2 class="quiz-question__text">' + esc(step.text) + '</h2>' +
          '</div>' +
          '<div class="' + gridClass + '">' + optsHtml + '</div>' +
          '<div class="quiz-nav">' +
            '<button class="quiz-nav__back" data-dir="back">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m7 7-7-7 7-7"/></svg>' +
              'Back' +
            '</button>' +
            '<button class="btn btn--primary quiz-nav__next" data-dir="next">' +
              'Next' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderResults() {
    return (
      '<div class="quiz-step" data-step="results">' +
        '<div class="quiz-step__inner">' +
          '<div class="quiz-results" id="quiz-results-inner">' +
            '<!-- Populated by JS on completion -->' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  /* --------------------------------------------------------
     RECOMMENDATION ENGINE
     -------------------------------------------------------- */

  function scoreCourse(c) {
    var score = 0;
    var role = answers.role;
    var goal = answers.goal;
    var experience = answers.experience;
    var time = answers.time;

    /* Role match (+10) */
    if (c.roles && c.roles.indexOf(role) !== -1) {
      score += 10;
    }

    /* Goal / task match (+8) */
    if (goal && c.tasks) {
      var goalOpt = STEPS[3].options.find(function (o) { return o.value === goal; });
      if (goalOpt && goalOpt.tasks) {
        for (var t = 0; t < goalOpt.tasks.length; t++) {
          if (c.tasks.indexOf(goalOpt.tasks[t]) !== -1) {
            score += 8;
            break;
          }
        }
      }
    }

    /* Experience / level match (+5) */
    if (experience === "beginner" && c.level === "beginner") {
      score += 5;
    } else if (experience === "some" && c.level === "beginner") {
      score += 4;
    } else if (experience === "experienced") {
      score += 3;
      if (c.level === "pro") score += 3;
    }

    /* Time / tier match (+3) */
    if (time === "quick" && c.tier === 1) {
      score += 3;
    } else if (time === "moderate" && (c.tier === 1 || c.tier === 2)) {
      score += 3;
    } else if (time === "deep") {
      score += 2;
    }

    /* Rating bonus (+2) */
    if (c.rating >= 4.8) score += 2;

    /* Popularity bonus (+1) */
    if (c.unlocks >= 800) score += 1;

    /* Featured bonus (+1) */
    if (c.featured) score += 1;

    return score;
  }

  function getRecommendations() {
    /* Safety net: re-sync from LEARNAI_DATA if local array is stale */
    if (!courses.length && window.LEARNAI_DATA && window.LEARNAI_DATA.loaded && window.LEARNAI_DATA.courses.length) {
      courses = window.LEARNAI_DATA.courses;
    }
    if (!courses.length) return [];

    var scored = courses.map(function (c) {
      return { course: c, score: scoreCourse(c) };
    });

    scored.sort(function (a, b) { return b.score - a.score; });

    /* Always include ChatGPT Basics if user is beginner */
    var results = [];
    var seen = {};

    /* Take top 3 from scored */
    for (var i = 0; i < scored.length && results.length < 3; i++) {
      var id = scored[i].course.id;
      if (!seen[id]) {
        results.push(scored[i].course);
        seen[id] = true;
      }
    }

    return results;
  }

  function generateReason(c) {
    var role = answers.role;
    var reasons = {
      "student": "Perfect for students — builds real study skills you can apply to your next assignment.",
      "job-seeker": "Gives you a job-market edge with AI-powered tools that most applicants don't know about.",
      "entrepreneur": "Built for business owners — automates the tasks eating up your time.",
      "content-creator": "Helps you create content faster and keep your audience engaged.",
      "freelancer": "Levels up your client work so you can charge more and deliver faster.",
      "professional": "Makes you the AI-savvy person on your team — the one everyone comes to for answers."
    };

    /* Try task-specific reasons */
    if (c.tasks.indexOf("writing") !== -1) {
      return "Teaches you to write 10x faster with AI-powered templates.";
    }
    if (c.tasks.indexOf("marketing") !== -1) {
      return "Gives you proven AI systems to market and sell smarter.";
    }
    if (c.tasks.indexOf("study") !== -1) {
      return "Transforms how you study — revision, research, and note-taking.";
    }
    if (c.tasks.indexOf("productivity") !== -1) {
      return "Automates repetitive tasks so you get more done in less time.";
    }
    if (c.tasks.indexOf("admin") !== -1) {
      return "Cuts through admin work with ready-to-use AI workflows.";
    }
    if (c.tasks.indexOf("money") !== -1) {
      return "Helps you find, win, and deliver client work using AI.";
    }

    return reasons[role] || "A great fit based on your answers.";
  }

  function buildWhatsAppMsg() {
    var role = answers.role || "someone";
    var goal = answers.goal || "grow";
    var goalLabels = {
      study: "study and research",
      writing: "writing and content creation",
      marketing: "marketing and sales",
      career: "career advancement",
      business: "business operations",
      freelancing: "freelancing income"
    };
    var roleLabels = {
      student: "a student",
      "job-seeker": "a job seeker",
      entrepreneur: "an entrepreneur",
      "content-creator": "a content creator",
      freelancer: "a freelancer",
      professional: "a professional"
    };

    return "Hi Elimu AI! I took your course quiz and I'm " +
      (roleLabels[role] || role) +
      " looking to improve my " + (goalLabels[goal] || goal) +
      ". I'd like to know more about the recommended courses. Can you help me get started?";
  }

  /* --------------------------------------------------------
     RENDER RESULTS
     -------------------------------------------------------- */

  function renderResultsContent() {
    var container = $("#quiz-results-inner");
    if (!container) return;

    var recs = getRecommendations();
    var msg = ROLE_MESSAGES[answers.role] || ROLE_MESSAGES.student;

    var pills = "";
    if (answers.role) {
      var roleOpt = STEPS[1].options.find(function (o) { return o.value === answers.role; });
      if (roleOpt) {
        pills += '<span class="quiz-summary__pill"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5"/></svg>' + esc(roleOpt.label) + '</span>';
      }
    }
    if (answers.goal) {
      var goalOpt = STEPS[3].options.find(function (o) { return o.value === answers.goal; });
      if (goalOpt) {
        pills += '<span class="quiz-summary__pill"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c.5 4.6 2.6 6.7 7 7-4.4.3-6.5 2.4-7 7-.5-4.6-2.6-6.7-7-7 4.4-.3 6.5-2.4 7-7z"/></svg>' + esc(goalOpt.label) + '</span>';
      }
    }
    if (answers.experience) {
      var expLabels = { beginner: "Beginner", some: "Some experience", experienced: "Experienced" };
      pills += '<span class="quiz-summary__pill"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v5l3 2"/></svg>' + (expLabels[answers.experience] || "") + '</span>';
    }

    var recsHtml = "";
    recs.forEach(function (c, i) {
      var badges =
        '<span class="badge badge--dark">' + esc(c.cat) + '</span>' +
        '<span class="badge">Tier ' + c.tier + '</span>';

      var waMsg = "Hi Elimu AI, I'd like to buy " + c.title + " at " + ksh(c.price) +
        " (down from " + ksh(c.was) + "). Please share M-Pesa payment details. " +
        "I found this through your quiz — I'm a " + (answers.role || "") + " looking to " + (answers.goal || "") + ".";

      var waIcon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>';

      var chaptersCount = (window.LEARNAI_DATA && window.LEARNAI_DATA.chapters && window.LEARNAI_DATA.chapters[c.id])
        ? window.LEARNAI_DATA.chapters[c.id].length
        : "—";

      recsHtml +=
        '<article class="quiz-rec" data-reveal style="--reveal-delay:' + (i * 100) + 'ms">' +
          '<div class="quiz-rec__mockup" style="background:' + coverGradient(c) + '">' +
            '<span class="quiz-rec__mockup-label">' + esc(c.title.length > 30 ? c.title.substring(0, 28) + "…" : c.title) + '</span>' +
          '</div>' +
          '<div class="quiz-rec__body">' +
            '<div class="quiz-rec__badges">' + badges + '</div>' +
            '<h3 class="quiz-rec__title">' + esc(c.title) + '</h3>' +
            '<p class="quiz-rec__reason">' + generateReason(c) + '</p>' +
            '<div class="quiz-rec__foot">' +
              '<div class="quiz-rec__price">' +
                '<span class="now tabular">' + ksh(c.price) + '</span>' +
                '<span class="was tabular">' + ksh(c.was) + '</span>' +
              '</div>' +
            '</div>' +
            '<a class="btn btn--whatsapp quiz-rec__cta" href="' + waLink(waMsg) + '">' +
              waIcon +
              'I want this course — chat on WhatsApp' +
            '</a>' +
          '</div>' +
        '</article>';
    });

    /* Social proof avatars */
    var avatarsHtml = "";
    SOCIAL_PROOF.forEach(function (p) {
      avatarsHtml += '<span class="quiz-social__avatar" style="background:' + p.bg + '" title="' + esc(p.name) + '">' + esc(p.initials) + '</span>';
    });

    var socialProofCount = 2500 + Math.floor(Math.random() * 200);

    container.innerHTML =
      '<div class="bot" aria-hidden="true">' +
        '<div class="bot__body">' +
          '<div class="bot__head">' +
            '<div class="bot__eyes"><span class="bot__eye"></span><span class="bot__eye"></span></div>' +
            '<div class="bot__mouth"></div>' +
          '</div>' +
          '<div class="bot__arm bot__arm--left"></div>' +
          '<div class="bot__arm bot__arm--right"></div>' +
          '<div class="bot__sparkles">' +
            '<span class="bot__sparkle"></span>' +
            '<span class="bot__sparkle"></span>' +
            '<span class="bot__sparkle"></span>' +
            '<span class="bot__sparkle"></span>' +
            '<span class="bot__sparkle"></span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<span class="quiz-results__badge">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c.5 4.6 2.6 6.7 7 7-4.4.3-6.5 2.4-7 7-.5-4.6-2.6-6.7-7-7 4.4-.3 6.5-2.4 7-7z"/></svg>' +
        'Your results are ready' +
      '</span>' +
      '<h2 class="quiz-results__title">' + esc(msg.headline) + '</h2>' +
      '<p class="quiz-results__sub">' + esc(msg.sub) + '</p>' +
      '<div class="quiz-summary" id="quiz-summary">' + pills + '</div>' +
      '<div class="quiz-unsure">' +
        '<p class="quiz-unsure__text">Not sure which one is right for you?</p>' +
        '<a class="btn btn--ghost quiz-unsure__btn" href="' + waLink(buildWhatsAppMsg()) + '">' +
          '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>' +
          'Let us help you decide' +
        '</a>' +
      '</div>' +
      '<p class="quiz-results__heading">Pick the course that excites you most</p>' +
      '<div class="quiz-recs" id="quiz-recs">' + recsHtml + '</div>' +
      '<div class="quiz-social">' +
        '<div class="quiz-social__avatars">' + avatarsHtml + '</div>' +
        '<p class="quiz-social__text">Join <strong class="tabular">' + socialProofCount.toLocaleString() + '+ Kenyan builders</strong> already using these courses</p>' +
      '</div>' +
      '<div class="quiz-final-cta">' +
        '<span class="quiz-final-cta__label">Ready to get started? Message us on WhatsApp</span>' +
        '<a class="btn btn--whatsapp btn--lg" href="' + waLink(buildWhatsAppMsg()) + '">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>' +
          'Chat with us on WhatsApp' +
        '</a>' +
      '</div>' +
      '<button class="quiz-restart" id="quiz-restart">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>' +
        'Retake the quiz' +
      '</button>';
  }

  /* --------------------------------------------------------
     NAVIGATION
     -------------------------------------------------------- */

  function goToStep(target) {
    var steps = $$(".quiz-step");
    var totalSteps = STEPS.length;

    /* Render results content on final step */
    if (target === totalSteps) {
      renderResultsContent();
    }

    steps.forEach(function (el) {
      var idx = el.getAttribute("data-step");
      if (idx === "results") {
        if (target === totalSteps) {
          el.classList.add("is-active");
          el.classList.remove("is-exit");
        } else {
          el.classList.remove("is-active", "is-exit");
        }
        return;
      }

      var stepIdx = parseInt(idx, 10);

      if (stepIdx === target) {
        el.classList.remove("is-exit");
        el.classList.add("is-active");
      } else if (stepIdx === currentStep && target !== currentStep) {
        el.classList.remove("is-active");
        el.classList.add("is-exit");
      } else {
        el.classList.remove("is-active", "is-exit");
      }
    });

    currentStep = target;
    updateProgress();
    updateNextButton();

    /* Scroll to top */
    window.scrollTo({ top: 0, behavior: "smooth" });

    /* Trigger reveal animations on results */
    if (target === totalSteps) {
      setTimeout(initReveals, 100);
    }
  }

  function updateProgress() {
    var fill = $(".quiz-progress__fill");
    if (!fill) return;

    var total = STEPS.length;
    var pct = (currentStep / total) * 100;
    fill.style.width = pct + "%";
  }

  function updateNextButton() {
    var nextBtn = $(".quiz-step.is-active .quiz-nav__next");
    if (!nextBtn) return;

    var key = nextBtn.closest(".quiz-step").querySelector(".quiz-option.is-selected");
    nextBtn.classList.toggle("is-ready", !!key);
  }

  /* --------------------------------------------------------
     REVEALS (re-trigger for dynamically rendered results)
     -------------------------------------------------------- */

  function initReveals() {
    var els = $$(".quiz-step.is-active [data-reveal]");
    if (!els.length) return;

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

      els.forEach(function (el, i) {
        el.style.setProperty("--reveal-delay", i * 80 + "ms");
        observer.observe(el);
      });
    } else {
      els.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* --------------------------------------------------------
     EVENT DELEGATION
     -------------------------------------------------------- */

  function bindEvents() {
    document.addEventListener("click", function (e) {
      /* Start button */
      if (e.target.closest(".quiz-start-btn")) {
        goToStep(1);
        return;
      }

      /* Option selection */
      var option = e.target.closest(".quiz-option");
      if (option) {
        var key = option.getAttribute("data-key");
        var value = option.getAttribute("data-value");

        /* Deselect siblings */
        var siblings = $$(".quiz-option[data-key='" + key + "']");
        siblings.forEach(function (s) { s.classList.remove("is-selected"); });

        /* Select this one */
        option.classList.add("is-selected");
        answers[key] = value;

        /* Update next button */
        updateNextButton();
        return;
      }

      /* Next button */
      var nextBtn = e.target.closest("[data-dir='next']");
      if (nextBtn && nextBtn.classList.contains("is-ready")) {
        var nextStep = currentStep + 1;
        goToStep(nextStep);
        return;
      }

      /* Back button */
      var backBtn = e.target.closest("[data-dir='back']");
      if (backBtn) {
        goToStep(currentStep - 1);
        return;
      }

      /* Restart */
      if (e.target.closest("#quiz-restart")) {
        answers = {};
        var allOptions = $$(".quiz-option.is-selected");
        allOptions.forEach(function (o) { o.classList.remove("is-selected"); });
        goToStep(0);
        return;
      }
    });
  }

  /* --------------------------------------------------------
     INIT
     -------------------------------------------------------- */

  function init() {
    buildQuiz();
    bindEvents();
    updateProgress();

    /* Load course data if available */
    function syncCourses() {
      if (window.LEARNAI_DATA && window.LEARNAI_DATA.loaded && window.LEARNAI_DATA.courses.length) {
        courses = window.LEARNAI_DATA.courses;
        return true;
      }
      return false;
    }

    if (syncCourses()) {
      /* Data already loaded, nothing to do */
    } else {
      /* Wait for data-loader.js to populate */
      var check = setInterval(function () {
        if (syncCourses()) clearInterval(check);
      }, 100);

      /* Fallback after 5 seconds */
      setTimeout(function () {
        clearInterval(check);
        syncCourses();
      }, 5000);
    }
  }

  /* Run when DOM is ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
