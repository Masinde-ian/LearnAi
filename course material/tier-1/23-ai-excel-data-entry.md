---
title: "AI for Quick Excel & Data Entry Skills"
tier: 1
price: "KES 500"
duration: "Under 2 hours"
format: "PDF workbook"
tools: ["Excel", "Google Sheets", "ChatGPT"]
category: "Career"
upsell_from: null
---

# AI for Quick Excel & Data Entry Skills

**Overview**

You do not need to memorise Excel formulas to be good with data. This course shows you how to ask AI to write any formula for you, clean up messy data in minutes, build simple dashboards for small business owners, and find data entry jobs — local and remote — that pay through M-Pesa or Payoneer. Your win: usable data skills in under two hours.

**Who this is for**

- Small business owners drowning in receipts and sales notes
- Anyone wanting an entry into online work and data entry gigs
- Students and job seekers adding a practical skill to a CV
- SACCO and chama record keepers who want to level up from notebooks
- Freelancers who want to offer "data cleaning and reports" as a service

**What you'll be able to do**

- Get AI to write Excel and Google Sheets formulas for any task
- Clean messy or duplicate data quickly with AI's help
- Build a simple sales or income summary a business owner can understand
- Identify data entry roles on Upwork, Remotasks, CloudFactory and similar
- Understand how you get paid (M-Pesa, Payoneer) and set up for it

## Lesson 1: Let AI write your formulas

Forget memorising functions. Describe what you want in plain language and let AI produce the formula. Examples:

- "Add up column B from row 2 to row 50" → `=SUM(B2:B50)`
- "Count how many times 'Kikuyu' appears in column A" → `=COUNTIF(A:A,"Kikuyu")`
- "Find the price of a product in another sheet" → a VLOOKUP or XLOOKUP

Copy the formula AI gives you, paste it into the cell, and test it on a small example first. If it errors, paste the error message back into ChatGPT and ask it to fix it. This is the fastest way to learn.

## Lesson 2: Cleaning messy data fast

Real data is never tidy: names misspelled, phone numbers in different formats, duplicate entries, empty cells. Cleaning it manually takes hours. AI can:

- Remove or flag duplicates
- Standardise phone numbers to 07XX format
- Split full names into first and last name
- Turn a messy list into a neat table

Tip: for bigger cleaning jobs, Google Sheets has a built-in "Remove duplicates" menu, and AI can write you a script. For small lists, just give AI the mess and ask for a clean version.

## Lesson 3: Simple dashboards and summaries

A business owner does not want a spreadsheet; they want an answer: "How much did we sell this week?" Build a one-page summary: total sales, top products, busy days, and money received per payment method (cash vs M-Pesa).

Ask AI to build the summary structure and formulas, then paste your data in. A clean summary you produce for one shop is also your portfolio piece to get the next client.

## Lesson 4: Data entry jobs — local and remote

Data entry is a real entry point into online work. Common options in 2026:

- Upwork and Fiverr: data entry, data cleaning, spreadsheet gigs
- Remotasks, CloudFactory and similar: structured data tasks (annotation, labeling)
- Data annotation: labelling images, audio, and text used to train AI
- Local: shops and SMEs who need receipts, stock, or client lists digitised

Start with small, honest profiles and do a few jobs well. Reviews matter more than speed. Never pay to "apply" for a job — legitimate platforms do not charge you to start.

## Lesson 5: Getting paid via M-Pesa and Payoneer

Local clients pay via M-Pesa — give them a till or paybill number. International platforms pay via Payoneer (or directly to a bank); Payoneer can then move money to your M-Pesa or bank. Set up a Payoneer account early, even before you land a client, and keep records of every payment.

Note: verify how a platform actually pays before investing hours in it. Some pay per task, others per hour, and rates vary widely. A KES 100 per hour gig and a KES 500 per hour gig are very different realities.

## Prompt Library

**Formula for totals and averages**

Use when you need a sum, average, or count without knowing the syntax.

```
I am using [Google Sheets/Excel]. My data is in column B, rows 2 to 50. Write the
formulas for: total, average, and count of numbers. Also give me the formula to
show the highest and lowest value. Add a one-line note on what each formula does
so I can learn as I use them.
```

**Clean up a messy list**

Use when names, phones, or items are inconsistent.

```
Clean this list for me: [PASTE MESSY LIST]. Standardise phone numbers to Kenyan
07XX format, fix common name spelling issues, remove exact duplicates, and show
me the cleaned version in a table. Point out anything you could not fix with
confidence so I can check it manually.
```

**Split names and phone numbers**

Use to separate combined data into neat columns.

