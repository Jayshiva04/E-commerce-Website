import React from 'react'
import "../SubBanner/SubBanner.css"

const SubBanner = () => {
  return (
    <div>
        <div class="Food">
         <div class="Food_items">
             <img src="./free.png" alt="" height="40px" />
             <div class="Food_container">
                 <h2>Free Shipping</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>   
             </div>
         </div>
         <div class="Food_items">
            <img src="./support1.png" alt="" height="40px" />
            <div class="Food_container">
                <h2>Support 24/7</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>   
            </div>
        </div>
        <div class="Food_items">
         <img src="./money.png" alt="" height="40px" />
         <div class="Food_container">
             <h2>Return Money</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
         </div>
     </div>
      </div>
      <div className="Arrival">
    <h1>New Arrival</h1>
    <p className="dummy_border_1"></p>
    <p>Lorem ipsum, dolor sit amet consectetur.</p>
   </div>
    </div>
  )
}

export default SubBanner