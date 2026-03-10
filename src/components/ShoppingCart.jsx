function ShoppingCart(props) {
  const cartItems = props.cartItems
  const removeFromCart = props.removeFromCart

  // dont show anything if cart is empty
  if (cartItems.length === 0) {
    return null
  }

  // calculate the total price
  let total = 0
  for (let i = 0; i < cartItems.length; i++) {
    total = total + cartItems[i].price * cartItems[i].quantity
  }

  return (
    <div className="cart-summary">
      <h3>Shopping Cart</h3>
      <ul>
        {cartItems.map(function (item) {
          return (
            <li key={item.id}>
              <span>{item.name} x{item.quantity} - ${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={function () { removeFromCart(item.id) }}>Remove</button>
            </li>
          )
        })}
      </ul>
      <p><strong>Total: ${total.toFixed(2)}</strong></p>
    </div>
  )
}

export default ShoppingCart
