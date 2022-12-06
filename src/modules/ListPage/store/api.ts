import axios from "axios";

export const getProducts = (): any => {
  return axios
    .get(`https://fakestoreapi.com/products`)
    .then((response: any) => response);
};
