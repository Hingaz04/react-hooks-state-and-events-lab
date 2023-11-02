import React from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState(false);

  const toggleCartStatus = () => {
    setInCart(!isInCart);
  return (
    <li className={isInCart ? 'in-cart' : ''}>

      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCartStatus}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

}

export default Item;
