import Carousel from 'react-bootstrap/Carousel';

const ImageQueue = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<Carousel.Caption>
				<h3>Site Name Here</h3>
				<p>
					little description
				</p>
				</Carousel.Caption>
				<img src="https://images.ctfassets.net/hrltx12pl8hq/3Mz6t2p2yHYqZcIM0ic9E2/3b7037fe8871187415500fb9202608f7/Man-Stock-Photos.jpg" alt="image1" />
			</Carousel.Item>
			<Carousel.Item>
				<img src="https://images.ctfassets.net/hrltx12pl8hq/3Mz6t2p2yHYqZcIM0ic9E2/3b7037fe8871187415500fb9202608f7/Man-Stock-Photos.jpg" alt="image2" />
				<Carousel.Caption>
				<h3>About Us</h3>
				<p>
					little description
				</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default ImageQueue