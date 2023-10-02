import Carousel from 'react-bootstrap/Carousel';

const ImageQueue = () => {
	return (
		<div class="carousel-home">
			<Carousel slide="false" fade="true">
				<Carousel.Item>
					<img class="home-carousel-image" src="https://images.ctfassets.net/hrltx12pl8hq/3Mz6t2p2yHYqZcIM0ic9E2/3b7037fe8871187415500fb9202608f7/Man-Stock-Photos.jpg" alt="image1" />
					<Carousel.Caption>
						<h3>THIS PRODUCT IS AWESOME</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img class="home-carousel-image" src="https://t4.ftcdn.net/jpg/03/16/76/07/240_F_316760716_osiJBYOn23uy6nEWVHDbToSLhXELMIp0.jpg" alt="image2" />
					<Carousel.Caption>
						<h3>VERY COOL</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default ImageQueue