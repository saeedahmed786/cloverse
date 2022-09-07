import { MdFavorite, MdRemoveRedEye } from 'react-icons/md'
import { Button } from 'antd'
import BlackCoat from '../images/blackcoat.png'
import Description from '../components/eachItem/description'
import DesignerProfile from '../components/eachItem/designerdetail'
import MoreInCollection from '../components/eachItem/morecollection'
import NFTDetail from '../components/eachItem/nftdetail'
import Offers from '../components/eachItem/offers'
import Properties from '../components/eachItem/properties'
import BlueIcon from '../images/blueicon.png'
import Image from 'next/image'

const EachItem = () => {

   const LeftContent = () => {
      return (
         <div className="left-grid">
            <div className="fontw-700 fonts-30" id="eachtopic">ID 1234</div>
            <div className="grey-dark" style={{ display: "flex", marginTop: "13px" }}>
               <div className='marginright fonts-16 grey-dark fontw-500'>Owned by <span className="color-blue">SDfsf...43sf</span></div>
               <div className='marginright fonts-16 grey-dark fontw-500'><MdRemoveRedEye size={15} /> 102 views</div>
               <div className='marginright fonts-16 grey-dark fontw-500'><MdFavorite size={15} /> 5 favorites</div>
            </div>
            <DesignerProfile />
            <Description />
            <Properties />
            <Offers />
         </div>
      )
   }

   return (
      <div className="collection-all main-comp" style={{ marginTop: "100px" }}>
         <div className="upper-grid row">
            <div className='col-lg-8'>
               <LeftContent />
            </div>
            <div className='col-lg-4'>
               <div className="right-grid">
                  <Image src={BlackCoat} width="10px" height="10px" layout="responsive" alt="profile" className='img-big' />
                  <div className='grey-border-box mt-2' id="grey-body">
                     <div className='borderbottom'>
                        <div className='padding10'>
                           <div className='grey-dark fonts-16 fontw-500'>판매 종료</div>
                           <div className='fonts-20 fontw-700' id='text5'>179일 23시간</div>
                        </div>
                     </div>
                     <div className='borderbottom'>
                        <div className='padding10 gridrow'>
                           <div>
                              <div className='grey-dark fonts-16 fontw-500'>직전 거래가</div>
                              <div className='fonts-30 fontw-700 d-flex align-items-center gap-1' id='text6'>
                                 <Image width="28px" height="28px" src={BlueIcon} alt="blue icon" style={{ display: "inline-block" }} size={30} />
                                 <span>1,234</span>
                              </div>
                           </div>
                           <div>
                              <div className='grey-dark fonts-16 fontw-500'>최고 제안가</div>
                              <div className='fonts-30 fontw-700 d-flex align-items-center gap-1' id='text6'>
                                 <Image width="28px" height="28px" src={BlueIcon} alt="blue icon" style={{ display: "inline-block" }} size={30} />
                                 <span>1,234</span>
                              </div>
                           </div>
                        </div>

                     </div>
                     <div className='padding10'>
                        <div className='grey-dark fonts-16 fontw-500'>판매가</div>
                        <div className='fonts-30 fontw-700' id='text8'> <Image width="28px" height="28px" src={BlueIcon} alt="blue icon" style={{ display: "inline-block" }} size={30} />1,234</div>
                        <br />
                        <div className='gridrow2'>
                           <Button className='_0marginbtn blue-back'>구매하기</Button>
                           <Button className='blue-border-2 _0marginbtn'>제안하기</Button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='lower-data'>
            <NFTDetail />
            <MoreInCollection image={BlackCoat} />
            <br />
            <div className='center-button'>
               <Button className="paddingright60" id="view-button">View Collection</Button>
            </div>
         </div>
      </div >
   )
}

export default EachItem