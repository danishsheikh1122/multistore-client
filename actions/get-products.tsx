import { Product } from "@/types";
import qs from "query-string";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
interface Query {
  categoryId?: string;
  colorId?: string;
  isFeatured?: boolean;
  sizeId?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
      sizeId: query.sizeId,
    },
  });
  const res = await fetch(URL);
  return res.json();
};
export default getProducts;
