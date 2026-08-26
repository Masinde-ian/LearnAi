/* tools/generate-assets.js — Generate OG image and favicon PNGs */
"use strict";
var createCanvas = require("canvas").createCanvas;
var fs = require("fs");
var path = require("path");

var ROOT = path.join(__dirname, "..");
var EMERALD = "#064E3B";
var EMERALD_800 = "#065F46";
var GOLD = "#EAB308";
var WHITE = "#FFFFFF";

/* ── helpers ─────────────────────────────────────────────── */

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

/* Draw the Elimu AI icon at (cx, cy) with given size */
function drawIcon(ctx, cx, cy, size) {
  var r = size * 0.18;          /* corner radius */
  var x = cx - size / 2;
  var y = cy - size / 2;

  /* shadow */
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.25)";
  ctx.shadowBlur = size * 0.08;
  ctx.shadowOffsetY = size * 0.03;
  roundedRect(ctx, x, y, size, size, r);
  ctx.fillStyle = EMERALD;
  ctx.fill();
  ctx.restore();

  /* gold accent — small circle top-right */
  var accentR = size * 0.1;
  var accentX = cx + size * 0.28;
  var accentY = cy - size * 0.28;
  ctx.beginPath();
  ctx.arc(accentX, accentY, accentR, 0, Math.PI * 2);
  ctx.fillStyle = GOLD;
  ctx.fill();

  /* gold sparkle lines */
  ctx.save();
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = size * 0.025;
  ctx.lineCap = "round";
  var sl = size * 0.07;
  /* top-left sparkle */
  ctx.beginPath();
  ctx.moveTo(accentX - accentR - sl, accentY - sl);
  ctx.lineTo(accentX - accentR + sl * 0.3, accentY + sl * 0.3);
  ctx.stroke();
  /* bottom-right sparkle */
  ctx.beginPath();
  ctx.moveTo(accentX + accentR + sl, accentY + sl);
  ctx.lineTo(accentX + accentR - sl * 0.3, accentY - sl * 0.3);
  ctx.stroke();
  ctx.restore();

  /* "AI" text */
  ctx.fillStyle = WHITE;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold " + (size * 0.42) + "px Arial, Helvetica, sans-serif";
  ctx.fillText("AI", cx - size * 0.02, cy + size * 0.02);
}

/* ── OG IMAGE (1200 x 630) ──────────────────────────────── */

function generateOG() {
  var W = 1200, H = 630;
  var canvas = createCanvas(W, H);
  var ctx = canvas.getContext("2d");

  /* background gradient — deep emerald with subtle warmth */
  var grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, "#043D2E");
  grad.addColorStop(0.5, EMERALD);
  grad.addColorStop(1, "#074F3C");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  /* subtle grid pattern */
  ctx.save();
  ctx.globalAlpha = 0.04;
  ctx.strokeStyle = WHITE;
  ctx.lineWidth = 1;
  for (var gx = 0; gx < W; gx += 60) {
    ctx.beginPath();
    ctx.moveTo(gx, 0);
    ctx.lineTo(gx, H);
    ctx.stroke();
  }
  for (var gy = 0; gy < H; gy += 60) {
    ctx.beginPath();
    ctx.moveTo(0, gy);
    ctx.lineTo(W, gy);
    ctx.stroke();
  }
  ctx.restore();

  /* decorative circles — subtle depth */
  ctx.save();
  ctx.globalAlpha = 0.06;
  ctx.beginPath();
  ctx.arc(1000, 150, 300, 0, Math.PI * 2);
  ctx.fillStyle = GOLD;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(150, 500, 200, 0, Math.PI * 2);
  ctx.fillStyle = WHITE;
  ctx.fill();
  ctx.restore();

  /* logo icon — left side */
  drawIcon(ctx, 220, H / 2, 180);

  /* text — right of center */
  var textX = 420;

  /* "Elimu AI" title */
  ctx.fillStyle = WHITE;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.font = "bold 72px Arial, Helvetica, sans-serif";
  ctx.fillText("Elimu AI", textX, 155);

  /* tagline */
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = "500 32px Arial, Helvetica, sans-serif";
  ctx.fillText("Practical AI Courses for Kenya", textX, 250);

  /* stats line */
  ctx.fillStyle = GOLD;
  ctx.font = "bold 26px Arial, Helvetica, sans-serif";
  ctx.fillText("68 Courses  ·  5,000+ Prompts  ·  M-Pesa", textX, 310);

  /* bottom tagline */
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.font = "400 20px Arial, Helvetica, sans-serif";
  ctx.fillText("ChatGPT · Claude · Gemini · Canva", textX, 370);

  /* bottom gold accent bar */
  ctx.fillStyle = GOLD;
  ctx.fillRect(0, H - 6, W, 6);

  /* write file */
  var buf = canvas.toBuffer("image/png");
  fs.writeFileSync(path.join(ROOT, "data", "og-image.png"), buf);
  console.log("Generated data/og-image.png (" + buf.length + " bytes)");
}

/* ── FAVICON ─────────────────────────────────────────────── */

function generateFavicon(size, filename) {
  var canvas = createCanvas(size, size);
  var ctx = canvas.getContext("2d");

  /* background */
  var r = size * 0.18;
  roundedRect(ctx, 0, 0, size, size, r);
  ctx.fillStyle = EMERALD;
  ctx.fill();

  /* gold accent */
  var accentR = size * 0.1;
  ctx.beginPath();
  ctx.arc(size * 0.78, size * 0.22, accentR, 0, Math.PI * 2);
  ctx.fillStyle = GOLD;
  ctx.fill();

  /* sparkle lines */
  ctx.save();
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = Math.max(1, size * 0.025);
  ctx.lineCap = "round";
  var sl = size * 0.07;
  var ax = size * 0.78, ay = size * 0.22;
  ctx.beginPath();
  ctx.moveTo(ax - accentR - sl, ay - sl);
  ctx.lineTo(ax - accentR + sl * 0.3, ay + sl * 0.3);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(ax + accentR + sl, ay + sl);
  ctx.lineTo(ax + accentR - sl * 0.3, ay - sl * 0.3);
  ctx.stroke();
  ctx.restore();

  /* "AI" text */
  ctx.fillStyle = WHITE;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold " + (size * 0.42) + "px Arial, Helvetica, sans-serif";
  ctx.fillText("AI", size * 0.48, size * 0.52);

  var buf = canvas.toBuffer("image/png");
  fs.writeFileSync(path.join(ROOT, filename), buf);
  console.log("Generated " + filename + " (" + buf.length + " bytes)");
}

/* ── MAIN ────────────────────────────────────────────────── */

generateOG();
generateFavicon(32, "favicon.png");
generateFavicon(180, "favicon-180.png");

console.log("Done. Run 'node tools/generate-assets.js' to regenerate.");
