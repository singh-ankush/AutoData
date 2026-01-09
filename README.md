# AutoData

AI-powered test data generator for automation testing.

AutoData generates realistic test data as **plain strings** using OpenAI or OpenRouter,
designed for Playwright, Cypress, Selenium, Jest, and backend tests.

## Installation

```bash
npm install @<your-github-username>/autodata


> Usage
```js
import { AutoData } from "@<your-github-username>/autodata";

const name = await AutoData.getData(
  "An Indian name with format {Firstname_Lastname}"
);

const email = await AutoData.presets.email();
```
