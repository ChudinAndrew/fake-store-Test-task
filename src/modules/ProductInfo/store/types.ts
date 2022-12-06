
export interface ProductState {
  products: IProduct[];
  isFetching: boolean;
  error: string;
}

export interface IProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface IProductResponse {
  data: IProduct[];
}

