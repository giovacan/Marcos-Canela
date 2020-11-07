// Import React as usual
import React from 'react'

// Import styles
import './lph.scss'

//import images
import Img1 from './img/fimgps.jpg'

// Import slider component
import Slider from '../Slider/Slider'
import Slide from '../Slider/Slide'

// carousel funtion

// App component
function Lph({ carouselId }) {
	return (
		<div className='last-products'>
			<div className='titlelph'>
				<h3></h3>
			</div>
			<Slider id={carouselId}>
				<Slide>
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
									<i className='fas fa-shopping-cart' aria-hidden='true' size='x2'></i>
								</div>
							</div>
						</div>
					</div>
				</Slide>
				<Slide>
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
									<i className='fas fa-shopping-cart' aria-hidden='true' size='x2'></i>
								</div>
							</div>
						</div>
					</div>
				</Slide>
				<Slide>
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
									<i className='fas fa-shopping-cart' aria-hidden='true' size='x2'></i>
								</div>
							</div>
						</div>
					</div>
				</Slide>
				<Slide>
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
									<i className='fas fa-shopping-cart' aria-hidden='true' size='x2'></i>
								</div>
							</div>
						</div>
					</div>
				</Slide>
				<Slide>
				<div className='product 5'>
						<img src={Img1} className='img1' alt='' />
						<h2 className='titleproduct'>Hola mundo</h2>
						<p className='description-product'>Precio: $100.00 MXN</p>
						<div className='btns-product'>
							<div className='details'>
								<div className='btn-detail'>Detalles</div>
							</div>
							<div className='add-to-cart'>
								<div className='btn-add-cart'>
									<i className='fas fa-shopping-cart' aria-hidden='true' size='x2'></i>
								</div>
							</div>
						</div>
					</div>
				</Slide>
				<Slide>
					<div className='product 6'>
						<img src={Img1} className='img1' alt='' />
						<h2 className='titleproduct'>Hola mundo</h2>
						<p className='description-product'>Precio: $100.00 MXN</p>
						<div className='btns-product'>
							<div className='details'>
								<div className='btn-detail'>Detalles</div>
							</div>
							<div className='add-to-cart'>
								<div className='btn-add-cart'>
									<i className='fas fa-shopping-cart' aria-hidden='true' size='x2'></i>
								</div>
							</div>
						</div>
					</div>
				</Slide>
				<Slide>
					<div className='product 7'>
						<img src={Img1} className='img1' alt='' />
						<h2 className='titleproduct'>Hola mundo</h2>
						<p className='description-product'>Precio: $100.00 MXN</p>
						<div className='btns-product'>
							<div className='details'>
								<div className='btn-detail'>Detalles</div>
							</div>
							<div className='add-to-cart'>
								<div className='btn-add-cart'>
									<i className='fas fa-shopping-cart' aria-hidden='true' size='x2'></i>
								</div>
							</div>
						</div>
					</div>
				</Slide>
				<Slide>
					<div className='product 8'>
						<img src={Img1} className='img1' alt='' />
						<h2 className='titleproduct'>Hola mundo</h2>
						<p className='description-product'>Precio: $100.00 MXN</p>
						<div className='btns-product'>
							<div className='details'>
								<div className='btn-detail'>Detalles</div>
							</div>
							<div className='add-to-cart'>
								<div className='btn-add-cart'>
									<i className='fas fa-shopping-cart' aria-hidden='true' size='x2'></i>
								</div>
							</div>
						</div>
					</div>
				</Slide>
			</Slider>
			<div className='featured-products'></div>
		</div>
	)
}

export default Lph
