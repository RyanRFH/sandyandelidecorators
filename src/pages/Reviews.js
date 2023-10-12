import '../styling/Reviews.css'
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"

const Reviews = () => {

    window.scrollTo(0, 0)

    return (
        <div id="reviewsWrapper">

            <Carousel interval={null} variant='dark' className='carouselReviews'>
                <Carousel.Item>
                    <div className='reviewWrap'>
                        <div className='reviewContainer'>
                            <p className='reviewContent'>"Very good decorators, friendy, nothings too much trouble, mother & daughter team. Very reasonable prices, double the quickness being a pair. Highly recommended 😊"</p>
                            <p className='reviewName'>Lynn James</p>
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <div className='reviewWrap'>
                        <div className='reviewContainer'>
                            <p className='reviewContent'>"You have both done the most amazing job transforming what was a very run down shabby and neglected bungalow into my beautiful new home, you've worked so hard and I can't thank you enough!"</p>
                            <p className='reviewName'>Anne Shaw</p>
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <div className='reviewWrap'>
                        <div className='reviewContainer'>
                            <p className='reviewContent'>"Excellent decorators have carried out work for us on two occasions. Punctual, great communication and a high standard of work. Would highly recommend"</p>
                            <p className='reviewName'>Ginge Davies</p>
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>

                    <div className='reviewWrap'>
                        <div className='reviewContainer'>
                            <p className='reviewContent'>"Thanks to Sandy & Eli for painting full downstairs, very efficient and reasonably priced. Highly recommend if your looking for someone to come in and just get the job done without any hassle"</p>
                            <p className='reviewName'>Ash Seed</p>
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <div className='reviewWrap'>
                        <div className='reviewContainer'>
                            <p className='reviewContent'>"Thanks Sandy and Eli, great job, really pleased with how it turned out"</p>
                            <p className='reviewName'>Patricia Schofield</p>
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <div className='reviewWrap'>
                        <div className='reviewContainer'>
                            <p className='reviewContent'>"Thanks both, great job as always x"</p>
                            <p className='reviewName'>Samantha Jane</p>
                        </div>
                    </div>

                </Carousel.Item>

            </Carousel>

        </div>
    )
}

export default Reviews