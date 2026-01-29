import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAI0BPPwdvDuyXmyTqDpqNE3qp6bEcp2tM"; 
const genAI = new GoogleGenerativeAI(API_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 시각화 AI용 함수
export const generateCleanImage = async (prompt: string, aspectRatio?: string) => {
  try {
    const result = await model.generateContent(`${prompt} (가로세로비: ${aspectRatio || '1:1'})`);
    return result.response.text();
  } catch (error) {
    return null;
  }
};

// 시네마틱 AI용 함수 (VideoVisualizer에서 찾던 함수입니다)
export const generateCleaningVideo = async (prompt: string) => {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    return null;
  }
};
