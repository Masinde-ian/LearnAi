---
title: "AI for Developers: Build & Sell AI-Powered Apps and Tools"
tier: 4
price: "KES 10,000"
duration: "Full program (90-day cohort)"
format: "Modules, worksheets, architecture blueprints, code patterns + prompt library"
tools: ["OpenAI API", "Anthropic API", "Google AI", "M-Pesa Daraja", "n8n"]
category: "Tech/Development"
upsell_from: null
---

# AI for Developers: Build & Sell AI-Powered Apps and Tools

## Overview

This program takes you from "I can call an API" to "I ship a paid product." You will learn the 2026 AI API landscape and pricing, design a product around a specific Kenyan problem people will pay for, build with a clean architecture (prompts, data handling, cost management), and charge real money through M-Pesa with the Daraja API (STK push). You will launch, get your first paying users, and iterate. You join a WhatsApp cohort with weekly office hours and a 90-day build-and-launch roadmap.

## Who this is for

- A developer or CS student who has built with APIs but never shipped a paid product.
- A no-code builder ready to move into real code with AI APIs.
- A freelancer who wants to build products instead of selling hours.
- A tech-savvy business person with some coding basics who wants an AI product.
- Anyone who has seen AI hype and wants the practical engineering and business path.

## What you'll be able to do

- Use OpenAI, Anthropic, and Google AI APIs to build real applications and control token costs.
- Design a product around a specific local problem worth paying for, validated before you build.
- Structure your app: prompts, data handling, and a cost management strategy.
- Integrate M-Pesa payments (STK push, C2B, B2C) with the Daraja API, including production requirements.
- Launch, price, and get your first paying users.
- Maintain and iterate the product post-launch with monitoring and feedback loops.

---

## Module 0: How This Program Works

Products are built in public and improved with feedback. This cohort is your launch team.

- **One module per week.** Each ends with a worksheet and a working artefact (a validated idea, an API key test, a payment stub, a launch).
- **Cohort WhatsApp group.** Share builds, bugs, pricing experiments, and first-user stories.
- **Weekly office hours.** One live call per week for code questions, architecture feedback, and launch problems.
- **Sunday check-ins.** Post your week: progress, blockers, users, revenue.
- **The 90-day plan.** Modules 1 to 8 map to Weeks 1 to 12.

The mindset: an AI product is not "an app that calls an API." It is a tool that does a specific job so well a specific user pays for it monthly. Start with the problem, not the model. In 2026 the models are cheap and abundant; the scarce resource is finding a real problem and shipping.

---

## Module 1: The 2026 AI API Landscape

You do not need to be an ML engineer to build with AI. You need to know which API to use, what it costs, and how to keep costs low. Here is the 2026 picture.

### The main providers

- **OpenAI.** Strong general model family, simple API, huge ecosystem. For most small products this is the fastest place to start.
- **Anthropic (Claude).** Strong on careful, long-form reasoning and writing. Often the best choice for analysis, reports, and drafting-heavy products.
- **Google (Gemini).** Tight integration with Google tools, good multimodal (text, image, audio) support.

All three have free tiers for experimentation and sandbox environments, so you can build and test without spending.

### Understanding the pricing model (2026)

API pricing is per 1M tokens. Tokens are roughly pieces of words: about 750 words per 1,000 tokens. You pay twice: for what you send in (input) and what the model returns (output). The 2026 ranges:

- **OpenAI GPT-5.6 family:** flagship Sol around USD 5/30 per 1M tokens (input/output); the workhorse Terra around USD 2/12; the cheap Luna around USD 0.20/1.20 for high-volume simple tasks.
- **OpenAI GPT-4.1 nano:** around USD 0.10/0.40 per 1M tokens. Ideal for very simple, high-volume tasks like classification, extraction, and tagging.
- **Anthropic Claude:** Sonnet 5 around USD 2/10; Haiku 4.5 around USD 1/5; the strongest Opus 5 around USD 5/25 per 1M tokens.
- **Cached input:** reusing the same context (e.g., a system prompt) is charged at roughly 10% of the standard input price. Huge saving for repetitive apps.
- **Batch API:** non-urgent jobs run in a batch cost roughly 50% less. Perfect for daily reports and scheduled work.

