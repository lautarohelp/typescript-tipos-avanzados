import { addProduct } from "./product/product.service";

addProduct({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 10,
  category: {
    id: 12,
    name: 'actions'
  }
})
