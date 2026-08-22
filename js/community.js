/* ============================================================
   LEARNAI — COMMUNITY (FAQ accordion, request form)
   ============================================================ */
(function () {
  "use strict";

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".accordion__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".accordion__item");
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      var open = btn.getAttribute("aria-expanded") !== "true";

      /* Close siblings for a tidy single-open accordion */
      item.parentElement.querySelectorAll(".accordion__item").forEach(function (other) {
        if (other !== item && other.classList.contains("is-open")) {
          other.classList.remove("is-open");
          var ob = other.querySelector(".accordion__btn");
          var op = document.getElementById(ob.getAttribute("aria-controls"));
          ob.setAttribute("aria-expanded", "false");
          if (op) op.hidden = true;
        }
      });

      item.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      if (panel) panel.hidden = !open;
    });
  });

  /* Ensure initial open panel's region isn't hidden */
  document.querySelectorAll(".accordion__item.is-open .accordion__panel").forEach(function (p) {
    p.hidden = false;
  });

  /* ---------- Request form validation ---------- */
  var form = document.getElementById("request-form");
  if (!form) return;

  var fields = {
    topic: document.getElementById("req-topic"),
    description: document.getElementById("req-desc"),
    contact: document.getElementById("req-contact")
  };

  var validators = {
    topic: function (v) { return v.trim().length >= 3; },
    description: function (v) { return v.trim().length >= 20; },
    contact: function (v) { return /^(\+?254|0)[7][0-9]{8}$/.test(v.trim()) || /^[0-9+\s-]{9,15}$/.test(v.trim()); }
  };

  function validate(field) {
    var el = fields[field];
    var ok = validators[field](el.value);
    el.closest(".field").classList.toggle("field--error", !ok);
    return ok;
  }

  Object.keys(fields).forEach(function (f) {
    fields[f].addEventListener("blur", function () { validate(f); });
    fields[f].addEventListener("input", function () {
      if (fields[f].closest(".field").classList.contains("field--error")) validate(f);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var allOk = Object.keys(fields).every(function (f) { return validate(f); });
    if (!allOk) return;

    var success = document.getElementById("request-success");
    if (success) {
      success.classList.add("is-visible");
      success.setAttribute("aria-hidden", "false");
      if (success.scrollIntoView) success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    form.style.display = "none";
  });
})();