import React from 'react';
import './newscards.css';

//importar images
import img1 from './img/news1.jpeg';
import img2 from './img/news2.jpeg';
import img3 from './img/news3.jpeg';
import img4 from './img/news4.jpeg';

function newscards() {
    return (
        <div class="newscontainer">
            <div class="news-container">
          <div class="tcontainer">
          <div class="tln">
          <h3></h3>
          </div>
          </div>
            <div class="news-cards">
                <div class="news">
                    <img src={img1} alt="" />
                    <h3>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita! Non nesciunt ab ut, voluptatem inventore distinctio, voluptas, odio officia doloribus libero deserunt. Quisquam accusamus, fugit velit dicta aliquid eum?</p>
                    <div class="btn-vermas"><a href="/#">ver más <i class="fa fa-angle-double-right" aria-hidden="true"></i></a></div>
                </div>
                <div class="news">
                    <img src={img2} alt="" />
                    <h3>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita! Non nesciunt ab ut, voluptatem inventore distinctio, voluptas, odio officia doloribus libero deserunt. Quisquam accusamus, fugit velit dicta aliquid eum?</p>
                    <div class="btn-vermas"><a href="/#">ver más <i class="fa fa-angle-double-right" aria-hidden="true"></i></a></div>
                </div>
                <div class="news">
                    <img src={img3} alt="" />
                    <h3>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita! Non nesciunt ab ut, voluptatem inventore distinctio, voluptas, odio officia doloribus libero deserunt. Quisquam accusamus, fugit velit dicta aliquid eum?</p>
                    <div class="btn-vermas"><a href="/#">ver más <i class="fa fa-angle-double-right" aria-hidden="true"></i></a></div>
                </div>
                <div class="news">
                    <img src={img4} alt="" />
                    <h3>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, expedita! Non nesciunt ab ut, voluptatem inventore distinctio, voluptas, odio officia doloribus libero deserunt. Quisquam accusamus, fugit velit dicta aliquid eum?</p>
                    <div class="btn-vermas"><a href="/#">ver más <i class="fa fa-angle-double-right" aria-hidden="true"></i></a></div>
                </div>
            </div>
          </div>
        </div>
      );
    }
  
  export default newscards;