import { GoogleGenerativeAI } from "@google/generative-ai";

// 사장님의 API 키를 적용했습니다.
const API_KEY = "AIzaSyAI0BPPwdvDuyXmyTqDpqNE3qp6bEcp2tM"; 
const genAI = new GoogleGenerativeAI(API_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 1. 시각화 AI용 함수
export const generateCleanImage = async (prompt: string, aspectRatio?: string) => {
  try {
    const result = await model.generateContent(`${prompt} (가로세로비: ${aspectRatio || '1:1'})`);
    return result.response.text();
  } catch (error) {
    console.error("시각화 에러:", error);
    return null;
  }
};

// 2. 시네마틱/비디오 AI용 함수 (이름이 정확해야 합니다)
export const generateCleaningVideo = async (prompt: string) => {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("시네마 에러:", error);
    return null;
  }
};
