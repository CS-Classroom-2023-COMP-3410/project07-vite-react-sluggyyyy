function CartPage(props) {
  const cartItems = props.cartItems
  const removeFromCart = props.removeFromCart
  const updateQuantity = props.updateQuantity

  // calculate total price
  let total = 0
  for (let i = 0; i < cartItems.length; i++) {
    total = total + cartItems[i].price * cartItems[i].quantity
  }

  // if cart is empty show a message
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart</h2>
        <p className="empty-cart-message">Your cart is empty! Go add some stuff.</p>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.map(function (item) {
        return (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)} each</p>
            </div>
            <div className="cart-item-controls">
              <button onClick={function () { updateQuantity(item.id, item.quantity - 1) }}>-</button>
              <span>{item.quantity}</span>
              <button onClick={function () { updateQuantity(item.id, item.quantity + 1) }}>+</button>
              <button className="remove-btn" onClick={function () { removeFromCart(item.id) }}>Remove</button>
            </div>
          </div>
        )
      })}
      <div className="cart-total">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
    </div>
  )
}

export default CartPage
