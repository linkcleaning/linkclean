import { GoogleGenerativeAI } from "@google/generative-ai";

// 구글 AI 스튜디오에서 받은 키를 여기에 넣어야 AI가 작동합니다.
const API_KEY = "YOUR_API_KEY_HERE"; 
const genAI = new GoogleGenerativeAI(API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 이 함수가 없으면 화면이 깨지거나 하얗게 보일 수 있습니다.
export const generateCleanImage = async (prompt: string) => {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("AI 에러:", error);
    return null;
  }
};
