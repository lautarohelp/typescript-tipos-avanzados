import { Product } from "../product/product.model";
import { User } from "../../01-enum";

export interface Order {
  id: string | number;
  createdAt: Date;
  product: Product[];
  user: User
}
