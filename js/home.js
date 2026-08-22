/* ============================================================
   ELIMU AI — HOME (featured courses, preview drawers)
   ============================================================ */
(function () {
  "use strict";

  var UI = window.LEARNAI_UI || {};
  var cardHTML = UI.cardHTML;

  function wirePreviewToggles(scope) {
    var toggles = scope.querySelectorAll(".preview-toggle");
    toggles.forEach(function (toggle) {
      if (toggle.dataset.wired) return;
      toggle.dataset.wired = "1";
      toggle.addEventListener("click", function () {
        var panel = document.getElementById(toggle.getAttribute("aria-controls"));
        if (!panel) return;
        var open = toggle.getAttribute("aria-expanded") !== "true";
        toggles.forEach(function (other) {
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

  /* ---------- Featured courses (rendered from data) ---------- */
  var featuredGrid = document.getElementById("featured-grid");
  if (featuredGrid) {
    var loading = document.getElementById("featured-loading");
    window.LEARNAI_DATA.ready.then(function () {
      if (loading) loading.hidden = true;
      if (LEARNAI_DATA.failed) {
        featuredGrid.innerHTML =
          '<p class="catalog-empty__text" style="grid-column:1/-1;text-align:center">Couldn\'t load featured courses. Serve the site over http:// and refresh.</p>';
        return;
      }
      var featured = LEARNAI_DATA.courses.filter(function (c) { return c.featured; }).slice(0, 6);
      featuredGrid.innerHTML = featured.map(cardHTML).join("");
      wirePreviewToggles(featuredGrid);
    });
  }

  /* ---------- Goal selector affordances (visual check) ---------- */
  document.querySelectorAll(".goal-card").forEach(function (card) {
    card.addEventListener("click", function () {
      card.classList.add("is-tapped");
      window.setTimeout(function () { card.classList.remove("is-tapped"); }, 350);
    });
  });

  /* ---------- Generic preview drawers (static markup fallback) ---------- */
  wirePreviewToggles(document);
})();