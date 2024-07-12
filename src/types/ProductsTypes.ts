export interface Product {
   _id: string;
   title: string;
   description: string;
   price: number;
   new: boolean;
   discount: number;
   rating: number;
   images: string[];
   amount: number;
}
