import OpenAI from "openai";

// Default model can be overridden via environment variable
const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

/**
 * Generate a completion using the OpenAI provider.
 * The OpenAI client is instantiated inside the function so that the
 * environment variables (loaded via dotenv) are available at runtime.
 */
export async function generateWithOpenAI(prompt: string): Promise<string> {
  // Ensure the API key is present; this mirrors the check in AutoData.ts
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY not found");
  }

  const client = new OpenAI({ apiKey });

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
