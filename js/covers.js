/* ============================================================
   ELIMU AI — SHARED UI HELPERS
   Covers, mockups, WhatsApp links, catalog cards
   ============================================================ */
(function () {
  "use strict";

  var WA_NUMBER = "254792238421";
  var BRAND = "Elimu AI";

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function ksh(n) {
    return "KSh " + Number(n).toLocaleString("en-KE");
  }

  function waLink(msg) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  }

  function buyMsg(c) {
    return "Hi " + BRAND + ", I'd like to buy " + c.title + " at " + ksh(c.price) +
      " (down from " + ksh(c.was) + "). Please share M-Pesa payment details.";
  }

  function levelLabel(l) {
    return l === "pro" ? "Pro" : "Beginner";
  }

  /* ---------- cover art (6 styles) ---------- */
  var STYLES = [
    { a: "#064E3B", b: "#047857", accent: "#D97706", deco: "ring" },
    { a: "#111827", b: "#334155", accent: "#10B981", deco: "diag" },
    { a: "#065F46", b: "#059669", accent: "#FDE68A", deco: "rings2" },
    { a: "#0F172A", b: "#1E293B", accent: "#D97706", deco: "bars" },
    { a: "#78350F", b: "#92400E", accent: "#FBBF24", deco: "spark" },
    { a: "#1E293B", b: "#0F172A", accent: "#10B981", deco: "diag" }
  ];

  function coverSVG(id, styleIdx) {
    var s = STYLES[styleIdx % STYLES.length];
    var g = "cg" + id, p = "gg" + id;
    var deco = "";
    if (s.deco === "ring") {
      deco = '<circle cx="236" cy="104" r="44" fill="none" stroke="#ffffff" stroke-opacity=".14" stroke-width="1.5"/>';
    } else if (s.deco === "diag") {
      deco = '<path d="M300 60 200 160" stroke="' + s.accent + '" stroke-opacity=".5" stroke-width="2"/>';
    } else if (s.deco === "rings2") {
      deco = '<circle cx="232" cy="110" r="52" fill="none" stroke="#ffffff" stroke-opacity=".14" stroke-width="1.5"/><circle cx="232" cy="110" r="30" fill="none" stroke="#ffffff" stroke-opacity=".1" stroke-width="1.5"/>';
    } else if (s.deco === "bars") {
      deco = '<path d="M40 120h120M40 146h96M40 172h110" stroke="#ffffff" stroke-opacity=".16" stroke-width="2" stroke-linecap="round"/>';
    } else if (s.deco === "spark") {
      deco = '<path d="M250 56l-10 26-26 10 26 10 10 26 10-26 26-10-26-10Z" fill="' + s.accent + '" fill-opacity=".9"/>';
    }
    return (
      '<svg class="mockup__cover-art" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
        '<defs>' +
          '<linearGradient id="' + g + '" x1="0" y1="0" x2="0" y2="1">' +
            '<stop offset="0" stop-color="' + s.a + '"/><stop offset="1" stop-color="' + s.b + '"/>' +
          '</linearGradient>' +
          '<pattern id="' + p + '" width="24" height="24" patternUnits="userSpaceOnUse">' +
            '<path d="M24 0H0V24" fill="none" stroke="#ffffff" stroke-opacity=".06"/>' +
          '</pattern>' +
        '</defs>' +
        '<rect width="300" height="400" fill="url(#' + g + ')"/>' +
        '<rect width="300" height="400" fill="url(#' + p + ')"/>' +
        '<path d="M0 322 300 246v154H0Z" fill="#ffffff" fill-opacity=".05"/>' +
        '<rect x="24" y="306" width="64" height="3" fill="' + s.accent + '"/>' +
        deco +
      '</svg>'
    );
  }

  /* ---------- product mockups (book / tablet / folder) ---------- */
  function mockupHTML(g, opts) {
    opts = opts || {};
    var styleIdx = opts.coverStyle != null ? opts.coverStyle : g.cover;
    var title = '<span class="mockup__title">' + esc(g.title) + "</span>";
    var subTxt = opts.subOverride != null ? opts.subOverride : (g.prompts + " prompts · " + esc(g.cat));
    var sub = '<span class="mockup__sub">' + esc(subTxt) + "</span>";
    var aria = ' role="img" aria-label="' + esc(g.title) + " cover";
    var inner = "";

    if (g.mockup === "tablet") {
      inner =
        '<div class="mockup__device">' +
          '<span class="mockup__camera"></span>' +
          '<div class="mockup__screen">' +
            '<div class="mockup__screen-ui">' +
              '<div class="mockup__ui-row mockup__ui-row--dark" style="width:52%"></div>' +
              '<div class="mockup__ui-row mockup__ui-row--short"></div>' +
              '<div class="mockup__ui-row mockup__ui-row--md"></div>' +
              '<div class="mockup__ui-row mockup__ui-row--short"></div>' +
              '<div class="mockup__ui-row mockup__ui-row--gold" style="width:40%"></div>' +
              '<div class="mockup__ui-row mockup__ui-row--md"></div>' +
              '<div class="mockup__ui-row mockup__ui-row--dark" style="width:56%"></div>' +
            '</div>' +
            '<div class="mockup__glare"></div>' +
          '</div>' +
        '</div>';
    } else if (g.mockup === "folder") {
      inner =
        '<div class="mockup__folder-back"></div>' +
        '<div class="mockup__doc mockup__doc--1"><div class="line"></div><div class="line line--short"></div><div class="line"></div><div class="line line--accent"></div><div class="line line--short"></div></div>' +
        '<div class="mockup__doc mockup__doc--2"><div class="line"></div><div class="line"></div><div class="line line--accent"></div><div class="line line--short"></div></div>' +
        '<div class="mockup__doc mockup__doc--3"><div class="line"></div><div class="line line--short"></div><div class="line line--accent"></div></div>' +
        '<div class="mockup__folder-front"></div>';
    } else {
      inner =
        '<div class="mockup__pages"></div>' +
        '<div class="mockup__spine"></div>' +
        '<div class="mockup__cover">' +
          coverSVG(styleIdx + 100, styleIdx) +
          '<span class="mockup__brand"><span class="dot"></span>' + BRAND + "</span>" +
          title + sub +
        "</div>";
    }
    var wrap = '<div class="mockup__shine"></div>';
    var stageId = opts.stageId ? ' id="' + opts.stageId + '"' : "";
    var stage = '<div class="mockup__stage"' + stageId + ">" + inner + wrap + "</div>";
    var shadow = '<div class="mockup__shadow"></div>';
    if (opts.wrap === false) return stage + shadow;
    return (
      '<div class="mockup mockup--' + esc(g.mockup) + '"' + aria + ">" +
        stage + shadow +
      "</div>"
    );
  }

  /* ---------- full catalog card (with preview drawer) ---------- */
  function cardHTML(g) {
    var url = "guide.html?id=" + g.id;
    var badges =
      '<div class="guide-card__badges">' +
        '<span class="badge badge--dark">' + esc(g.cat) + "</span>" +
        '<span class="badge' + (g.level === "pro" ? " badge--gold" : "") + '">' + levelLabel(g.level) + "</span>" +
      "</div>";
    var facts =
      '<li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>' + (LEARNAI_DATA.chapters[g.id] || []).length + " chapters</li>" +
      '<li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2c.5 4.6 2.6 6.7 7 7-4.4.3-6.5 2.4-7 7-.5-4.6-2.6-6.7-7-7 4.4-.3 6.5-2.4 7-7z"/></svg>' + g.prompts + " prompts</li>" +
      '<li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 7v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>' + esc(g.format) + "</li>";

    var waMsg = buyMsg(g);
    var waIcon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>';

    return (
      '<article class="guide-card" data-id="' + g.id + '">' +
        '<div class="guide-card__visual"><div class="mockup-holder">' + badges + mockupHTML(g) + "</div></div>" +
        '<div class="guide-card__body">' +
          '<h3 class="guide-card__title"><a href="' + url + '">' + esc(g.title) + "</a></h3>" +
          '<p class="guide-card__desc">' + esc(g.tagline) + "</p>" +
          '<ul class="guide-card__facts">' + facts + "</ul>" +
        "</div>" +
        '<div class="guide-card__foot">' +
          '<div class="guide-card__price"><span class="now tabular">' + ksh(g.price) + '</span><span class="was tabular">' + ksh(g.was) + "</span></div>" +
          '<a class="btn btn--whatsapp btn--xs" href="' + waLink(waMsg) + '">' + waIcon + "Unlock</a>" +
        "</div>" +
        '<button class="preview-toggle" aria-expanded="false" aria-controls="preview-' + g.id + '">' +
          '<span class="preview-toggle__label">Preview inside</span>' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>' +
        "</button>" +
        '<div class="guide-card__preview" id="preview-' + g.id + '">' +
          '<div class="guide-card__preview-inner"><div>' +
            '<div class="preview-page">' +
              '<div class="preview-page__head"></div>' +
              '<div class="preview-page__line"></div>' +
              '<div class="preview-page__line" style="width:92%"></div>' +
              '<div class="preview-page__line" style="width:78%"></div>' +
              '<div class="preview-page__line" style="width:88%"></div>' +
              '<div class="preview-page__line" style="width:60%"></div>' +
              '<div class="preview-lock"><span>' +
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>' +
                "Locked preview" +
              "</span></div>" +
            "</div>" +
            '<a class="btn btn--primary btn--block" href="' + url + '">See inside · ' + ksh(g.price) + "</a>" +
          "</div></div>" +
        "</div>" +
      "</article>"
    );
  }

  /* ---------- stars + rating ---------- */
  function stars(aria) {
    var s = "";
    for (var i = 0; i < 5; i++) s += '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    return '<span class="testimonial__stars" aria-label="' + aria + '">' + s + "</span>";
  }

  window.LEARNAI_UI = {
    WA_NUMBER: WA_NUMBER,
    BRAND: BRAND,
    esc: esc,
    ksh: ksh,
    waLink: waLink,
    buyMsg: buyMsg,
    levelLabel: levelLabel,
    STYLES: STYLES,
    coverSVG: coverSVG,
    mockupHTML: mockupHTML,
    cardHTML: cardHTML,
    stars: stars
  };
})();