# AutoData

AI-powered test data generator for automation testing.

AutoData generates realistic test data as **plain strings** using OpenAI or OpenRouter,
designed for Playwright, Cypress, Selenium, Jest, and backend tests.

## Installation

> bash
```
npm install @singh-ankush/autodata
```

> Basic Usage
```js
import { AutoData } from "@singh-ankush/autodata";

async function run() {
  const name = await AutoData.getData(
    "An Indian name with format {Firstname_Lastname}" //default instruction generator
  );

  const email = await AutoData.presets.email(); //preset generators (presets.txt)

  console.log(name);
  console.log(email);
}

run();
```
```
Output:
Rahul_Sharma
```

> Setup
> .env
```
Option A - OpenAI:

OPENAI_API_KEY=sk-****
OPENAI_MODEL=gpt-4o-mini
```
```
Option B - OpenRouter:
AUTODATA_PROVIDER=openrouter
OPENROUTER_API_KEY=or-****
OPENROUTER_MODEL=meta-llama/llama-3.1-8b-instruct
```

> Usage in Playwright
```
test("signup form", async ({ page }) => {
  await page.fill("#name", await AutoData.presets.indianName());
  await page.fill("#email", await AutoData.presets.email());
  await page.fill("#phone", await AutoData.presets.phoneIN());
});
```

⚠️ Common Errors & Fixes
❌ OPENAI_API_KEY not found

✔ Ensure .env exists
✔ Ensure file name is exactly .env
✔ Restart your terminal

❌ Invalid AUTODATA_PROVIDER

✔ Use only:

```
AUTODATA_PROVIDER=openai
```
or

```
AUTODATA_PROVIDER=openrouter
```

❌ Empty or strange output

✔ Check API quota
✔ Check model name
✔ Ensure internet access


🧠 When Should I Use AutoData?
```
Use AutoData when:

Faker data is too basic

You need realistic test inputs

You want readable test code

You need quick, flexible data generation
```

