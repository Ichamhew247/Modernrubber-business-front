export const total = todos.reduce(
  (accumulator, todo) => accumulator + +todo.priceValue,
  0
);
