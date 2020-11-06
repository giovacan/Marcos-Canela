// Import React as usual
import React from 'react'

// Import styles
import './lph.scss'

//import images
import Img1 from './img/fimgps.jpg'

// Import slider component
import Slider from './slider/Slider'

// carousel funtion

// App component
function Lph({ carouselId }) {
	return (
		<div class='last-products'>
			<div class='titlelph'>
				<h3>Title</h3>
			</div>
			<Slider id={carouselId}></Slider>
			<div class='featured-products'>
				<div className='slide-container'>
					<div className='carousel'>
						<div className='product 1'>
							<img src={Img1} className='img1' alt='' />
							<h2 className='titleproduct'>Hola mundo</h2>
							<p className='description-product'>Precio: $100.00 MXN</p>
							<div className='btns-product'>
								<div className='details'>
									<div className='btn-detail'>Detalles</div>
								</div>
								<div className='add-to-cart'>
									<div className='btn-add-cart'>
										<i class='fas fa-shopping-cart' aria-hidden='true' size='x2'></i>
									</div>
								</div>
							</div>
						</div>
						<div className='product 2'>
							<img src={Img1} className='img1' alt='' />
							<h2 className='titleproduct'>Hola mundo</h2>
							<p className='description-product'>Precio: $100.00 MXN</p>
							<div className='btns-product'>
								<div className='details'>
									<div className='btn-detail'>Detalles</div>
								</div>
								<div className='add-to-cart'>
									<div className='btn-add-cart'>
										<i class='fas fa-shopping-cart' aria-hidden='true' size='x2'></i>
									</div>
								</div>
							</div>
						</div>
						<div className='product 3'>
							<img src={Img1} className='img1' alt='' />
							<h2 className='titleproduct'>Hola mundo</h2>
							<p className='description-product'>Precio: $100.00 MXN</p>
							<div className='btns-product'>
								<div className='details'>
									<div className='btn-detail'>Detalles</div>
								</div>
								<div className='add-to-cart'>
									<div className='btn-add-cart'>
										<i class='fas fa-shopping-cart' aria-hidden='true' size='x2'></i>
									</div>
								</div>
							</div>
						</div>
						<div className='product 4'>
							<img src={Img1} className='img1' alt='' />
							<h2 className='titleproduct'>Hola mundo</h2>
							<p className='description-product'>Precio: $100.00 MXN</p>
							<div className='btns-product'>
								<div className='details'>
									<div className='btn-detail'>Detalles</div>
								</div>
								<div className='add-to-cart'>
									<div className='btn-add-cart'>
										<i class='fas fa-shopping-cart' aria-hidden='true' size='x2'></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Lph