Prices have fallen about 80% since 2025. This matters: a product that was too expensive to run a year ago is now profitable. Cheap inference is the business opportunity of 2026.

### How to choose a model

- **Simple, high-volume task (classify, extract, summarise short text):** the cheapest model. Cost matters more than intelligence.
- **Long reports, analysis, drafting:** a mid model (Terra or Sonnet class).
- **Complex reasoning, long documents, sensitive output:** the flagship, but only where needed.
- **Never default to the most expensive model.** Start with the cheapest that does the job, and upgrade only where users notice.

### Worksheet 1: model selection

1. Write the 3 tasks your product idea performs.
2. For each, choose a model tier (cheap / mid / flagship) and explain why.
3. Estimate tokens per request (a short task ~500 tokens in, ~300 out; a long report ~4,000 in, ~2,000 out).
4. Convert that into a rough cost per request using the pricing ranges above.
5. Compute a monthly cost ceiling: assume your expected daily users times the per-request cost. Is it affordable? If not, change the model or the feature.

---

## Module 2: Design a Product Around a Local Problem

Start with the problem, not the model. A product that solves a specific painful problem will get users; a demo of "AI" will not.

### Finding the problem

Ask around your own world: businesses, schools, churches, clinics, SACCOs, shops. The best problems have three signs:

1. **Frequent.** Happens daily or weekly, not once a year.
2. **Painful.** Costs time, money, or customers when ignored.
3. **Measurable.** You can prove the fix ("saves 5 hours a week" or "recovers 10 lost leads a week").

### Candidate product shapes that work in Kenya

- **A WhatsApp-facing assistant.** Businesses already live on WhatsApp. A bot that takes orders, answers FAQs, or books appointments solves a real daily problem.
- **A report generator.** SACCOs, churches, and small businesses drown in manual reporting. A tool that turns raw data into a clean report saves hours.
- **A document processor.** CV screening, invoice extraction, application parsing, or exam-marking tools for schools.
- **A content pipeline.** Product descriptions, social media packs, and local-language translation for sellers.
- **A data assistant.** Turn messy spreadsheets into clean, analysed data with natural-language questions.

### Validate before you build

Talk to 10 potential users before writing code. Ask:

- "How do you do this task today?"
- "What does it cost you (time or money) each week?"
- "If I built a tool that did it for KES X/month, would you pay?"

If fewer than 3 of 10 say yes, change the problem. Validation is free; building the wrong thing is expensive.

### The one-line product spec

Write your product as one line: "For [user], who has [problem], my product does [job], so they get [result]."

### Worksheet 2: problem and validation

1. Write 3 problem candidates from your own community.
2. Score each on frequent / painful / measurable (1-5 each).
3. Pick the best and write your one-line product spec.
4. List 10 people to interview.
5. Write your 4 interview questions and interview 5 people this week.

---

## Module 3: Basic Architecture

Keep the architecture boring and reliable. You are not building a research project; you are shipping a tool.

### The core flow

1. **User input** comes in (WhatsApp message, web form, uploaded file, API call).
2. **Pre-processing.** Clean and validate the input. Never send raw junk to the model.
3. **The prompt.** A well-designed system prompt (the instructions) plus the user input.
4. **The model call.** The right model for the job (Module 1).
5. **Post-processing.** Validate the output. Check it is well-formed. Add any rules (format, length, tone).
6. **Delivery.** Show the user the result, and save what you need to save.

### Prompt engineering as architecture

- **System prompt:** the fixed instructions (who the model is, rules, output format). This is your product's behaviour, so version it like code.
- **User prompt:** the specific task and input.
- **Few-shot examples:** give 2-3 examples of ideal input-output pairs. This improves quality more than longer instructions.
- **Output format:** ask for structured output (JSON) where the rest of your app needs it, and validate it.

### Data handling rules

