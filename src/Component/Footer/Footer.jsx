import React from 'react'
import "../Footer/Footer.css"

const Footer = () => {
  return (
    <div>
         <div class="Down_nav">
      <div class="Flone_Container">
        <img src="./logo.png" />
      <h5> © 2023 Flone.<br /></h5>
       <p><pre>All Rights Reserved</pre></p>
      </div>
      <div class="Flex">
      <div class="About_us">
         <h4>ABOUT US</h4>
         <p>About us</p>
         <p>Store location</p>
         <p>Contact</p>
         <p>Orders tracking</p>
      </div>

      <div class="Useful_links">
         <h4>USEFUL LINKS</h4>
         <p>Returns</p>
         <p>Support Policy</p>
         <p>Size guide</p>
         <p>FAQs</p>
      </div>

      <div class="Follow">
         <h4>FOLLOW US</h4>
         <p>Facebook</p>
         <p>Twitter</p>
         <p>Instagram</p>
         <p>Youtube</p>
      </div>

      <div class="Subscribe">
         <h4>SUBSCRIBE</h4>
         <p>Get E-mail updates about our latest shop and special offers.</p>
        <br />
        <div class="Txt">
        <input type="email"placeholder="Enter your email address..."/>
      </div>
         <p>SUBSCRIBE</p>
      </div>
      </div>
   </div>
   </div>

   

  )
}

export default Footer