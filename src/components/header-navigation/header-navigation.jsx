import React from 'react'

const HeaderNavigation = () => {
  return (
    <nav className="main-navbar">
      <div className="container">
        <ul className="main-menu">
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/books">Книги</a>
          </li>
          <li>
            <a href="/comments">Отзывы</a>
          </li>
          <li>
            <a href="#">
              Jewelry
              <span className="new">New</span>
            </a>
          </li>
          <li>
            <a href="#">Shoes</a>
            <ul className="sub-menu">
              <li>
                <a href="#">Sneakers</a>
              </li>
              <li>
                <a href="#">Sandals</a>
              </li>
              <li>
                <a href="#">Formal Shoes</a>
              </li>
              <li>
                <a href="#">Boots</a>
              </li>
              <li>
                <a href="#">Flip Flops</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li>
                <a href="./product.html">Product Page</a>
              </li>
              <li>
                <a href="./category.html">Category Page</a>
              </li>
              <li>
                <a href="./cart.html">Cart Page</a>
              </li>
              <li>
                <a href="./checkout.html">Checkout Page</a>
              </li>
              <li>
                <a href="./contact.html">Contact Page</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default HeaderNavigation
