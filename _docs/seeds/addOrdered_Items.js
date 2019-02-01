const faker = require('faker');

const createFakeOrderedItems = () => ({
  quantity: faker.random.number(100),
});
const fakeOrderedItems = [];
const desiredAmout = 50;
/* eslint-disable-next-line */
for (let i = 0; i < desiredAmout; i++) {
  fakeOrderedItems.push(createFakeOrderedItems());
}
/* eslint-disable-next-line */
exports.seed = (knex, Promise) => (
  // Deletes ALL existing entries
  knex('ordered_items')
    .del()
    .then(() => (knex('ordered_items').insert(fakeOrderedItems)))
);
