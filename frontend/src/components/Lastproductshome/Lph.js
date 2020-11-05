// Import React as usual
import React from 'react'

// Imports for carrousel
import useCarousel from './carousel'
// Import styles
import './lph.scss'

//import images
import Img1 from './img/fimgps.jpg'
import Rightcontroller from './Rightcontrol.js'
import Leftcontroller from './Leftcontrol.js'

// carousel funtion

// App component
function Lph({ carouselId }) {
	const carousel = useCarousel(carouselId)
	return (
		<div class='last-products'>
			<div class='titlelph'>
				<h3></h3>
			</div>
			<div class='featured-products'>
				<slide className='slide-container'>
					<control className='control previous'>
						<Leftcontroller id='previous' />
					</control>
					<carousel className='carousel'>
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
					</carousel>
					<control className='control next'>
						<Rightcontroller id='next' />
					</control>
				</slide>
			</div>
		</div>
	)
}

export default Lph
