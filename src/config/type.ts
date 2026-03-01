import { toast } from "sonner";

export interface TradingCardProps {
  name: string;
  set: string;
  price: number;
  imageUrl: string;
  grade?: string;
}


export interface TReviews {
  name : string,
  review : string , 
  rating : number,
  date : string
}

export interface CardItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface ProductSet {
  id: number;
  title: string;
  subtitle: string;
  cardsCount: number;
  releaseDate: string;
  trend: string;
  imageUrl: string;
}


export interface IDetails {
  image : string;
  subTitle : string;
  title : string
}

export interface cardCategoriesType {
  name: string;
  count: string;
  icon: React.ReactNode,
  color: string;
  route : string;
}



export const toastMessag = () => {

  toast.info("Hey James, we are working on it. Don’t worry 🙂");


}