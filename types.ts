export type ViewState = 'home' | 'about' | 'service-detail' | 'faq' | 'office' | 'contact';

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  fullContent: string[]; // Array of paragraphs
  iconName: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}