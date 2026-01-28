
import React from 'react';
import { Home, Building2, SprayCan, Sparkles, Wind, Droplets } from 'lucide-react';
import { ServiceCard, Testimonial } from './types';

export const SERVICES: ServiceCard[] = [
  {
    id: 'move-in',
    title: '입주/이사 청소',
    description: '새로운 시작을 위한 완벽한 공간 케어. 보이지 않는 곳까지 세심하게 관리합니다.',
    icon: 'sparkles',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'living',
    title: '거주 청소',
    description: '살고 계신 공간의 묵은 먼지와 오염을 제거하여 쾌적한 환경을 선사합니다.',
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'commercial',
    title: '사무실/상업 공간',
    description: '비즈니스의 가치를 높이는 전문적인 오피스 클리닝 솔루션입니다.',
    icon: 'building',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'aircon',
    title: '에어컨 분해 세척',
    description: '제주의 습한 기후를 대비하는 에어컨 완전 분해 살균 세척.',
    icon: 'wind',
    image: 'https://images.unsplash.com/photo-1621905252507-b35482cd84b4?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: '김지현',
    location: '제주시 노형동',
    content: '이사 청소 맡겼는데 정말 구석구석 깨끗해서 놀랐어요. 상담도 친절하십니다.',
    rating: 5
  },
  {
    id: 2,
    author: '박상준',
    location: '서귀포시 강정동',
    content: '에어컨 청소 받고 나니 냄새도 안 나고 너무 시원하네요. 제주에서 제일 믿음직해요.',
    rating: 5
  }
];

export const ICONS = {
  home: <Home className="w-6 h-6" />,
  building: <Building2 className="w-6 h-6" />,
  spray: <SprayCan className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
  wind: <Wind className="w-6 h-6" />,
  droplet: <Droplets className="w-6 h-6" />
};
