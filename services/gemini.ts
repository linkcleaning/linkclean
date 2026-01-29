import { GoogleGenerativeAI } from "@google/generative-ai";

// 환경변수나 직접 입력이 필요하지만, 우선 빌드 통과를 위해 구조만 만듭니다.
const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE");
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateCleanImage = async (imageFile: string) => {
  // 시각화 로직이 들어가는 부분
  return imageFile; 
};
