/* ============================================================
   LEARNAI — MAIN (shared behaviors: header, nav, ticker, reveal)
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Sticky header shadow ---------- */
  var header = document.getElementById("site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Live purchase ticker ---------- */
  var TICKER_KEY = "elimuai-ticker-dismissed";
  var tickerPool = [
    { name: "Mercy K.", loc: "Kisumu",   item: "ChatGPT Basics for Beginners",            mins: "10" },
    { name: "Brian O.", loc: "Nairobi",  item: "AI for WhatsApp Business Replies",        mins: "4"  },
    { name: "Achieng P.", loc: "Mombasa", item: "AI for School & Assignment Help",        mins: "22" },
    { name: "Dennis W.", loc: "Nakuru",  item: "AI for WhatsApp Business Replies",        mins: "6"  },
    { name: "Faith M.", loc: "Eldoret",  item: "AI for CV & Cover Letter Writing",        mins: "3"  },
    { name: "Kevin N.", loc: "Thika",    item: "Using AI to Write Social Media Captions", mins: "14" },
    { name: "Sarah L.", loc: "Nyeri",    item: "Prompt Engineering for Profit",           mins: "8"  },
    { name: "Tom K.",   loc: "Machakos", item: "AI for Quick Legal & Business Letters",   mins: "19" }
  ];

  var ticker = document.getElementById("ticker");
  if (ticker) {
    var tName = document.getElementById("ticker-name");
    var tLoc = document.getElementById("ticker-loc");
    var tItem = document.getElementById("ticker-item");
    var tTime = document.getElementById("ticker-time");
    var tClose = document.getElementById("ticker-close");

    var index = Math.floor(Math.random() * tickerPool.length);

    var showEntry = function (i) {
      var e = tickerPool[i];
      if (tName) tName.textContent = e.name;
      if (tLoc) tLoc.textContent = e.loc;
      if (tItem) tItem.textContent = e.item;
      if (tTime) tTime.textContent = e.mins + " minutes ago";
    };

    var startTicker = function () {
      showEntry(index);
      ticker.classList.add("is-visible");
      window.setInterval(function () {
        index = (index + 1) % tickerPool.length;
        showEntry(index);
      }, 9000);
    };

    var dismissed = false;
    try { dismissed = localStorage.getItem(TICKER_KEY) === "1"; } catch (e) { dismissed = false; }

    if (dismissed) {
      ticker.style.display = "none";
    } else {
      window.setTimeout(startTicker, 4000);
    }

    if (tClose) {
      tClose.addEventListener("click", function () {
        ticker.classList.remove("is-visible");
        try { localStorage.setItem(TICKER_KEY, "1"); } catch (e) {}
        window.setTimeout(function () { ticker.style.display = "none"; }, 700);
      });
    }
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el, i) {
      el.style.setProperty("--reveal-delay", Math.min(i % 6, 4) * 60 + "ms");
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();