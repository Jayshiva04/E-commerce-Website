import React from 'react'
import "../OurBlog/OurBlog.css"
const OurBlog = () => {
  return (
    <div>
        <div class="Head_title">
<p class="dummy_border_2"></p>
<h1 class="Head">OUR</h1>
<h1 class="Word">BLOG</h1>
<p class="dummy_border_3"></p>
</div>
<div class="Blog">
  <div class="Blog_menu">
    <img src="./blog-1.png" alt="" />
    <div class="Btn_menu">
      <button>Life style</button>
    </div>
    <div class="Btn_menu1">
      <button>men</button>
    </div>
    <div class="Btn">
    <button>
      <h2>A guide to latest trends</h2>
        <p>By Admin</p>
    </button>
    </div>

  </div>
  <div class="Blog_menu">
    <img src="./blog-2.png" alt="" />
    <div class="Btn_menu">
      <button>Life style</button>
    </div>
    <div class="Btn">
      <button>
        <h2>Five ways to lead a happy life</h2>
          <p>By Admin</p>
      </button>
      </div>

  </div>
  <div class="Blog_menu">
    <img src="./blog-3.png" alt="" />
    <div class="Btn_menu">
      <button>Life style</button>
    </div>
    <div class="Btn">
      <button>
        <h2>Tips on having a happy life</h2>
          <p>By Admin</p>
      </button>
      </div>
   
  </div>
</div> 
    </div>
  )
}

export default OurBlog