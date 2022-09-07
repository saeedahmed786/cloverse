import EachBox from "./eachbox"
import BG from '../../../images/bg4.png'
import Profile from '../../../images/profilefd2.png'
import Slider from "react-slick/";

const FDCollections2 = () => {
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
            <div className="title-collection">최근 추가된 FD Collections</div>

            <div className="collection-all">
                <Slider {...settings}>
                    <EachBox image={BG} title="Collection title" brandname="Brand name" brandimg={Profile} number1="최저 거래가" number2="" number3="0.019" number4="" />
                    <EachBox image={BG} title="Collection title" brandname="Brand name" brandimg={Profile} number1="최저 거래가" number2="" number3="0.019" number4="" />
                    <EachBox image={BG} title="Collection title" brandname="Brand name" brandimg={Profile} number1="최저 거래가" number2="" number3="0.019" number4="" />
                    <EachBox image={BG} title="Collection title" brandname="Brand name" brandimg={Profile} number1="최저 거래가" number2="" number3="0.019" number4="" />
                    <EachBox image={BG} title="Collection title" brandname="Brand name" brandimg={Profile} number1="최저 거래가" number2="" number3="0.019" number4="" />
                    <EachBox image={BG} title="Collection title" brandname="Brand name" brandimg={Profile} number1="최저 거래가" number2="" number3="0.019" number4="" />
                    <EachBox image={BG} title="Collection title" brandname="Brand name" brandimg={Profile} number1="최저 거래가" number2="" number3="0.019" number4="" />
                    <EachBox image={BG} title="Collection title" brandname="Brand name" brandimg={Profile} number1="최저 거래가" number2="" number3="0.019" number4="" />
                </Slider>
            </div>

        </div>
    )
}

export default FDCollections2