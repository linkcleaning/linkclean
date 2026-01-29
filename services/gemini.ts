import { GoogleGenerativeAI } from "@google/generative-ai";

// API 키가 없다면 일단 빈 값을 넣으세요. 나중에 키를 넣으면 작동합니다.
const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE");
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 시각화 AI가 찾는 'generateCleanImage'를 정의합니다.
export const generateCleanImage = async (prompt: string) => {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error(error);
    return null;
  }
};
