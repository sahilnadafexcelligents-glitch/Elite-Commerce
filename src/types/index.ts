export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Mockup {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
