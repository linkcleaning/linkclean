import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAI0BPPwdvDuyXmyTqDpqNE3qp6bEcp2tM"; 
const genAI = new GoogleGenerativeAI(API_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 시각화 AI용
export const generateCleanImage = async (prompt: string, aspectRatio?: string) => {
  const result = await model.generateContent(`${prompt} (Aspect Ratio: ${aspectRatio || '1:1'})`);
  return result.response.text();
};

// 시네마틱/비디오 AI용
export const generateCleaningVideo = async (prompt: string) => {
  const result = await model.generateContent(prompt);
  return result.response.text();
};
