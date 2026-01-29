import { GoogleGenerativeAI } from "@google/generative-ai";

// 여기에 발급받은 API 키를 넣으셔야 AI가 실제로 작동합니다.
const API_KEY = "YOUR_API_KEY_HERE"; 
const genAI = new GoogleGenerativeAI(API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// SpaceVisualizer.tsx가 이 함수를 간절히 찾고 있습니다.
export const generateCleanImage = async (prompt: string) => {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("AI 에러:", error);
    return null;
  }
};