- **Minimise.** Send only what the task needs. Sending less data is cheaper and safer.
- **Never send secrets.** No passwords, tokens, or M-Pesa credentials in prompts.
- **Anonymise.** Strip personal data (names, phones, ID numbers) before sending to the model where possible.
- **Cache and store.** Save repeated context (system prompts, reference documents) with cached input, and store results you can reuse instead of re-calling the API.
- **Log for debugging.** Keep a log of requests, costs, and failures. You cannot fix what you cannot see.
- **Compliance.** Kenyan data protection rules apply. Have a simple privacy note, and never train models on customer data without consent.

### Cost management playbook

- Use the cheapest model that works.
- Cache your system prompts and reference data (10% input cost).
- Use the batch API for scheduled jobs like daily reports (50% off).
- Cap request lengths. Truncate inputs that exceed your real need.
- Set a budget alert and a per-user daily limit.
- Review your logs weekly: which features cost the most, and do they earn the most?

### Worksheet 3: architecture plan

1. Draw your core flow on paper: input, pre-processing, prompt, model, post-processing, delivery.
2. Write your first system prompt as a versioned file.
3. Write your data minimisation rule for your product.
4. Write your cost ceiling per feature.
5. Write your privacy note in plain English.

---

## Module 4: Payments with M-Pesa (Daraja API)

In Kenya, a product that cannot take M-Pesa is not a product. The Daraja API from Safaricom is the standard integration. Here is what you need to know.

### The Daraja basics

- **Sandbox:** free to register and test with test credentials. Build and test your integration before going live.
- **OAuth token:** you authenticate with a token that expires in about 1 hour. Fetch and cache it, don't call for a new one every request.
- **STK push:** you push a payment request to a customer's phone; they approve it; money lands in your M-Pesa account instantly. This is the foundation of most paid products.
- **C2B (customer to business):** for paybill/till payments initiated by the customer (e.g., USSD or till number flows).
- **B2C (business to customer):** for payouts, e.g., withdrawals or refunds to users.
- **Callbacks:** Safaricom notifies your server of payment status. **Callbacks must be on HTTPS.** This is a common blocker for beginners.
- **Go-live:** production access requires Safaricom approval (the "go-live" process). Apply early; it takes time.
- **Fees:** expect roughly 0.5-1% merchant fees on transactions, plus the normal customer M-Pesa charges. Factor this into your pricing.

### The payment flow for a paid product

1. User requests something paid (a report, access, a credit pack).
2. Your server calls STK push with the amount and the user's phone number.
3. The user's phone shows the M-Pesa request; they enter their PIN.
4. Safaricom calls your HTTPS endpoint with the result.
5. You verify the result server-side, then deliver the product.
6. You log the transaction and the cost of serving it.

### Security rules

- Store your consumer key/secret and certificate securely (environment variables, never in code).
- Validate callbacks (check the payment status and amount on the server, never trust the client).
- Record every transaction with an ID you can reconcile.
- Never log customer M-Pesa PINs or passwords. You never handle the PIN; M-Pesa does.

### Worksheet 4: payment plan

1. Register for the Daraja sandbox and fetch your first test credentials.
2. Build a hello-world STK push in the sandbox (even a script that pushes KES 1 to a test number).
3. Set up an HTTPS endpoint for callbacks (a free tunnel like ngrok for testing).
4. Write your transaction log fields (id, phone, amount, status, timestamp, product delivered).
5. Calculate your M-Pesa cost as a percentage of your planned price.

---

## Module 5: Launch, Price, and Get First Users

You ship when it works for one real user, not when it is perfect. Perfection is the enemy of the first sale.

### The minimum launchable product

For your first version, cut everything except the one core job. If the core job works for one user and they pay, you have a product. Everything else is iteration.

### Pricing your AI product

Your price must cover: API costs, M-Pesa fees, hosting, and your time, plus profit. Three realistic models for Kenya:

- **One-time fee.** Good for one-off tools (a document generator, a one-time report). KES 500-5,000.
- **Monthly subscription.** Good for ongoing value (a WhatsApp assistant, a reporting tool). KES 1,000-10,000/month.
- **Credit packs / usage packs.** Buy 100 credits, use them as needed. Good for pay-as-you-go tools (reports, analyses). KES 500-5,000 per pack.

