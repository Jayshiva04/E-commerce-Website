import React from 'react'
import "../Sidebar/Sidebar.css"
const Sidebar = () => {
  return (

    <div>
       <div class="page">
         <div class="page_1">
         <div class="resent_project">
            <h3>Search</h3>
            <div>
               <button class="Search_here">Search here...
                  <div class="search_logo">
                     <p class="dummy_border"></p>
                     <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
               </button>
            </div>
            <h4 class="sidebar-title">Recent Projects </h4>
            <div class="projects">
               <div class="sidebar-blog-img">
                  <a href="#"> <img src="sidebar-1.jpg" /></a>
                  <div class="sidebar-blog-content">
                     <small>PHOTOGRAPHY</small>
                     <h4>T- Shart And Jeans</h4>
                  </div>
               </div>
               <div class="sidebar-blog-img">
                  <a href="#"> <img src="sidebar-2.jpg" /></a>
                  <div class="sidebar-blog-content"> <small>BRANDING</small>
                     <h4>T- Shart And Jeans</h4>
                  </div>
               </div>
               <div class="sidebar-blog-img">
                  <a href="#"> <img src="sidebar-3.jpg" /></a>

                  <div class="sidebar-blog-content"> <small>DESIGN</small>
                     <h4>T- Shart And Jeans</h4>
                  </div>
               </div>
               <div class="sidebar-blog-img">
                  <a href="#"> <img src="sidebar-2.jpg" /></a>
                  <div class="sidebar-blog-content"> <small>PHOTOGRAPHY</small>
                     <h4>T- Shart And Jeans</h4>
                  </div>
               </div>
            </div>
            <div class="check_box">
               <div class="option">
               <h3>Categories</h3>
               
                  <input type="checkbox" name="Category1" value="true" />
                  <label for="Category1"> Women <button class="span1">4</button></label> <br /><br />
                  <input type="checkbox" name="Category2" value="true" />
                  <label for="Category2"> Men<button class="span2">4</button></label> <br /><br />
                  <input type="checkbox" name="Category3" value="true" />
                  <label for="Category3"> Bags<button class="span3">4</button></label> <br /><br />
                  <input type="checkbox" name="Category4" value="true" />
                  <label for="Category4"> Accessories<button class="span4">4</button></label> <br /><br />
              
            </div>
   
           
            </div>
            <div class="tags">
               <h4>Tags</h4>
               <button class="t_button">Clothing</button>
               <button class="t_button">Accessories</button><br />
               <button class="t_button">For Men</button>
               <button class="t_button">Women</button><br />
               <button class="t_button">Fashion</button>
            </div>
         </div>
      </div>

      <div className="page_2">
   <div className="product">
     <img src="./blog-1.jpg" alt="Product 1 Image" />
     <div className="blog">
       <ul>
         <li>22 APRIL, 2024 <b>-</b></li>
         <li>4 <i className="far fa-comments"></i></li>
       </ul>
     </div>
     <h2>Lorem ipsum blog post</h2>
     <p>Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem
       natoque nibh id penatibus </p>
     <div className="product_bottom">
       <a href="#" className="read-more">Read More</a>
       <span>Share :</span>
       <div className="s_media">
         <div className="button">
           <div className="icon">
             <i className="fab fa-facebook-f"></i>
           </div>
         </div>
         <div className="button">
           <div className="icon">
             <i className="fab fa-twitter"></i>
           </div>
         </div>
         <div className="button">
           <div className="icon">
             <i className="fab fa-instagram"></i>
           </div>
         </div>
       </div>
     </div>
   </div>

   <div className="product">
     <img src="./blog-2.jpg" alt="Product 2 Image" />
     <div className="blog">
       <ul>
         <li>22 APRIL, 2024 <b>-</b></li>
         <li>4 <i className="far fa-comments"></i></li>
       </ul>
     </div>
     <h2>New collection of our shop</h2>
     <p>Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem
       natoque nibh id penatibus</p>
     <div className="product_bottom">
       <a href="#" className="read-more">Read More</a>
       <span>Share :</span>
       <div className="s_media">
         <div className="button">
           <div className="icon">
             <i className="fab fa-facebook-f"></i>
           </div>
         </div>
         <div className="button">
           <div className="icon">
             <i className="fab fa-twitter"></i>
           </div>
         </div>
         <div className="button">
           <div className="icon">
             <i className="fab fa-instagram"></i>
           </div>
         </div>
       </div>
     </div>
   </div>

   <div className="product">
     <img src="./blog-3.jpg" alt="Product 3 Image" />
     <div className="blog">
       <ul>
         <li>22 APRIL, 2024 <b>-</b></li>
         <li>4 <i className="far fa-comments"></i></li>
       </ul>
     </div>
     <h2>Ipsum blog post two</h2>
     <p>Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem
       natoque nibh id penatibus</p>
     <div className="product_bottom">
       <a href="#" className="read-more">Read More</a>
       <span>Share :</span>
       <div className="s_media">
         <div className="button">
           <div className="icon">
             <i className="fab fa-facebook-f"></i>
           </div>
         </div>
         <div className="button">
           <div className="icon">
             <i className="fab fa-twitter"></i>
           </div>
         </div>
         <div className="button">
           <div className="icon">
             <i className="fab fa-instagram"></i>
           </div>
         </div>
       </div>
     </div>
   </div>

   <div className="product">
     <img src="./blog-4.jpg" alt="Product 4 Image" />
     <div className="blog">
       <ul>
         <li>22 APRIL, 2024 <b>-</b></li>
         <li>4 <i className="far fa-comments"></i></li>
       </ul>
     </div>
     <h2>New shop collection</h2>
     <p>Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem
       natoque nibh id penatibus</p>
     <div className="product_bottom">
       <a href="#" className="read-more">Read More</a>
       <span>Share :</span>
       <div className="s_media">
         <div className="button">
           <div className="icon">
             <i className="fab fa-facebook-f"></i>
           </div>
         </div>
         <div className="button">
           <div className="icon">
             <i className="fab fa-twitter"></i>
           </div>
         </div>
         <div className="button">
           <div className="icon">
             <i className="fab fa-instagram"></i>
           </div>
         </div>
       </div>
     </div>
   </div>

   <div className="product">
     <img src="./blog-5.jpg" alt="Product 5 Image" />
     <div className="blog">
       <ul>
         <li>22 APRIL, 2024 <b>-</b></li>
         <li>4 <i className="far fa-comments"></i></li>
       </ul>
     </div>
     <h2>Lorem blog post four</h2>
     <p>Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem
       natoque nibh id penatibus</p>
     <div className="product_bottom">
       <a href="#" className="read-more">Read More</a>
       <span>Share :</span>
       <div className="s_media">
         <div className="button">
           <div className="icon">
             <i className="fab fa-facebook-f"></i>
           </div>
         </div>
         <div className="button">
           <div className="icon">
             <i className="fab fa-twitter"></i>
           </div>
         </div>
         <div className="button">
           <div className="icon">
             <i className="fab fa-instagram"></i>
           </div>
         </div>
       </div>
     </div>
   </div>

   <div className="product">
     <img src="./blog-6.jpg" alt="Product 6 Image" />
     <div className="blog">
       <ul>
         <li>22 APRIL, 2024 <b>-</b></li>
         <li>4 <i className="far fa-comments"></i></li>
       </ul>
     </div>
     <h2>Ipsum blog post five</h2>
     <p>Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem
       natoque nibh id penatibus</p>
     <div className="product_bottom">
       <a href="#" className="read-more">Read More</a>
       <span>Share :</span>
       <div className="s_media">
         <div className="button">
           <div className="icon">
             <i className="fab fa-facebook-f"></i>
           </div>
         </div>
         <div className="button">
           <div className="icon">
             <i className="fab fa-twitter"></i>
           </div>
         </div>
         <div className="button">
           <div className="icon">
             <i className="fab fa-instagram"></i>
           </div>
         </div>
       </div>
     </div>
   </div>

   <div className="page_navigation">
     <button className="page_no active">&lt;&lt;</button>
     <button className="page_no">1</button>
     <button className="page_no">2</button>
     <button className="page_no">&gt;&gt;</button>
   </div>
 </div>
 </div>
    </div>
  
  
    
  );
};

export default Sidebar