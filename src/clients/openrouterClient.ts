import OpenAI from "openai";

// Default model can be overridden via environment variable
const model = process.env.OPENROUTER_MODEL || "openrouter/auto";

/**
 * Generate a completion using the OpenRouter provider.
 * The OpenAI client (compatible with OpenRouter) is instantiated lazily
 * after environment variables have been loaded by dotenv.
 */
export async function generateWithOpenRouter(
  prompt: string
): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY not found");
  }

  const client = new OpenAI({
    apiKey,
    baseURL: "https://openrouter.ai/api/v1",
    defaultHeaders: {
      "HTTP-Referer": "https://github.com/singh-ankush/autodata",
      "X-Title": "AutoData",
    },
  });

  const response = await client.chat.completions.create({
    model,
    messages: [
      {
        role: "system",
        content:
          "You generate realistic random test data. Output ONLY a single string. No explanations.",
      },
      { role: "user", content: prompt },
    ],
    temperature: 0.9,
  });

  return response.choices[0].message.content?.trim() ?? "";
}