### A simple pricing formula

- Compute your cost per request (Module 1).
- Set your price per request at 5-10x your cost (covers M-Pesa, hosting, and profit).
- For subscriptions, set the monthly price so the average heavy user costs you less than 20-30% of the fee.
- Never price below cost on a bet that volume will fix it. Volume multiplies your losses.

### Getting your first users

- **Personal outreach first.** Your 10 validation interviewees are your first 10 prospects. Offer them a discounted launch price.
- **WhatsApp and status.** Kenyan users live on WhatsApp. Show the tool working, not the tech.
- **A one-page landing page.** The problem, the result, the price, a pay button (STK push), and a WhatsApp contact.
- **Referral bonus.** Give existing users free credits for successful referrals.
- **Collect payment frictionlessly.** A user who has to "request an invoice and be contacted" is a user you lost.

### Worksheet 5: launch plan

1. Define your minimum launchable product (one core job).
2. Set your price using the formula above.
3. Write your one-page landing page copy.
4. Write your launch outreach message to your 10 validation contacts.
5. Set a launch date within the next 14 days.

---

## Module 6: Maintain and Iterate

Your product does not end at launch. It ends when users stop needing it. Maintenance and iteration keep it alive and growing.

### Monitoring what matters

- **Cost per user per week.** Is your margin holding?
- **Success rate.** How many payment callbacks succeed? How many model calls fail?
- **Usage patterns.** Which features get used, which are dead weight?
- **User complaints.** Every complaint is a feature backlog entry.

### The iteration loop

1. Collect feedback (in-app, WhatsApp, exit questions).
2. Prioritise: fixes to the core job first, then small improvements, then new features.
3. Ship small, ship often. Weekly is better than quarterly.
4. Measure after every change: did cost drop, did usage rise, did complaints fall?
5. Kill what does not work. A feature nobody uses costs you API money and attention.

### Scaling considerations

- Move high-volume simple work to the cheapest model or batch API.
- Cache aggressively as usage grows.
- Revisit your price once you have proof: raise for new users, grandfather existing ones.
- Watch M-Pesa fee structure as volume grows; renegotiate or move to a cheaper flow if needed.
- Plan for growth: a simple queue for background jobs, proper logging, and a monitoring dashboard.

### Worksheet 6: iteration plan

1. Write your 3 core metrics (cost, success, usage).
2. Build your feedback channel (one simple form or WhatsApp line).
3. Write your prioritisation rule (what ships first, what gets killed).
4. Schedule your weekly review slot.
5. Set your next milestone: one improvement to launch in the next 14 days.

---

## Module 7: Case Studies

Real shapes, names changed.

### Case study 1: A report generator for a SACCO

A developer built a tool where a SACCO manager pastes raw member contributions and gets a clean weekly report with names, totals, and anomalies. Built with a mid model, cached system prompt, and batch API for the scheduled runs, the cost per report was under KES 10. Priced at KES 1,500/month, one SACCO signed at launch. Two more signed from the manager's referral within 60 days. The developer's key win: he interviewed 3 SACCOs first, so the report format matched exactly what they needed.

The lesson: validation made the build obvious. The first users came from the interview list.

### Case study 2: A WhatsApp order assistant for a restaurant

A developer built a WhatsApp assistant that took orders, confirmed them, and forwarded them to the kitchen, with STK push payment for the deposit. Setup: a BSP for WhatsApp plus the Daraja API. First restaurant paid a KES 15,000 setup and KES 5,000/month. The developer found the restaurant by walking in, not by advertising. The restaurant's owner referred two others.

The lesson: for WhatsApp products, the distribution channel is WhatsApp itself, and one happy business sells the next.

### Case study 3: A CV scorer for recruiters

