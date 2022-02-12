import { useSelector } from "react-redux";
import CartItem from "../Compenents/CartItem";

const Cart = () => {
  const { cartItems, totalAmount, quantity } = useSelector((state) => state.cart);

  if (quantity === 0) {
    return <h2 className="my-20 text-3xl font-bold text-red-700	">No items in cart...</h2>;
  }

  return (
    <div className="flex flex-col my-2">
      <h1 className="font-bold font-mono text-3xl" >Cart</h1>
      <div className="flex h-auto flex-col justify-around">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <h2 className="font-bold font-mono">Total Amount: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;

