# LearnAI Course Template & Style Guide

Use this template for every course file in this library. Depth scales by tier (see below). All content targets Kenyan learners — mobile-first, M-Pesa context, local platforms and examples. Write in clear, warm, practical English (short sentences). No corporate fluff. Where relevant, sprinkle light Kiswahili/Sheng for authenticity but keep it optional.

## Frontmatter (YAML)

```yaml
---
title: "Course Title"
tier: 1            # 1 | 2 | 3 | 4
price: "KES 500"
duration: "Under 2 hours"     # adjust per course
format: "PDF workbook"
tools: ["ChatGPT", "Canva"]   # key tools taught
category: "Business"          # Business | Content | Career | Student | Freelancing | Lifestyle
upsell_from: null             # Tier 2 only: title of matching Tier 1 course
---
```

## Body structure (all tiers follow this skeleton)

1. `# Title`
2. **Overview** — 2–3 sentences: what the course delivers, who it's for, the one clear win.
3. **Who this is for** — bullet list of 3–5 learner profiles.
4. **What you'll be able to do** — bullet list of 4–6 measurable outcomes (mirror the catalog takeaways).
5. **Lessons / Modules** — the meat. Expand every catalog bullet point into a short section with `##` headings. Include realistic Kenya examples, do-this/not-this tips, and mini how-tos.
6. **Prompt Library** — the value-add. 8–25 copy-paste prompts (count depends on tier) in fenced code blocks, each with a bold use-case label above it and a one-line "how to use it" note. Prompts must be concrete, fill-in-the-blank, Kenya-aware.
7. **Action plan** — a numbered 5–7 step plan the learner does this week.
8. **Quick wins checklist** — checkbox list of 5–8 "you did it" items.
9. **Common mistakes to avoid** — 4–6 bullets.
10. **Tools & resources** — table or bullets: free-first tools, Kenya-specific platforms, what to upgrade to later.
11. **Next step / upsell hint** — 1–2 sentences pointing to the matching Tier 2 course (Tier 1 files) or "What's next" for higher tiers.

## Depth by tier

| Tier | Lessons | Prompts | Length | Tone |
|------|---------|---------|--------|------|
| 1 (KES 500) | 4–6 short lessons | 8–10 | ~1,200–1,800 words | Fast, practical, one win under 2 hours |
| 2 (KES 2,500) | 6–8 lessons forming a repeatable system | 12–15 | ~2,000–2,800 words | Systems + process, sellable service angle |
| 3 (KES 5,000+) | 6–8 modules with templates + an assignment | 15–20 | ~3,000–4,000 words | In-depth, professional, industry-specific |
| 4 (KES 10,000+) | Full program: modules, worksheets, case studies, 90-day roadmap | 20–25 | ~4,500–6,000 words | Comprehensive flagship; cohort/community tone |

## Writing rules

- Write for a phone screen: short paragraphs, headers, bullets, tables.
- Money in KES; reference M-Pesa (till, paybill, STK push), Lipa Na M-Pesa, WhatsApp Business, SACCOs, chamas.
- Real 2026 tool landscape: ChatGPT/Claude/Gemini free tiers, Canva Magic Studio, CapCut, NotebookLM, Perplexity, ElevenLabs, Otter, Whisper, Jumia/Kilimall, BrighterMonday/Fuzu/LinkedIn, Upwork/Fiverr, Payoneer/Wise, Shopify/Pesapal/IntaSend/Flutterwave, Daraja API, DistroKid/Boomplay/Audiomack/Mdundo, DigiFarm/iProcure.
- Never invent exact current prices that could mislead — use "from ~KES X" or ranges where research supports them, otherwise describe cost tiers in words (e.g. "free tier covers X; paid unlocks Y").
- Prompts must be enclosed in fenced code blocks and be genuinely useful, not filler.
- No emojis. No comments in code. Markdown only.