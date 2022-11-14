export interface CoffeeData {
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

export interface CoffeeCardProps {
  coffee: CoffeeData;
}
