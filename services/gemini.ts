import { GoogleGenerativeAI } from "@google/generative-ai";

// API 키가 들어갈 자리입니다. 나중에 키를 받으면 따옴표 안에 넣으세요.
const API_KEY = "YOUR_API_KEY_HERE"; 
const genAI = new GoogleGenerativeAI(API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 시각화 기능을 위한 함수 이름을 다시 정의합니다.
export const generateCleanImage = async (prompt: string) => {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("AI 에러:", error);
    return null;
  }
};
