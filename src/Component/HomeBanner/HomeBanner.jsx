import React from 'react'
import "../HomeBanner/HomeBanner.css"

const HomeBanner = () => {
  return (
    <div>
      <div class="Entire_parent">
 <div class="Body_container">
    
     <div class="Image_parent_container">
      <div class="Imagee">
      <img src="./sweater.png"/>
      <button>-10%</button>
      
      </div>
      <div class="Image_child_container">
         <img src="./img1.png"/>
         <img src="./img2.png"/>
         <img src="./img3.png"/>
         <img src="./img4.png"/>
      </div>
     </div>
</div>


   <div class="Body_content_container_parent">
      <h2>Lorem ipsum jacket</h2>
      <div class="Rate_container">
      <span><h2>€11.2 </h2></span>
      <h3><strike>€12.45</strike></h3>
      </div>
      <img src="./star.png"/>
      <div class="Para1">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dicta. ipsum dolor, sit amet consectetur adipisicing elit. 
         Earum iste provident a odio inventore labore consequatur
          repellat dignissimos nihil voluptatibus reiciendis omnis, impedit temporibus aliquid dolores voluptates perferendis. Ipsam, porro?</p></div>
<br />
<hr />   
<div class="Select_container">
   <div class="Select_child1">
      <h3>Color</h3>
      <input class="rad1" type="radio" id="1"/>
      <input class="rad2" type="radio" id="2"/>
      <input class="rad3" type="radio" id="3"/>
   </div>
   <div class="Select_child2">
<b><h4>Size</h4></b>
   <button>X</button>
   <button>M</button>
   <button>XL</button>
   </div>
</div>
<div class="Para_container">
   <div class="Box">
      <h3>-  1  + </h3>
   </div>
   <div class="Button">
      <button  onclick="IncreaseCount()"><h3>ADD TO CART</h3></button>
      <img src="./heart.png"/>
      <img src="./shuffle.png"/>
      <br />
   </div>
</div>
<div class="Remaining_content_container">
   <h4>Categories :
   fashionmen
   <br />
   <br />
   Tags :
   fashion  men  jacket  full sleeve</h4>
   <div class="Icons_container">
    
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-dribbble"></i>
      <i class="fa-brands fa-pinterest-p"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-linkedin-in"></i>
   </div>
   </div>
</div>
</div>
    </div>
  )
}

export default HomeBanner