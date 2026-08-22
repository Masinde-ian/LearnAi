/* ============================================================
   ELIMU AI — DATA LOADER
   Fetches data/courses.json once and exposes LEARNAI_DATA
   ============================================================ */
(function () {
  "use strict";

  var data = {
    meta: {},
    instructors: {},
    courses: [],
    chapters: {},
    prompts: {},
    loaded: false,
    failed: false,
    error: null,
    ready: null,
    byId: null,
    bySlug: null
  };

  data.ready = fetch("data/courses.json", { cache: "no-store" })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (json) {
      data.meta = json.meta || data.meta;
      data.instructors = json.instructors || {};
      data.courses = json.courses || [];
      data.chapters = json.chapters || {};
      data.prompts = json.prompts || {};
      data.byId = function (id) {
        return data.courses.find(function (c) { return c.id === Number(id); });
      };
      data.bySlug = function (slug) {
        return data.courses.find(function (c) { return c.slug === slug; });
      };
      data.loaded = true;
      return data;
    })
    .catch(function (err) {
      data.failed = true;
      data.error = err;
      return data;
    });

  window.LEARNAI_DATA = data;
})();