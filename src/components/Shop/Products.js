import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Alice in Wonderland',
    description: 'It details the story of a young girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures.',
  },
  {
    id: 'p2',
    price: 5,
    title: 'Howl\'s Moving Castle',
    description: 'It tells the story of Sophie, a young milliner who is turned into an elderly woman by a witch who enters her shop and curses her.',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}

      </ul>
    </section>
  );
};

export default Products;