A freelancer built a small tool that scores CVs against a job description using the cheap model (nano-class) for classification, costing under KES 1 per CV. Priced at KES 2,000 per 100 CVs. Three recruiting firms signed. The developer kept the tool simple, let users upload a CSV, and returned a ranked list. When one firm asked for a longer feature, he said no and stayed focused on the core job.

The lesson: the cheap model kept margins healthy, and saying no to scope creep kept the product simple and reliable.

### What all three share

- They found a specific, measurable problem before writing code.
- They chose the cheapest model that did the job.
- They priced at 5-10x cost, including M-Pesa fees.
- They got first users from the people they validated with.
- They shipped small and iterated based on real usage.

---

## Module 8: The 90-Day Roadmap

Follow this. Post your progress in the cohort group every Sunday.

### Days 1-14 (Foundation)

- Complete Worksheet 1: understand API pricing and pick your models.
- Complete Worksheet 2: validate your problem with 5-10 people.
- Complete Worksheet 3: draw your architecture and write your system prompt.
- Get your API keys and run a hello-world call on a real task.
- Register for the Daraja sandbox.

### Days 15-30 (Build)

- Build your minimum launchable product's core job.
- Complete Worksheet 4: build the STK push flow in the sandbox and test a payment end to end.
- Set up your HTTPS callback endpoint.
- Test the full flow: user input, model call, payment, delivery, log.
- Get one friend to test the whole thing with a real (tiny) payment.

### Days 31-60 (Launch)

- Complete Worksheet 5: price it, build your landing page, write your launch message.
- Offer your validation contacts a discounted launch price.
- Launch to your first real users.
- Complete Worksheet 6: set up monitoring and a feedback channel.
- Fix the launch issues that hurt the core job first.

### Days 61-90 (Grow and iterate)

- Get 10+ paying users or paying businesses.
- Run your weekly review: cost, success rate, usage, feedback.
- Ship one meaningful improvement.
- Apply for M-Pesa go-live if you are still in the sandbox.
- Raise prices for new users once you have proof and testimonials.
- Set your month 4 target: more users, higher prices, or a second product.

### Weekly rhythm

- Monday: review last week's numbers (cost, users, revenue).
- Daily: 1-2 focused hours of build, fixes, or outreach.
- Friday: test the whole flow yourself once.
- Sunday: post numbers to the cohort group.

---

## Prompt Library

Use these with your AI assistant or directly in your code. Edit and adapt every one.

**Problem discovery interview**

Use to prepare for your validation interviews.

```
Act as my product coach. I am building an AI product for {user group, e.g., SACCO managers}. Write 8 interview questions that reveal: how they do the task today, how often, what it costs in time and money, what they already tried, and whether they would pay {price} KES/month. Then write the exact follow-up question to ask when they say "I might just use Excel" or "I will think about it."
```

**One-line product spec**

Use to pressure-test your idea.

```
Here is my idea: {describe}. Help me write a one-line product spec: "For [user], who has [problem], my product does [job], so they get [result]." Test it for vagueness: rewrite it until the user, problem, job, and result are all specific. Then list the 3 things I should cut from my first version to keep it minimal.
```

**System prompt design**

Use to write the behaviour instructions for your product.

```
Design a system prompt for an AI product that does {job} for {user}. The system prompt must define: the product's role, the exact output format, 3 quality rules (e.g., no invented numbers, plain English, structure), and what to do when the input is unclear. Give me the final system prompt as a code block I can store in my app, plus a short version for a cheap model.
```

**Few-shot examples**

Use to improve output quality with examples.

```
For an AI product that does {job}, create 3 few-shot examples showing ideal input-output pairs. Each example must match my real use case: {paste a real input and the ideal output}. Show the exact JSON or format the model should return. Keep examples short so I can fit them in the prompt without blowing up my token cost.
```

**Output validation rules**

Use to write post-processing checks.

```
My AI product returns {format, e.g., JSON with a summary and 3 actions}. Write a validation checklist to run on the model output: required fields, type checks, length limits, banned content (e.g., invented numbers), and fallback behaviour if validation fails. Give me the rules in plain English, then as a short code snippet pseudocode.
```

**Cost estimator**

Use to price a request before you build it.

