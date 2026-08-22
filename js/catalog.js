/* ============================================================
   ELIMU AI — CATALOG (render + filter + search + sort)
   ============================================================ */
(function () {
  "use strict";

  var UI = window.LEARNAI_UI || {};
  var esc = UI.esc, ksh = UI.ksh, cardHTML = UI.cardHTML, levelLabel = UI.levelLabel;

  var state = {
    level: "any",
    roles: [],
    tasks: [],
    price: "any",
    query: "",
    sort: "popular"
  };

  var $ = function (id) { return document.getElementById(id); };
  var grid = $("catalog-grid");
  if (!grid) return;
  var empty = $("catalog-empty");
  var count = $("result-count");
  var chips = $("active-chips");
  var queryInput = $("catalog-query");
  var loading = $("catalog-loading");

  var ROLE_LABELS = {
    student: "Student",
    "job-seeker": "Job Seeker",
    entrepreneur: "Entrepreneur",
    "content-creator": "Content Creator",
    freelancer: "Freelancer",
    professional: "Professional"
  };
  var TASK_LABELS = {
    study: "Study",
    writing: "Writing",
    marketing: "Marketing",
    admin: "Admin",
    "design-media": "Design & Media",
    "money-growth": "Money & Growth",
    productivity: "Productivity"
  };
  var PRICE_LABELS = {
    under1000: "Under KSh 1,000",
    mid: "KSh 2,500–3,500",
    pro: "KSh 5,000–6,500",
    flagship: "KSh 10,000+"
  };

  function matches(g) {
    if (state.level !== "any" && g.level !== state.level) return false;
    if (state.roles.length && !state.roles.some(function (r) { return g.roles.indexOf(r) !== -1; })) return false;
    if (state.tasks.length && !state.tasks.some(function (t) { return g.tasks.indexOf(t) !== -1; })) return false;
    if (state.price !== "any") {
      if (state.price === "under1000" && !(g.price < 1000)) return false;
      if (state.price === "mid" && !(g.price >= 2500 && g.price <= 3500)) return false;
      if (state.price === "pro" && !(g.price >= 5000 && g.price <= 6500)) return false;
      if (state.price === "flagship" && !(g.price >= 10000)) return false;
    }
    if (state.query) {
      var hay = (g.title + " " + g.desc + " " + g.tagline + " " + g.cat + " " + g.format + " " + g.prompts + " " + g.pages).toLowerCase();
      if (hay.indexOf(state.query.toLowerCase()) === -1) return false;
    }
    return true;
  }

  function sorted(list) {
    var arr = list.slice();
    if (state.sort === "price-asc") arr.sort(function (a, b) { return a.price - b.price; });
    else if (state.sort === "price-desc") arr.sort(function (a, b) { return b.price - a.price; });
    else if (state.sort === "name") arr.sort(function (a, b) { return a.title.localeCompare(b.title); });
    return arr;
  }

  function addChip(label, remove) {
    var chip = document.createElement("span");
    chip.className = "chip";
    chip.innerHTML = label + ' <button aria-label="Remove filter ' + label + '"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>';
    chip.querySelector("button").addEventListener("click", remove);
    return chip;
  }

  function renderChips() {
    chips.innerHTML = "";
    var any = false;
    if (state.query) {
      any = true;
      chips.appendChild(addChip("“" + esc(state.query) + "”", function () {
        state.query = ""; if (queryInput) queryInput.value = ""; apply();
      }));
    }
    if (state.level !== "any") {
      any = true;
      chips.appendChild(addChip(levelLabel(state.level), function () {
        state.level = "any";
        var r = document.querySelector('input[name="level"][value="any"]');
        if (r) r.checked = true;
        apply();
      }));
    }
    state.roles.forEach(function (r) {
      any = true;
      chips.appendChild(addChip(ROLE_LABELS[r], function () {
        state.roles = state.roles.filter(function (x) { return x !== r; });
        var c = document.querySelector('input[name="role"][value="' + r + '"]');
        if (c) c.checked = false;
        apply();
      }));
    });
    state.tasks.forEach(function (t) {
      any = true;
      chips.appendChild(addChip(TASK_LABELS[t], function () {
        state.tasks = state.tasks.filter(function (x) { return x !== t; });
        var c = document.querySelector('input[name="task"][value="' + t + '"]');
        if (c) c.checked = false;
        apply();
      }));
    });
    if (state.price !== "any") {
      any = true;
      chips.appendChild(addChip(PRICE_LABELS[state.price], function () {
        state.price = "any";
        document.querySelectorAll(".price-tier").forEach(function (b) { b.classList.toggle("is-active", b.dataset.price === "any"); });
        apply();
      }));
    }
    if (any) {
      var clearAll = addChip("Clear all", clearFilters);
      clearAll.style.background = "var(--line)";
      chips.appendChild(clearAll);
    }
  }

  function apply() {
    var results = sorted(LEARNAI_DATA.courses.filter(matches));
    grid.innerHTML = results.map(cardHTML).join("");
    if (count) count.textContent = String(results.length);
    if (empty) empty.classList.toggle("is-visible", results.length === 0);
    renderChips();
    wirePreviewToggles();
  }

  function wirePreviewToggles() {
    document.querySelectorAll(".preview-toggle").forEach(function (toggle) {
      if (toggle.dataset.wired) return;
      toggle.dataset.wired = "1";
      toggle.addEventListener("click", function () {
        var panel = document.getElementById(toggle.getAttribute("aria-controls"));
        if (!panel) return;
        var open = toggle.getAttribute("aria-expanded") !== "true";
        document.querySelectorAll(".preview-toggle").forEach(function (other) {
          if (other !== toggle && other.getAttribute("aria-expanded") === "true") {
            other.setAttribute("aria-expanded", "false");
            var p = document.getElementById(other.getAttribute("aria-controls"));
            if (p) p.classList.remove("is-open");
          }
        });
        toggle.setAttribute("aria-expanded", String(open));
        panel.classList.toggle("is-open", open);
      });
    });
  }

  function clearFilters() {
    state.level = "any"; state.roles = []; state.tasks = []; state.price = "any"; state.query = "";
    if (queryInput) queryInput.value = "";
    document.querySelectorAll('input[name="level"]').forEach(function (r) { r.checked = r.value === "any"; });
    document.querySelectorAll('input[name="role"], input[name="task"]').forEach(function (c) { c.checked = false; });
    document.querySelectorAll(".price-tier").forEach(function (b) { b.classList.toggle("is-active", b.dataset.price === "any"); });
    apply();
  }

  /* ---------- wire up ---------- */
  document.querySelectorAll('input[name="level"]').forEach(function (r) {
    r.addEventListener("change", function () { state.level = this.value; apply(); });
  });
  document.querySelectorAll('input[name="role"]').forEach(function (c) {
    c.addEventListener("change", function () {
      state.roles = Array.prototype.slice.call(document.querySelectorAll('input[name="role"]:checked')).map(function (i) { return i.value; });
      apply();
    });
  });
  document.querySelectorAll('input[name="task"]').forEach(function (c) {
    c.addEventListener("change", function () {
      state.tasks = Array.prototype.slice.call(document.querySelectorAll('input[name="task"]:checked')).map(function (i) { return i.value; });
      apply();
    });
  });
  document.querySelectorAll(".price-tier").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".price-tier").forEach(function (x) { x.classList.remove("is-active"); });
      b.classList.add("is-active");
      state.price = b.dataset.price;
      apply();
    });
  });

  var sortSelect = $("catalog-sort");
  if (sortSelect) sortSelect.addEventListener("change", function () { state.sort = this.value; apply(); });

  var searchForm = $("catalog-search");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      state.query = queryInput ? queryInput.value.trim() : "";
      apply();
    });
  }
  if (queryInput) {
    queryInput.addEventListener("input", function () {
      var v = this.value.trim();
      if (v.length >= 2 || v.length === 0) { state.query = v; apply(); }
    });
  }

  var clearBtn = $("clear-filters");
  if (clearBtn) clearBtn.addEventListener("click", clearFilters);

  /* ---------- URL params (goal presets / search) ---------- */
  function initFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var q = params.get("q");
    if (q) { state.query = q; if (queryInput) queryInput.value = q; }
    var goal = params.get("goal");
    if (goal) {
      var presets = {
        "grow-business": { roles: ["entrepreneur"], tasks: ["marketing", "admin"] },
        "improve-content": { roles: ["content-creator"], tasks: ["writing", "marketing"] },
        "automate-study": { roles: ["student"], tasks: ["study"] },
        "career-advancement": { roles: ["job-seeker", "student"], tasks: ["writing"] },
        "freelancing-income": { roles: ["freelancer"], tasks: ["marketing", "money-growth"] },
        "master-profession": { roles: ["professional"], tasks: ["productivity"] }
      };
      var p = presets[goal];
      if (p) {
        state.roles = p.roles;
        state.tasks = p.tasks;
        p.roles.forEach(function (r) {
          var c = document.querySelector('input[name="role"][value="' + r + '"]');
          if (c) c.checked = true;
        });
        p.tasks.forEach(function (t) {
          var c = document.querySelector('input[name="task"][value="' + t + '"]');
          if (c) c.checked = true;
        });
      }
    }
    apply();
  }

  /* ---------- boot ---------- */
  window.LEARNAI_DATA.ready.then(function () {
    if (loading) loading.hidden = true;
    if (LEARNAI_DATA.failed) {
      grid.innerHTML = "";
      if (empty) {
        empty.querySelector(".catalog-empty__title").textContent = "Couldn't load the catalog";
        empty.querySelector(".catalog-empty__text").textContent = "Please serve the site over http:// (e.g. python -m http.server 8080) and refresh.";
        empty.classList.add("is-visible");
      }
      return;
    }
    initFromUrl();
  });
})();