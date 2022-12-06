import axios from "axios";

export const getProductById = (id:number): any => {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response: any) => response);
};
