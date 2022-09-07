import { Button } from 'antd'
import { Fragment } from 'react'
import BannerComponent from '../components/home/banner/banner'
import CollectionList from '../components/home/collection_list/collection_list'
import FDCollections from '../components/home/fd_collections/fd_items'
import FDCollections2 from '../components/home/fd_collections/fd_items2'
import FooterComponent from '../components/home/footer/footer'
import HotCollection from '../components/home/hot_collections/hot_collections'
import ITItems from '../components/home/it_items/it_items'
import Slider from 'react-slick'


const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div>
      <Slider {...settings} className="home">
        <div className="main-component">
          <div className='title' style={{ color: "white" }}>Collect fashion NFTs that fit you perfectly</div>
          <div className='desc'>
            <p style={{ color: "white" }}>
              패션 디자인을 NFT로 구매하고
            </p>
            <p style={{ color: "white" }}>
              나에게 꼭 맞는 옷으로 배송 받아 보세요
            </p>
          </div>
          <div className='button'>
            <Button className='blue-back marginbottom10' >NFT 둘러보기</Button>
            <Button className='blue-text-btn marginbottom10'>입점 문의하기</Button>
          </div>
        </div>
        <div className='main-component2'>

        </div>
        <div className='main-component3'>

        </div>
      </Slider>
      <HotCollection />
      <BannerComponent />
      <ITItems />
      <FDCollections />
      <FDCollections2 />
      <CollectionList />
      <FooterComponent />
    </div>
  )
}

export default Home