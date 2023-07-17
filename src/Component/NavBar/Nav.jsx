import React from 'react'
import "../NavBar/Nav.css"


const Nav = () => {
  return (
    <div>
         <div className="Upper_nav">
      <div className="Nav_content">
         <p>English</p>
         <img src="./icone.png"/>
         <p>|</p>
         <p>EUR</p>
         <img src="./icone.png"/>
         <p>|</p>
         <p>Call Us 3965410</p>
 </div>
      <div className="Nav_text">
         <p>Free delivery on order over<span> €200.00</span></p>
      </div>
   </div>
<hr />

   <div className="Navbar">
    <div className="Flone_container">
      <img src="./logo.png"/>
    </div>
    <div className="Content_container">
      
    <a href="/">Home</a>
  <img src="./icone.png" alt="Icon" />
  <a href="/shop">Shop</a>
  <img src="./icone.png" alt="Icon" />
  <a href="/products">Products</a>
  <img src="./icone.png" alt="Icon" />
  <a href="/pages">Pages</a>
  <img src="./icone.png" alt="Icon" />
  <a href="/blog">Blog</a>
  <img src="./icone.png" alt="Icon" />
  <a href="/contact">Contact Us</a>
  <img src="./icone.png" alt="Icon" />
    </div>
    <div className="Icon_container">
       <img src="./search.png"/>
       <img src="./prof.png"/>
       <img src="./shuffle.png"/>
       <img src="./heart.png"/>
       <img src="./shopy.png"/>
       <span id="add_to_cart">0</span>
       
    </div>
   </div>
   <div className="Nav">
      <h5><span>HOME  </span></h5>
     <h5>/</h5>
     <h5> SHOP PRODUCT</h5>
   </div>
    </div>
  )
}

export default Nav