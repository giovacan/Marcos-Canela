import React from 'react';
import './Pye.css';

//importar images
import bannerimg from './img/bannerimg.jpg';

function Pye () {
    return (
            <div className="bannerpe">
                <div className="containerban">
                  <div className="banner">
                   <img src={ bannerimg } alt="" />
                  <div className="textban">
                    <h4>Hello world</h4>
                    <h2>hello world</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam tenetur laudantium, sit velit voluptas, assumenda a deserunt hic ab quam libero non eius! Debitis commodi ipsa blanditiis esse nihil!</p>
                    <div className="btn-banner"> Click Aquí </div>
                  </div>
                </div>
              </div>
            </div>    
      )
    }
  
  
  export default Pye;