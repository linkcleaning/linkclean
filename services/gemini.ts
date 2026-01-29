import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "YOUR_API_KEY_HERE"; 
const genAI = new GoogleGenerativeAI(API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 이 함수가 있어야 AI 시각화 화면이 뜹니다.
export const generateCleanImage = async (prompt: string) => {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("AI 에러:", error);
    return null;
  }
};
