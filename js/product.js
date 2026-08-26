/* ============================================================
   ELIMU AI — PRODUCT PAGE (template renderer + tabs/gallery/tilt)
   Reads ?id= or ?slug= from the URL and renders the course
   ============================================================ */
(function () {
  "use strict";

  var UI = window.LEARNAI_UI || {};
  var esc = UI.esc, ksh = UI.ksh, waLink = UI.waLink, buyMsg = UI.buyMsg;
  var mockupHTML = UI.mockupHTML, levelLabel = UI.levelLabel;

  var root = document.getElementById("course-root");
  if (!root) return;

  var checkSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>';
  var waIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>';

  function roleLabels(c) {
    var labels = {
      student: "Students", "job-seeker": "Job seekers", entrepreneur: "Entrepreneurs",
      "content-creator": "Content creators", freelancer: "Freelancers", professional: "Professionals"
    };
    return c.roles.map(function (r) { return labels[r] || r; }).join(" · ");
  }

  function chapterHTML(list) {
    return list.map(function (ch, i) {
      return '<div class="chapter">' +
        '<span class="chapter__num tabular">' + String(i + 1).padStart(2, "0") + "</span>" +
        "<div><div class=\"chapter__title\">" + esc(ch.t) + "</div>" +
        '<p class="chapter__obj">' + esc(ch.o) + "</p></div>" +
        '<span class="chapter__len">' + esc(ch.m) + "</span></div>";
    }).join("");
  }

  function promptsHTML(list, total) {
    var html = list.map(function (p, i) {
      return '<div class="prompt">' +
        '<div class="prompt__label">Prompt ' + String(i + 1).padStart(2, "0") + "</div>" +
        "<p>" + esc(p.t) + "</p></div>";
    }).join("");
    var btn = waLink(buyMsg(course));
    return '<div class="prompts-free">' + html +
      '<div class="prompts-free__cta">' +
        '<span class="badge badge--emerald">' + total + " prompts inside the full course</span>" +
        '<a class="btn btn--primary" href="' + btn + '">Unlock all ' + total + " prompts</a>" +
        '<span class="form-note">Unlocked instantly after M-Pesa payment</span>' +
      "</div></div>";
  }

  function authorsHTML(keys) {
    var instructors = window.LEARNAI_DATA.instructors || {};
    var grads = ["linear-gradient(140deg,#064E3B,#047857)", "linear-gradient(140deg,#111827,#334155)", "linear-gradient(140deg,#78350F,#92400E)", "linear-gradient(140deg,#0F172A,#1E293B)"];
    return keys.map(function (k, i) {
      var a = instructors[k] || {};
      var tags = (a.tags || []).map(function (t) { return '<span class="badge">' + esc(t) + "</span>"; }).join("");
      return '<div class="author-card">' +
        '<span class="author-card__avatar" style="background:' + grads[i % grads.length] + '" aria-hidden="true">' + esc(a.initials || k) + "</span>" +
        "<div>" +
          '<div class="author-card__name">' + esc(a.name || k) + "</div>" +
          '<div class="author-card__role">' + esc(a.role || "") + "</div>" +
          '<p class="author-card__bio">' + esc(a.bio || "") + "</p>" +
          (tags ? '<div class="author-card__tags">' + tags + "</div>" : "") +
        "</div></div>";
    }).join("");
  }

  var course = null;

  function render(c) {
    course = c;
    var chapters = window.LEARNAI_DATA.chapters[c.id] || [];
    var prompts = window.LEARNAI_DATA.prompts[c.id] || [];
    var wa = waLink(buyMsg(c));
    var starsHTML = "";
    for (var s = 0; s < 5; s++) {
      starsHTML += '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
    var galleryLines = [
      '<div class="gallery__line gallery__line--dark" style="width:60%"></div><div class="gallery__line"></div><div class="gallery__line gallery__line--short"></div><div class="gallery__line" style="width:80%"></div><div class="gallery__line gallery__line--short"></div>',
      '<div class="gallery__line gallery__line--gold" style="width:44%"></div><div class="gallery__line"></div><div class="gallery__line gallery__line--short"></div><div class="gallery__line" style="width:70%"></div><div class="gallery__line gallery__line--dark" style="width:52%"></div>',
      '<div class="gallery__line gallery__line--dark" style="width:70%"></div><div class="gallery__line"></div><div class="gallery__line" style="width:88%"></div><div class="gallery__line gallery__line--short"></div><div class="gallery__line gallery__line--gold" style="width:40%"></div>'
    ];

    root.innerHTML =
      '<nav class="breadcrumb" aria-label="Breadcrumb">' +
        '<a href="index.html">Home</a>' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>' +
        '<a href="guides.html">All Courses</a>' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>' +
        '<span aria-current="page">' + esc(c.title) + "</span>" +
      "</nav>" +

      '<header class="product-head">' +
        '<div class="product-head__meta">' +
          '<span class="badge badge--dark">' + esc(c.cat) + "</span>" +
          '<span class="badge' + (c.level === "pro" ? " badge--gold" : "") + '">' + levelLabel(c.level) + "</span>" +
          '<span class="badge">' + esc(roleLabels(c)) + "</span>" +
          '<span class="testimonial__stars" style="margin-left:var(--s-1)" aria-label="' + c.rating + ' out of 5 stars">' + starsHTML + "</span>" +
          '<span class="section-head__count tabular">' + c.rating + " · " + c.unlocks + "+ unlocks · Updated " + c.updated + "</span>" +
        "</div>" +
        "<h1>" + esc(c.title) + "</h1>" +
      "</header>" +

      '<div class="product-layout">' +

        '<div class="product-media">' +
          '<div class="product-stage" data-tilt id="product-stage">' +
            '<div class="mockup mockup--' + esc(c.mockup) + '" id="product-mockup">' +
              mockupHTML(c, { coverStyle: c.cover, wrap: false, stageId: "product-stage-3d" }) +
            "</div>" +
            '<span class="product-stage__hint">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2c.5 4.6 2.6 6.7 7 7-4.4.3-6.5 2.4-7 7-.5-4.6-2.6-6.7-7-7 4.4-.3 6.5-2.4 7-7z"/></svg>' +
              "Drag to rotate" +
            "</span>" +
          "</div>" +

          '<div class="gallery" role="group" aria-label="Course previews">' +
            [0, 1, 2].map(function (i) {
              return '<button class="gallery__thumb' + (i === 0 ? " is-active" : "") + '" data-index="' + i + '" aria-label="Preview ' + (i + 1) + '">' + galleryLines[i] + "</button>";
            }).join("") +
          "</div>" +

          '<div class="cta-block">' +
            '<div class="cta-block__price">' +
              '<span class="now tabular">' + ksh(c.price) + "</span>" +
              '<span class="was tabular">' + ksh(c.was) + "</span>" +
              '<span class="once">one-time · lifetime access</span>' +
            "</div>" +
            '<ul class="cta-block__list">' +
              "<li>" + checkSvg + c.prompts + " copy-paste prompts + " + chapters.length + " guided chapters</li>" +
              "<li>" + checkSvg + "Reads on any phone · no app required</li>" +
              "<li>" + checkSvg + "Free lifetime updates</li>" +
              "<li>" + checkSvg + "Pay once — keep it forever, no subscription</li>" +
            "</ul>" +
            '<a class="btn btn--whatsapp btn--lg btn--block" href="' + wa + '">' + waIcon + "Quick Unlock via WhatsApp</a>" +
            '<p class="cta-block__pay">' +
              '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M12 18h.01"/></svg>' +
              "Pay securely with M-Pesa, Visa or Airtel Money. Course delivered on WhatsApp in minutes." +
            "</p>" +
          "</div>" +
        "</div>" +

        "<div>" +
          '<span class="eyebrow eyebrow--emerald">The problem, solved</span>' +
          '<h2 class="display-sm" style="margin-block:var(--s-3)">' + esc(c.title) + "</h2>" +
          '<p class="lede" style="margin-bottom:var(--s-5)">' + esc(c.desc) + "</p>" +

          (c.preview ? '<section class="product-preview" data-reveal>' +
            '<span class="eyebrow eyebrow--emerald">Free Preview</span>' +
            '<h3 class="product-preview__title">What you will learn</h3>' +
            '<p class="product-preview__text">' + esc(c.preview) + "</p>" +
          "</section>" : "") +

          '<div class="product-tabs" role="tablist" aria-label="Course details">' +
            '<button role="tab" id="tab-1" aria-controls="panel-1" aria-selected="true">Inside the Course</button>' +
            '<button role="tab" id="tab-2" aria-controls="panel-2" aria-selected="false">Sample Prompts</button>' +
            '<button role="tab" id="tab-3" aria-controls="panel-3" aria-selected="false">About the Authors</button>' +
          "</div>" +

          '<section class="tab-panel is-active" id="panel-1" role="tabpanel" aria-labelledby="tab-1" data-tab-panel>' +
            chapterHTML(chapters) +
          "</section>" +

          '<section class="tab-panel" id="panel-2" role="tabpanel" aria-labelledby="tab-2" data-tab-panel>' +
            promptsHTML(prompts, c.prompts) +
          "</section>" +

          '<section class="tab-panel" id="panel-3" role="tabpanel" aria-labelledby="tab-3" data-tab-panel>' +
            authorsHTML(c.authors || []) +
          "</section>" +

          '<div class="trust-panel">' +
            '<div class="trust-panel__row">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M12 18h.01"/></svg>' +
              "<div><b>Local payment security</b><p>Pay via M-Pesa Paybill, Visa or Airtel Money. You get an automated receipt and the course is delivered to your WhatsApp immediately — no account needed.</p></div>" +
            "</div>" +
            '<div class="trust-panel__row">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>' +
              "<div><b>Curated &amp; lifetime-owned</b><p>Pay once and keep the course forever — lifetime updates included at no extra cost. Personal-use license — share it freely inside your own team, not publicly.</p></div>" +
            "</div>" +
            '<div class="trust-panel__row">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
              "<div><b>Human WhatsApp support</b><p>Questions? A real support person answers on WhatsApp, 7am–10pm EAT. Delivery problems are fixed within the hour.</p></div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>";

    document.title = c.title + " — Elimu AI";
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", c.desc + " " + ksh(c.price) + " one-time. Unlock instantly via M-Pesa or WhatsApp.");

    var pageUrl = location.href;
    var ogDesc = c.desc + " " + ksh(c.price) + " one-time. Unlock instantly via M-Pesa or WhatsApp.";

    function setMeta(attr, key, val) {
      var el = document.querySelector('meta[property="' + attr + '"]') || document.querySelector('meta[name="' + attr + '"]');
      if (el) el.setAttribute("content", val);
    }
    setMeta("og:title", null, c.title + " — Elimu AI");
    setMeta("og:description", null, ogDesc);
    setMeta("og:url", null, pageUrl);
    setMeta("og:type", null, "product");
    setMeta("twitter:title", null, c.title + " — Elimu AI");
    setMeta("twitter:description", null, ogDesc);

    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", pageUrl);

    var existingLD = document.getElementById("course-jsonld");
    if (existingLD) existingLD.remove();
    var ldScript = document.createElement("script");
    ldScript.type = "application/ld+json";
    ldScript.id = "course-jsonld";
    ldScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": c.title,
      "description": c.desc,
      "provider": {
        "@type": "Organization",
        "name": "Elimu AI",
        "url": "https://elimuaike.co.ke"
      },
      "url": pageUrl,
      "dateModified": c.updated || new Date().toISOString().slice(0, 10),
      "offers": {
        "@type": "Offer",
        "price": c.price,
        "priceCurrency": "KES",
        "availability": "https://schema.org/InStock"
      }
    });
    document.head.appendChild(ldScript);

    wireTabs();
    wireGallery();
    wireTilt();
  }

  function wireTabs() {
    var buttons = root.querySelectorAll(".product-tabs [role='tab']");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.setAttribute("aria-selected", "false"); });
        btn.setAttribute("aria-selected", "true");
        root.querySelectorAll("[data-tab-panel]").forEach(function (p) {
          p.classList.toggle("is-active", p.id === btn.getAttribute("aria-controls"));
        });
      });
    });
  }

  function wireGallery() {
    var thumbs = root.querySelectorAll(".gallery__thumb");
    var stage = document.getElementById("product-stage-3d");
    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        thumbs.forEach(function (t) { t.classList.remove("is-active"); });
        thumb.classList.add("is-active");
        var i = Number(thumb.dataset.index);
        var mockup = document.getElementById("product-mockup");
        var angles = [-26, -14, -38];
        if (mockup && stage) {
          mockup.innerHTML = mockupHTML(course, { coverStyle: course.cover + i, wrap: false, stageId: "product-stage-3d" });
          var el = document.getElementById("product-stage-3d");
          el.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
          el.style.transform = "rotateX(6deg) rotateY(" + angles[i % angles.length] + "deg)";
        }
      });
    });
  }

  function wireTilt() {
    var stage = document.getElementById("product-stage");
    var threeD = document.getElementById("product-stage-3d");
    var canHover = window.matchMedia ? window.matchMedia("(hover: hover)").matches : true;
    var reduceMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
    if (stage && threeD && canHover && !reduceMotion) {
      var base = { x: 6, y: -26 };
      stage.addEventListener("pointermove", function (e) {
        var rect = stage.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        threeD.style.transition = "none";
        threeD.style.transform = "rotateX(" + (base.x - py * 14).toFixed(1) + "deg) rotateY(" + (base.y + px * 22).toFixed(1) + "deg)";
      });
      stage.addEventListener("pointerleave", function () {
        threeD.style.transition = "transform .6s cubic-bezier(.16,1,.3,1)";
        threeD.style.transform = "";
      });
    }
  }

  function renderNotFound() {
    root.innerHTML =
      '<div class="course-state">' +
        '<span class="badge badge--dark">Not found</span>' +
        '<h1 class="display-sm" style="margin-block:var(--s-3)">We couldn\'t find that course</h1>' +
        '<p class="lede" style="margin-bottom:var(--s-6)">The course may have moved or been renamed. Browse the full catalog or ask us directly.</p>' +
        '<div style="display:flex;gap:var(--s-3);flex-wrap:wrap">' +
          '<a class="btn btn--primary" href="guides.html">Browse all 65 courses</a>' +
          '<a class="btn btn--whatsapp" href="' + waLink("Hi Elimu AI, I need help finding a course.") + '">Ask on WhatsApp</a>' +
        "</div>" +
      "</div>";
  }

  /* ---------- boot ---------- */
  var params = new URLSearchParams(window.location.search);
  window.LEARNAI_DATA.ready.then(function () {
    if (LEARNAI_DATA.failed) {
      renderNotFound();
      return;
    }
    var c = params.get("id") ? LEARNAI_DATA.byId(params.get("id")) : null;
    if (!c && params.get("slug")) c = LEARNAI_DATA.bySlug(params.get("slug"));
    if (c) render(c);
    else renderNotFound();
  });
})();