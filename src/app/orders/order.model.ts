import { Product } from "../product/product.model";
import { User } from "../../01-enum";
import { BaseModel } from "../base.model";


export interface Order extends BaseModel {
  product: Product[];
  user: User
}
