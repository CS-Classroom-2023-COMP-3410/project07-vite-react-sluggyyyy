function Header(props) {
  // get the stuff we need from props
  const currentPage = props.currentPage
  const setCurrentPage = props.setCurrentPage
  const cartItems = props.cartItems

  // count total items in cart
  let totalItems = 0
  for (let i = 0; i < cartItems.length; i++) {
    totalItems = totalItems + cartItems[i].quantity
  }

  return (
    <header className="header">
      <h1>My Store</h1>
      <nav className="nav-links">
        <button
          className={currentPage === 'home' ? 'active' : ''}
          onClick={function () { setCurrentPage('home') }}
        >
          Home
        </button>
        <button
          className={currentPage === 'products' ? 'active' : ''}
          onClick={function () { setCurrentPage('products') }}
        >
          Products
        </button>
        <button
          className={currentPage === 'profile' ? 'active' : ''}
          onClick={function () { setCurrentPage('profile') }}
        >
          Profile
        </button>
        <button
          className={currentPage === 'cart' ? 'active' : ''}
          onClick={function () { setCurrentPage('cart') }}
        >
          Cart {totalItems > 0 ? '(' + totalItems + ')' : ''}
        </button>
      </nav>
    </header>
  )
}

export default Header
