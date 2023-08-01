const { faker } = require('@faker-js/faker');
// import { faker } from '@faker-js/faker';

// const randomProduct = faker.commerce.product()
// const randomproductDescription = faker.commerce.productDescription()
// const randomproductMaterial = faker.commerce.productMaterial()
// const randomproductName = faker.commerce.productName()
// const randomprice = faker.commerce.price({ min: 100, max: 200 })

exports.seed = async function (knex) {
    
  // Deletes ALL existing entries
  await knex('merchTables').del()
  
  const merchdata = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
    {
      id: 16,
    },
    {
      id: 17,
    },
    {
      id: 18,
    },
    {
      id: 19,
    },
    {
      id: 20,
    },
];

    for (const merch of merchdata) {

      const randomProduct = faker.commerce.product();
      const randomproductDescription = faker.commerce.productDescription();
      const randomproductMaterial = faker.commerce.productMaterial();
      const randomproductName = faker.commerce.productName();
      const randomprice = faker.commerce.price({ min: 50, max: 200 });

      await knex('merchTables').insert({
        ...merch,
        product: randomProduct,
        productDescription: randomproductDescription,
        productMaterial: randomproductMaterial,
        productName: randomproductName,
        price: randomprice,
      });
    }
};

