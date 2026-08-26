/* resources.js — renders sample prompts from courses.json grouped by category */
(function () {
  "use strict";

  var root = document.getElementById("resources-root");
  if (!root) return;

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function waLink(msg) {
    return "https://wa.me/254792238421?text=" + encodeURIComponent(msg);
  }

  var CAT_ORDER = ["AI Basics", "Business", "Content", "Freelancing", "Career", "Everyday AI", "Student"];
  var CAT_LABELS = {
    "AI Basics": "AI Basics & Prompting",
    "Business": "Business & Entrepreneurship",
    "Content": "Content Creation",
    "Freelancing": "Freelancing & Remote Work",
    "Career": "Career & Job Search",
    "Everyday AI": "Everyday AI Tools",
    "Student": "Student & Academic"
  };

  function render() {
    var D = window.LEARNAI_DATA;
    if (!D || !D.courses || !D.courses.length) {
      root.innerHTML = '<p style="text-align:center;color:var(--ink-soft);padding:var(--s-8) 0">Could not load prompts. Please refresh the page.</p>';
      return;
    }

    var groups = {};
    D.courses.forEach(function (c) {
      var cat = c.cat || "Other";
      if (!groups[cat]) groups[cat] = [];
      var prompts = D.prompts && D.prompts[String(c.id)];
      if (prompts && prompts.length) {
        groups[cat].push({ course: c, prompts: prompts });
      }
    });

    var html = "";
    CAT_ORDER.forEach(function (cat) {
      var items = groups[cat];
      if (!items || !items.length) return;

      var totalPrompts = 0;
      items.forEach(function (item) { totalPrompts += item.prompts.length; });

      html += '<section class="resources-category" data-reveal>';
      html += '<div class="resources-category__header">';
      html += '<h2 class="resources-category__title">' + esc(CAT_LABELS[cat] || cat) + '</h2>';
      html += '<span class="resources-category__count">' + totalPrompts + ' free prompts</span>';
      html += '</div>';

      items.forEach(function (item) {
        var c = item.course;
        var courseUrl = "guide.html?slug=" + encodeURIComponent(c.slug);

        html += '<article class="resources-course">';
        html += '<div class="resources-course__head">';
        html += '<h3 class="resources-course__title"><a href="' + courseUrl + '">' + esc(c.title) + '</a></h3>';
        html += '<span class="resources-course__meta">' + esc(c.level) + ' · ' + esc(String(c.prompts)) + ' prompts inside</span>';
        html += '</div>';

        item.prompts.forEach(function (p, i) {
          html += '<div class="resources-prompt">';
          html += '<div class="resources-prompt__label">Prompt ' + String(i + 1).padStart(2, "0") + '</div>';
          html += '<p class="resources-prompt__text">' + esc(p.t) + '</p>';
          html += '</div>';
        });

        html += '<a class="btn btn--ghost btn--sm resources-course__cta" href="' + courseUrl + '">Get all ' + esc(String(c.prompts)) + ' prompts →</a>';
        html += '</article>';
      });

      html += '</section>';
    });

    root.innerHTML = html;
  }

  if (window.LEARNAI_DATA && window.LEARNAI_DATA.loaded) {
    render();
  } else {
    window.addEventListener("learnavi:ready", render);
    window.addEventListener("learnavi:error", function () {
      root.innerHTML = '<p style="text-align:center;color:var(--ink-soft);padding:var(--s-8) 0">Could not load prompts. Please refresh the page.</p>';
    });
  }
})();
