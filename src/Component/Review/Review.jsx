import React from 'react'
import "../Review/Review.css"

const Review = () => {
  return (
   <div>
    
        <div class="Review_container">
      <h2>Additional Information</h2>
      <h2>Description</h2>
      <h2>Reviews(2) </h2>
        </div>
   <div class="Border">
   <p class="dummyy_border"></p>
   <div class="line">
   </div>
   <p class="dummy_borderr"></p>
   </div>
   <div class="The_whole_div">
      <div class="Whole_container">
   <div class="Whole_container1">
   <div class="Img_container">
      <img src="./custo.png" />
   </div>

      <div class="Review_content_container">
        <div class="Review_head_and_icon_parent">
       <div class="Review_head_container">
         <h3>White Lewis</h3>
       </div>
   
       <div class="Star_container">
         <img src="fullstar.png"/>
       </div>
       <div class="Reply">
         <h4>Reply</h4>
       </div>
         </div>
       <div class="Review_body_container">
      <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia</p>
      <p> Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. </p>
      <p>quam nisi, congue id nulla.</p>
       </div>
      </div>
   
   </div>


   <div class="Whole_container2">
      <div class="Img_container">
         <img src="./custo2.png" />
      </div>
   
         <div class="Review_content_container">
            <div class="Review_head_and_icon_parent">
          <div class="Review_head_container">
            <h3>White Lewis</h3>
          </div>
          <div class="Star_container">
            <img src="./fullstar.png"/>
          </div>
          <div class="Reply">
            <h4>Reply</h4>
          </div>
            </div>
          <div class="Review_body_container">
         <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia</p>
         <p> Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. </p>
         <p>quam nisi, congue id nulla.</p>
          </div>
         </div>
      
      </div>
      </div>
   <div class="Add_a_review_container">
     <h3>Add a Review</h3>
     <div class="Rating">
     <h4>Your Rating:</h4>
     <img src="./fullstar.png"/>
     </div>

     <div class="Text_area_container">
     <div class="Text_area_container1">
     <input type="text" placeholder="    Name"/>
     </div>
     <div class="Text_area_container2">
     <input type="email" placeholder="   Email"/>
     </div>
     </div>
     <br />
     <div class="Text_area_msg">
     <textarea placeholder="Message"></textarea>
     <br />
     <button>SUBMIT</button>
     </div>
     </div>  
  </div>
   </div>
   
   
   
  )
}

export default Review