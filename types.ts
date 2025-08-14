
import type React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  pricePer: string;
  messages: string;
  pricePerMessage: string;
  features: string[];
  isRecommended: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}