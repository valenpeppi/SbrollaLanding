export interface VehicleData {
  brand: string;
  model: string;
  year: string;
  engine?: string;
  partCategory?: string;
  description?: string;
  selectedContact?: 'lia' | 'fernando';
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  popularItems: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface CarBrandCatalog {
  brand: string;
  models: {
    name: string;
    years: string[];
    engines?: string[];
  }[];
}
