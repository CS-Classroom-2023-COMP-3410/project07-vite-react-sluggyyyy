// list of products we are selling
const products = [
  { id: 1, name: 'T-Shirt', price: 19.99, description: 'A cool t-shirt' },
  { id: 2, name: 'Hoodie', price: 39.99, description: 'A warm hoodie' },
  { id: 3, name: 'Hat', price: 14.99, description: 'A nice hat' },
  { id: 4, name: 'Sneakers', price: 59.99, description: 'Comfy sneakers' },
  { id: 5, name: 'Backpack', price: 29.99, description: 'A sturdy backpack' },
  { id: 6, name: 'Sunglasses', price: 24.99, description: 'Cool sunglasses' },
]

function ProductsPage(props) {
  const addToCart = props.addToCart

  return (
    <div className="page">
      <h2>Products</h2>
      <div className="product-list">
        {products.map(function (product) {
          return (
            <div className="product-card" key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>${product.price.toFixed(2)}</strong></p>
              <button onClick={function () { addToCart(product) }}>
                Add to Cart
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductsPage
