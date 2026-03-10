import { useState } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProfilePage from './pages/ProfilePage'
import CartPage from './pages/CartPage'
import ShoppingCart from './components/ShoppingCart'
import './App.css'

function App() {
  // this keeps track of what page we are on
  const [currentPage, setCurrentPage] = useState('home')

  // this is the cart array that holds all the items
  const [cartItems, setCartItems] = useState([])

  // function to add stuff to the cart
  function addToCart(product) {
    // check if item is already in cart
    let found = false
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        found = true
        break
      }
    }

    if (found) {
      // if its already there, add 1 to the quantity
      const newCart = cartItems.map(function (item) {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      setCartItems(newCart)
    } else {
      // if its not there, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  // function to remove stuff from the cart
  function removeFromCart(productId) {
    const newCart = []
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id !== productId) {
        newCart.push(cartItems[i])
      }
    }
    setCartItems(newCart)
  }

  // function to change the quantity of an item
  function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
      removeFromCart(productId)
      return
    }
    const newCart = cartItems.map(function (item) {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity }
      }
      return item
    })
    setCartItems(newCart)
  }

  // this function decides which page to show
  function renderPage() {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'products':
        return (
          <ProductsPage
            addToCart={addToCart}
          />
        )
      case 'profile':
        return <ProfilePage />
      case 'cart':
        return (
          <CartPage
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        )
      default:
        return <HomePage />
    }
  }

  return (
    <div className="app">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartItems={cartItems}
      />
      <main className="main-content">
        {renderPage()}
        {cartItems.length > 0 && currentPage !== 'cart' && (
          <ShoppingCart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          />
        )}
      </main>
    </div>
  )
}

export default App
