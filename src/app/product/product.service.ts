import { Product, Sizes } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = 'rftgyhjkl';
  // data.createdAt = new Date(2004, 10, 7);
  products.push(data);
}

export const updateProduct = (id: string, changes: Product) => {
//  code
}
