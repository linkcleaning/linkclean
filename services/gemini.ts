import { GoogleGenerativeAI } from "@google/generative-ai";

// 보내주신 API 키를 적용했습니다.
const API_KEY = "AIzaSyAI0BPPwdvDuyXmyTqDpqNE3qp6bEcp2tM"; 
const genAI = new GoogleGenerativeAI(API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 1. 시각화 AI (SpaceVisualizer.tsx에서 사용)
export const generateCleanImage = async (prompt: string) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("시각화 AI 에러:", error);
    return null;
  }
};

// 2. 시네마 AI (VideoVisualizer.tsx에서 사용)
export const generateCleaningVideo = async (prompt: string) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("시네마 AI 에러:", error);
    return null;
  }
};
