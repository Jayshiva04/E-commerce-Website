import React from 'react'
import "../Banner/Banner.css"

const Banner = () => {
  return (
    <div>
         <div class="Image">
      <img src="./image.png" alt="" />
      <div class="Image_menu">
            <h3 class="Head1">Stylish</h3>
          <h1>Male Clothes</h1>
          <p>30% off summer Vacation</p>
      <div class="Button1">
        <button>SHOW NOW</button>
      </div>
      </div>
      <div class="Icon">
        <img src="./greater.png" alt="" />
      </div>
      <div class="Icon1">
        <img src="./lesss.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Banner