```
My data has full names and phone numbers combined in one column, like "John
Kamau 0722123456". Write formulas or instructions to split them into two columns:
full name, phone number. I am using [Google Sheets/Excel]. Give me the formula
for row 2 and explain how to copy it down the column.
```

**VLOOKUP to match customer data**

Use when you need to find matching records across two sheets.

```
I have two sheets: one with customer names and one with payments. Write a VLOOKUP
formula (Google Sheets) that finds each customer's total payment from the payments
sheet and returns it. Explain what each part of the formula means, and what to do
if it returns #N/A.
```

**Categorise sales with IF**

Use to put each sale into a category automatically.

```
Write an IF formula that labels sales in column C as "Small" (under KES 1,000),
"Medium" (KES 1,000-5,000), or "Large" (over KES 5,000). I am using Google
Sheets. Give me the formula for row 2, then a nested version if my categories are
more complex.
```

**Count sales by product**

Use to answer "which product sells most?"

```
Write a COUNTIF formula that counts how many times each product appears in column
A, with the product names listed in a summary area. I am using [Google
Sheets/Excel]. Also give me a COUNTIFS version that counts by product AND by
payment method (cash vs M-Pesa).
```

**One-page sales dashboard**

Use to turn raw sales data into a summary a business owner can read.

```
Build me a one-page sales dashboard structure with these blocks: total sales,
average sale, top 5 products, sales by payment method (cash/M-Pesa), and best
days of the week. For each block, give me the formula to use and the cell layout
to copy into Google Sheets. Keep the language non-technical.
```

**Format M-Pesa statement for analysis**

Use to prepare your statement for summaries.

```
Here is a chunk of my M-Pesa statement: [PASTE]. Format it into a clean table
with columns: date, time, transaction type, phone, amount, and balance. Remove
headers and blank rows, and flag any incomplete rows. Then tell me what columns I
can safely sum.
```

**Build a data entry checklist**

Use to avoid sloppy errors when entering data for a client.

```
Create a data entry quality checklist for someone entering client records into a
spreadsheet: verify names, standardise phone numbers, check for duplicates,
confirm amounts, and re-read one row per column. Keep it to 8 items, written in
simple English, and add a "final review" step before delivery.
```

**Proposal for a data entry gig**

Use to pitch your spreadsheet service to a local business or on Upwork.

```
Write a short proposal offering data entry and spreadsheet cleanup services to a
small business. Mention I can organise their receipts, build sales summaries, and
clean customer lists. Keep it under 150 words, professional, and end with a
question that starts a conversation. Payment via M-Pesa for local clients.
```

## Action plan

1. Open Google Sheets and create a practice sheet with 20 fake sales rows.
2. Ask AI for the SUM and AVERAGE formulas and apply them.
3. Ask AI to clean a real messy list (contacts, receipts) this week.
4. Build the one-page sales dashboard with your own or practice data.
5. Create a free Payoneer account if you plan to work internationally.
6. Set up an Upwork or Fiverr profile, or offer your service to one local shop.
7. Save this Prompt Library as a note on your phone for every new task.

## Quick wins checklist

- [ ] I wrote a SUM and AVERAGE formula using AI, not memory
- [ ] I cleaned a messy list without manual re-typing
- [ ] I built a one-page sales dashboard
- [ ] I understand VLOOKUP well enough to explain it
- [ ] I have a Payoneer account (if going international)
- [ ] I have a data entry checklist for client work

## Common mistakes to avoid

- Copying a formula without testing it on real data
- Cleaning data by hand instead of using AI and built-in tools
- Over-promising "advanced Excel" skills you cannot yet deliver
- Paying to apply for jobs — legitimate platforms do not charge
- Ignoring the payment method until after the work is done
- Deleting the original messy data before the clean version is checked

## Tools & resources

| Tool | What it's for | Cost |
|------|---------------|------|
| Google Sheets | Free spreadsheets that work on phones | Free |
| Excel | Local and client-standard spreadsheets | Free or web versions |
| ChatGPT free tier | Formulas, cleaning, and dashboard help | Free |
| Upwork / Fiverr | Data entry and spreadsheet gigs | Platform fees on earnings |
| Remotasks / CloudFactory | Structured data tasks | Platform-dependent pay |
| Payoneer | Receiving international payments | Free to open |

Upgrade later: a paid ChatGPT tier for longer data tasks, or Google Workspace if you run data work as a business.

## Next step

Data entry is the door. The Tier 2 course "AI Virtual Assistant Skills" takes you from single gigs to a real remote VA role with multiple clients, scheduled inbox management, and steady income via M-Pesa and Payoneer.