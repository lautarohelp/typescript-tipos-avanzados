import { faker } from '@faker-js/faker';

import { addProduct, products, updateProduct } from "./product/product.service";
for (let index = 0; index < 50; index++) {
  addProduct({
    descriptions: faker.commerce.productDescription(),
    image: faker.image.url(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.multiple(faker.commerce.productAdjective, {
      count: { min: 1, max: 5 },
    }),
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 0, max: 100 }),
    categoryId: faker.string.uuid(),
  })
}

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'new title',
  stock: 10
})



