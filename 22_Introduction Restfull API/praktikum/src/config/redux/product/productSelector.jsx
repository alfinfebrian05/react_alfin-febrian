import { useSelector } from "react-redux";

export const useProductSelector = () =>
  useSelector((state) => state.product.products);
