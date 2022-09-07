import { Button } from 'antd'

const BannerComponent = () => {
    return (
        <div className="main-comp">
          <div className='banner collection-all'>
            <div className='banner-left'>
                <div>
                수수료 걱정없는 거래는
                </div>
                <div>
                    CLOVERS
                </div>
            </div>
            <div className='banner-right'>
                <Button className='blue-back largepad cbtn-text height48'>NFT 둘러보기</Button>
            </div>
          </div>
        </div>
    )
}

export default BannerComponent