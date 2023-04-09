import { useSelector } from "react-redux";

export const useProductSelector = () =>
  useSelector((state) => state.product.products);

export const useProductType = () => useSelector((state) => state.product.type);

export const useIsEditSelector = () =>
  useSelector((state) => state.product.isEdit);