```
Help me estimate API cost for my feature. Task: {task}. Assume average input of {X} tokens and output of {Y} tokens. Using 2026 pricing — cheap model ~USD 0.20-1.20 per 1M tokens, mid model ~USD 2-12, flagship ~USD 5-30, cached input ~10% of input price, batch ~50% off — give me a cost per request in USD and KES (1 USD = ~KES 130) for three model tiers. Then tell me a minimum price per request at 5-10x cost.
```

**Budget alert config**

Use to protect your spending.

```
I am about to launch an AI product with a monthly API budget of {amount} KES. Write a simple plan: what to log on every request (model, tokens, cost), a daily cost cap formula, a per-user daily limit, and the 3 signals that should trigger a model downgrade or a price review.
```

**Data minimisation check**

Use to trim what you send to the model.

```
Here is the user input my product collects: {describe fields}. List which fields are actually needed for the task {task}, which can be anonymised or dropped, and which are sensitive (names, phones, ID numbers) and must be handled carefully. Give me a trimmed version of the payload my app should send to the model.
```

**Privacy note**

Use to write a simple, honest privacy statement.

```
Write a plain-English privacy note for my AI product {product name}. It must cover: what data I collect, how it is used (including that I may send text to an AI API), that data is minimised and not used to train models without consent, storage and security, and how a user can ask me to delete their data. Under 200 words, no legal jargon.
```

**STK push flow plan**

Use to plan your M-Pesa integration before coding.

```
Explain step by step how to implement M-Pesa STK push with the Daraja API for a product that charges users. Cover: getting OAuth credentials, fetching and caching the token (1-hour expiry), building the STK push request (amount, phone, account reference), handling the HTTPS callback, verifying the transaction server-side, and logging it. Note the go-live approval requirement and typical 0.5-1% merchant fees. Plain English, practical order.
```

**Callback security checklist**

Use to secure your payment callback.

```
My M-Pesa STK push callback receives payment notifications. Write a security checklist: validate the callback comes from Safaricom, check the status field, match the amount and account reference against my order, avoid trusting client-side data, log every callback, and handle duplicates. Then write pseudocode for the happy path and the failure path.
```

**Debugging an STK push failure**

Use when payments fail and you are stuck.

```
My M-Pesa STK push is failing. Here is what I see: {paste error or symptom}. Walk me through the debugging order: check OAuth token, check sandbox vs production credentials, check amount and phone format, check callback HTTPS, check my log entries, and what to test next. Give me 3 questions to ask myself that usually reveal the bug.
```

**Landing page for a dev product**

Use to write your launch page.

```
Write landing page copy for my AI product: {product name}, which does {job} for {user}. Sections: headline with the result, the problem in one paragraph, 3 features as bullets, price in KES (with M-Pesa payment via STK push), one testimonial placeholder, and a clear call to action. Developer-friendly but plain English. Under 300 words.
```

**Launch outreach**

Use to contact your validation list.

```
Write a short WhatsApp launch message to {name}, who I interviewed about {problem}. My product {product name} now does {job} and I am offering early users a discounted price of {price} KES/month (normal {normal price}). Ask if they want to try it this week with a 7-day guarantee. Under 90 words, personal, referencing their specific problem.
```

**Pricing scenarios**

Use to test your pricing before you commit.

```
My product costs me about {X} KES per heavy user per month in API and M-Pesa fees. Propose 3 pricing options: a flat monthly subscription, a per-request credit pack, and a hybrid. For each: the price in KES, the margin at light and heavy usage, and the behavioural incentive it creates for users. Recommend one for a Kenyan consumer/SME market where users fear hidden costs.
```

**Feature prioritisation**

Use to decide what to build next.

```
Here is my product's feedback and metrics: {paste}. Rank these possible next moves by impact on retention and cost: {list options}. Recommend exactly one to ship in the next 14 days, one to defer, and one to kill. Explain each in two sentences. Bias toward the cheapest change that most improves the core job.
```

**Weekly product review**

Use in your Sunday review.

