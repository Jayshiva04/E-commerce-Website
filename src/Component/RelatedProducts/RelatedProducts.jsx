import React from 'react'
import "../RelatedProducts/RelatedProducts.css"

const RelatedProducts = () => {
    return (
      <div>
        <div className="Head_title">
          <p className="dummy_border1"></p>
          <h1 className="Head">Related</h1>
          <h1 className="Word">Products</h1>
          <p className="dummy_border2"></p>
        </div>
  
        <div className="Grid_container">
          <div className="Grid_Parent">
            <div className="imgg1">
              <img src="./img2.png" alt="Product 1" />
              <button>-10%</button>
            </div>
            <div className="Grid_child">
              <h3>Lorem ipsum jacket</h3>
              <span>
                <i className="fa-regular fa-star" id="star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </span>
              <i className="fa-regular fa-star"></i>
              <div className="Body_text">
                <h3>€11.2 -</h3>
                <h3 style={{ color: 'rgb(142,142,142)' }}><strike>€ 12.45</strike></h3>
              </div>
            </div>
          </div>
  
          <div className="Grid_Parent2">
            <div className="imgg2">
              <img src="./image2.png" alt="Product 2" />
              <button>-15%</button>
            </div>
            <div className="Grid_child">
              <h3>Lorem ipsum coat</h3>
              <span>
                <i className="fa-regular fa-star" id="star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </span>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <div className="Body_text">
                <h3>€15.72 -</h3>
                <h3 style={{ color: 'rgb(142,142,142)' }}><strike>€ 18.5</strike></h3>
              </div>
            </div>
          </div>
  
          <div className="Grid_Parent3">
            <div className="imgg3">
              <img src="./image3.png" alt="Product 3" />
              <button className="one">-40%</button>
              <br />
              <button className="two">New</button>
            </div>
            <div className="Grid_child">
              <h3>Lorem ipsum jacket</h3>
              <span>
                <i className="fa-regular fa-star" id="star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </span>
              <div className="Body_text">
                <h3>€10.47 -</h3>
                <h3 style={{ color: 'rgb(142,142,142)' }}><strike>€ 17.45</strike></h3>
              </div>
            </div>
          </div>
  
          <div className="Grid_Parent">
            <div className="imgg4">
              <img src="./image4.png" alt="Product 4" />
              <button>New</button>
            </div>
            <div className="Grid_child">
              <h3>Lorem ipsum fashion coat</h3>
              <span>
                <i className="fa-regular fa-star" id="star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </span>
              <i className="fa-regular fa-star"></i>
              <div className="Body_text">
                <h3>€11.2 -</h3>
                <h3 style={{ color: 'rgb(142,142,142)' }}><strike>€ 12.45</strike></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default RelatedProducts