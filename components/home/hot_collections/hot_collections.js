import EachBox from "./eachbox"
import Shoes1 from '/images/shoes1.png'
import TShirt from '/images/tshirt1.png'
import Bag from '/images/bag.png'
import profile1 from '/images/profile1.png'
import profile2 from '/images/eight.png'
import profile3 from '/images/profile3.png'
import Slider from 'react-slick'

const HotCollection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="main-comp">
      <div className="title-collection">HOT Collections</div>

      <div className="collection-all" style={{ position: "relative" }}>

        <Slider {...settings}>
          <EachBox image={Shoes1} title="Collection title" brandname="Brand name" brandimg={profile1} />
          <EachBox image={TShirt} title="Collection title" brandname="Brand name" brandimg={profile2} />
          <EachBox image={Bag} title="Collection title" brandname="Brand name" brandimg={profile3} />
          <EachBox image={Shoes1} title="Collection title" brandname="Brand name" brandimg={profile1} />
          <EachBox image={TShirt} title="Collection title" brandname="Brand name" brandimg={profile2} />
          <EachBox image={Bag} title="Collection title" brandname="Brand name" brandimg={profile3} />
        </Slider>
      </div>
    </div>
  )
}

export default HotCollection