```
Here is my week's data: {paste users, revenue, API costs, failures, feedback}. Act as my product coach. Give me: the 2 things working, the 1 thing losing money, and 3 specific actions for next week (one to improve the core job, one to cut cost, one to get more users). Short and direct.
```

**Model downgrade test**

Use to see if a cheaper model is good enough.

```
I want to move feature {feature} from a mid model to a cheap model to cut costs. Write a test plan: 5 test inputs covering normal, edge, and failure cases, what output quality to check, and the pass/fail criteria. If the cheap model passes all 5, the move is safe. Keep the test reproducible so I can rerun it monthly.
```

**Abandoned checkout recovery**

Use to bring back users who started paying but did not finish.

```
Write the flow for recovering users who started the M-Pesa payment but did not complete it. Include: how to detect it from my logs, a WhatsApp reminder message (under 60 words), a follow-up after 24 hours, and when to stop. Assume no sensitive payment data is stored, only the order intent.
```

**Churn investigation**

Use to understand why users leave.

```
I lost {number} users this month from {product}. Write a short interview script to learn why. Ask about: the core job's reliability, cost, whether they use an alternative, and one question that surfaces the real reason (the "what would make you come back" question). Then draft a win-back message for lapsed users offering a small credit or a 1-month price hold.
```

**Second product brainstorm**

Use once product one is stable.

```
My product {product name} has {number} paying users and this revenue: {paste}. Based on who pays and what they ask about, suggest 3 candidate second products or features that serve the same users with minimal new building. For each: the user, the problem, the likely price in KES, and why it reuses what I already built.
```

---

## Action Plan (This Week)

1. Complete Worksheet 1 and run a hello-world call on your API of choice.
2. Complete Worksheet 2 and interview 5 people about your problem.
3. Complete Worksheet 3 and write your first system prompt.
4. Register for the Daraja sandbox.
5. Complete Worksheet 4 and push a test STK payment in the sandbox.
6. Draw your full flow on paper and post it in the cohort group.

## Quick Wins Checklist

- I understand API pricing and can estimate a request's cost.
- I have a validated problem and a one-line product spec.
- I have run a real API call on a real task.
- My system prompt is versioned like code.
- My data minimisation and privacy rules are written.
- I have pushed a test STK push in the sandbox.
- My callback endpoint is HTTPS and logging correctly.
- I have a pricing formula that covers API, M-Pesa, and profit.
- I have talked to 5 potential users.
- I have a launch date and a launch message ready.

## Common Mistakes to Avoid

- Building before validating. Ten interviews cost less than a month of wrong code.
- Defaulting to the most expensive model. Start cheap, upgrade where users notice.
- Ignoring token costs. Unmonitored API spend is how a "profitable" product quietly loses money.
- Sending sensitive data to the model. Minimise, anonymise, and be honest in your privacy note.
- Trusting the client instead of the callback. Verify payments server-side.
- Shipping a demo instead of a product. One working core job beats five half-features.
- Pricing below cost. Volume multiplies losses.
- Forgetting maintenance. Your product lives or dies on weekly attention and iteration.

## Tools & Resources

| Purpose | Free/first tool | Upgrade later |
|---|---|---|
| AI APIs | OpenAI/Anthropic/Google free tiers | Paid API with budget alerts |
| Local testing | Local API playgrounds, VS Code | CI for production |
| Payment integration | Daraja sandbox (free) | Production go-live approval |
| Callback testing | ngrok (HTTPS tunnel) | Deployed server, proper domain |
| Hosting | Vercel, Render, Railway free tiers | Paid plans, cloud scaling |
| Automation glue | n8n, Zapier | Custom services |
| Monitoring | Simple logs, spreadsheet | Paid observability tools |
| Distribution | WhatsApp, landing page, LinkedIn | Paid ads, app stores |

## What's Next

You now have the full product path: problem, build, payment, launch, iterate. To take the same API and payment skills into selling automations and chatbots to local businesses on retainers, the AI Automation Agency Masterclass is your next move. If you prefer advising companies and selling workshops, the Become an AI Consultant course pairs well with your technical depth.