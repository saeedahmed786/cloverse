import EachBox from "./eachbox"
import Shoes1 from '../../../images/shoes4.png'
import PinkDress from '../../../images/pinkdress.png'
import Shoes2 from '../../../images/shoes5.png'
import Hoodie from '../../../images/yellowhoodie.png'
import Gloves from '../../../images/gloves.png'
import Profile from '../../../images/profilefd.png'
import Slider from "react-slick"

const FDCollections = () => {
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
            <div className="title-collection">24시간 최다 거래 FD Collections</div>

            <div className="collection-all">

                <Slider {...settings}>
                    <EachBox image={Shoes1} title="Collection title" brandname="Brand name" brandimg={Profile} number1="아이템" number2="직전가" number3="0.019" number4="3회" />
                    <EachBox image={Shoes2} title="Collection title" brandname="Brand name" brandimg={Profile} number1="아이템" number2="직전가" number3="0.019" number4="3회" />
                    <EachBox image={PinkDress} title="Collection title" brandname="Brand name" brandimg={Profile} number1="아이템" number2="직전가" number3="0.019" number4="3회" />
                    <EachBox image={Hoodie} title="Collection title" brandname="Brand name" brandimg={Profile} number1="아이템" number2="직전가" number3="0.019" number4="3회" />
                    <EachBox image={Gloves} title="Collection title" brandname="Brand name" brandimg={Profile} number1="아이템" number2="직전가" number3="0.019" number4="3회" />
                    <EachBox image={Shoes1} title="Collection title" brandname="Brand name" brandimg={Profile} number1="아이템" number2="직전가" number3="0.019" number4="3회" />
                    <EachBox image={Shoes2} title="Collection title" brandname="Brand name" brandimg={Profile} number1="아이템" number2="직전가" number3="0.019" number4="3회" />
                    <EachBox image={PinkDress} title="Collection title" brandname="Brand name" brandimg={Profile} number1="아이템" number2="직전가" number3="0.019" number4="3회" />
                    <EachBox image={Hoodie} title="Collection title" brandname="Brand name" brandimg={Profile} number1="아이템" number2="직전가" number3="0.019" number4="3회" />
                    <EachBox image={Gloves} title="Collection title" brandname="Brand name" brandimg={Profile} number1="아이템" number2="직전가" number3="0.019" number4="3회" />
                </Slider>
            </div>

        </div>
    )
}

export default FDCollections