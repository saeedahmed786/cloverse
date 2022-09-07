import EachBox from "./eachbox"
import Shoes1 from '../../../images/shoes2.png'
import Blazer from '../../../images/blazer.png'
import Shoes2 from '../../../images/shoes3.png'
import Handbag from '../../../images/handbag.png'
import BlackCoat from '../../../images/blackcoat.png'
import Slider from 'react-slick'

const ITItems = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }

    return (
        <div className="main-comp">
            <div className="title-collection">It items</div>

            <div className="collection-all">
                <Slider {...settings}>
                    <EachBox image={Shoes1} title="Collection title" brandname="Brand name" brandimg={Shoes1} />
                    <EachBox image={Blazer} title="Collection title" brandname="Brand name" brandimg={Shoes1} />
                    <EachBox image={Shoes2} title="Collection title" brandname="Brand name" brandimg={Shoes1} />
                    <EachBox image={Handbag} title="Collection title" brandname="Brand name" brandimg={Shoes1} />
                    <EachBox image={BlackCoat} title="Collection title" brandname="Brand name" brandimg={Shoes1} />
                    <EachBox image={Shoes2} title="Collection title" brandname="Brand name" brandimg={Shoes1} />
                    <EachBox image={Handbag} title="Collection title" brandname="Brand name" brandimg={Shoes1} />
                    <EachBox image={BlackCoat} title="Collection title" brandname="Brand name" brandimg={Shoes1} />
                </Slider>
            </div>

        </div>
    )
}

export default ITItems