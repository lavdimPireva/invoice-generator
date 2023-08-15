export function Cart({ cartItems, removeFromCart }) {
  return (
    <div>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>
            {item.name} ({item.quantity})
          </p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
