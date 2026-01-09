import dotenv from "dotenv";
import { generateWithOpenAI } from "./clients/openaiClient";
import { generateWithOpenRouter } from "./clients/openrouterClient";
import * as Presets from "./presets";

dotenv.config();

export class AutoData {
  static async getData(prompt: string): Promise<string> {
    if (!prompt || prompt.trim().length === 0) {
      throw new Error("Prompt cannot be empty");
    }

    const provider =
      process.env.AUTODATA_PROVIDER ||
      (process.env.OPENAI_API_KEY ? "openai" : "openrouter");

    if (provider === "openai") {
      if (!process.env.OPENAI_API_KEY) {
        throw new Error("OPENAI_API_KEY not found");
      }
      return generateWithOpenAI(prompt);
    }

    if (provider === "openrouter") {
      if (!process.env.OPENROUTER_API_KEY) {
        throw new Error("OPENROUTER_API_KEY not found");
      }
      return generateWithOpenRouter(prompt);
    }

    throw new Error("Invalid AUTODATA_PROVIDER");
  }

  // Expose presets
  static presets = Presets;
}
