import arabicImage from '../assets/coffees/arabic.svg';
import coffeeWithMilkImage from '../assets/coffees/coffee-with-milk.svg';
import capuccinoImage from '../assets/coffees/capuccino.svg';
import hotChocolateImage from '../assets/coffees/hot-chocolate.svg';
import cubanImage from '../assets/coffees/cuban.svg';
import americanEspressoImage from '../assets/coffees/american-espresso.svg';
import creamyEspressoImage from '../assets/coffees/creamy-espresso.svg';
import icedEspressoImage from '../assets/coffees/iced-espresso.svg';
import espressoImage from '../assets/coffees/espresso.svg';
import hawaiianImage from '../assets/coffees/hawaiian.svg';
import irishImage from '../assets/coffees/irish.svg';
import latteImage from '../assets/coffees/latte.svg';
import macchiatoImage from '../assets/coffees/macchiato.svg';
import mocaccinoImage from '../assets/coffees/mocaccino.svg';

export const coffees = [
  {
    id: 1,
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: espressoImage,
  },
  {
    id: 2,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: americanEspressoImage,
  },
  {
    id: 3,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    image: creamyEspressoImage,
  },
  {
    id: 4,
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: icedEspressoImage,
  },
  {
    id: 5,
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    image: coffeeWithMilkImage,
  },
  {
    id: 6,
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    image: latteImage,
  },
  {
    id: 7,
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    image: capuccinoImage,
  },
  {
    id: 8,
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    image: macchiatoImage,
  },
  {
    id: 9,
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    image: mocaccinoImage,
  },
  {
    id: 10,
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    image: hotChocolateImage,
  },
  {
    id: 11,
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    image: cubanImage,
  },
  {
    id: 12,
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    image: hawaiianImage,
  },
  {
    id: 13,
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    image: arabicImage,
  },
  {
    id: 14,
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    image: irishImage,
  },
];
