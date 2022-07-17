// eslint-disable-next-line import/prefer-default-export
export const category = [
  {
    id: 0,
    name: 'Все',
  }, {
    id: 1,
    name: 'Мясные',
  }, {
    id: 2,
    name: 'Вегетарианская',
  }, {
    id: 3,
    name: 'Гриль',
  }, {
    id: 4,
    name: 'Острые',
  }, {
    id: 5,
    name: 'Закрытые',
  },
];

export const type = ['тонкое', 'традиционное'];

export const sortTypies = [
  {
    id: 0,
    title: 'популярности',
    property: 'rating',
    asc: true,
  }, {
    id: 1,
    title: 'популярности',
    property: 'rating',
    asc: false,
  }, {
    id: 2,
    title: 'цене',
    property: 'price',
    asc: true,
  }, {
    id: 3,
    title: 'цене',
    property: 'price',
    asc: false,
  }, {
    id: 4,
    title: 'алфавиту',
    property: 'name',
    asc: true,
  }, {
    id: 5,
    title: 'алфавиту',
    property: 'name',
    asc: false,
  },
];

export const defaultSortType = {
  id: 0,
  title: 'популярности',
  property: 'rating',
  asc: true,
};

export const BASE_COUNT_PIZZA = 8;

export const BASE_URL_API = 'https://62cb2ecc3e924a0128649d53.mockapi.io/items';
