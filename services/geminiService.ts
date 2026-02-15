
import { GoogleGenAI, Type } from "@google/genai";
import { MomoRecommendation } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAIPairingRecommendation = async (userMood: string): Promise<MomoRecommendation> => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite-latest",
    contents: `Based on the mood: "${userMood}", recommend a Momo from Momo Fusion (either a spicy Sichuan Ghost Pepper momo or a sweet Belgian Chocolate Cardamom momo). Return a JSON object with name, description, pairing suggestion, and intensity (1-100).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING },
          pairing: { type: Type.STRING },
          intensity: { type: Type.NUMBER },
        },
        required: ["name", "description", "pairing", "intensity"],
      },
    },
  });

  return JSON.parse(response.text || "{}");
};
