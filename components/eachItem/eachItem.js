import { MdFavorite, MdRemoveRedEye } from 'react-icons/md'
import { Button } from 'antd'
import BlackCoat from '../../images/blackcoat.png'
import Description from './description'
import DesignerProfile from './designerdetail'
import MoreInCollection from './morecollection'
import NFTDetail from './nftdetail'
import Offers from './offers'
import Properties from './properties'
import { Fragment, useContext, useEffect } from 'react'
import { ThemeContext } from '../themeContext'
import BlueIcon from '../../images/blueicon.png'
import useWindowsDimensions from '../windowdimension'

const EachItem = () => {

   const theme = useContext(ThemeContext)
   const { width } = useWindowsDimensions()

   useEffect(() => {
      var headerbodyelem = document.getElementById("grey-body")
      var topic = document.getElementById("eachtopic")
      var text1 = document.getElementById("text5")
      var text2 = document.getElementById("text6")
      var text3 = document.getElementById("text7")
      var text4 = document.getElementById("text8")
      var btn = document.getElementById("view-button")
      if (theme.color === "white") {
         headerbodyelem.classList.add("header-box-black")
         topic.classList.add('color-white')
         topic.classList.remove('black-color-text')
         text1.classList.remove('black-color-text')
         text1.classList.add('color-white')
         text2.classList.remove('black-color-text')
         text2.classList.add('color-white')
         text3.classList.remove('black-color-text')
         text3.classList.add('color-white')
         text4.classList.remove('black-color-text')
         text4.classList.add('color-white')
         btn.classList.add('black-back-btn')
         btn.classList.remove('blue-border-2')
      } else {
         headerbodyelem.classList.remove("header-box-black")
         topic.classList.remove('color-white')
         topic.classList.add('black-color-text')
         text1.classList.add('black-color-text')
         text1.classList.remove('color-white')
         text2.classList.add('black-color-text')
         text2.classList.remove('color-white')
         text3.classList.add('black-color-text')
         text3.classList.remove('color-white')
         text4.classList.add('black-color-text')
         text4.classList.remove('color-white')
         btn.classList.remove('black-back-btn')
         btn.classList.add('blue-border-2')
      }
   }, [theme])

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
         <div className="upper-grid">
            {width > 850 ? <Fragment>
               <LeftContent />
               <div className="right-grid">
                  <Image src={BlackCoat} alt="profile" className='img-big' />
                  <div className='grey-border-box' id="grey-body">
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
                              <div className='fonts-30 fontw-700' id='text6'><img src={BlueIcon} alt="blue icon" style={{ display: "inline-block" }} size={30} />1,234</div>
                           </div>
                           <div>
                              <div className='grey-dark fonts-16 fontw-500'>최고 제안가</div>
                              <div className='fonts-30 fontw-700' id='text7'><img src={BlueIcon} alt="blue icon" style={{ display: "inline-block" }} size={30} />1,234</div>
                           </div>
                        </div>

                     </div>
                     <div className='padding10'>

                        <div className='grey-dark fonts-16 fontw-500'>판매가</div>
                        <div className='fonts-30 fontw-700' id='text8'> <img src={BlueIcon} alt="blue icon" style={{ display: "inline-block" }} size={30} />1,234</div>
                        <br />
                        <div className='gridrow2'>
                           <Button className='_0marginbtn blue-back'>구매하기</Button>
                           <Button className='blue-border-2 _0marginbtn'>제안하기</Button>
                        </div>
                     </div>
                  </div>
               </div></Fragment> :
               <Fragment>
                  <div className="right-grid">
                     <img src={BlackCoat} alt="profile" className='img-big' />
                     <div className='grey-border-box' id="grey-body">
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
                                 <div className='fonts-30 fontw-700' id='text6'><img src={BlueIcon} alt="blue icon" style={{ display: "inline-block" }} size={30} />1,234</div>
                              </div>
                              <div>
                                 <div className='grey-dark fonts-16 fontw-500'>최고 제안가</div>
                                 <div className='fonts-30 fontw-700' id='text7'><img src={BlueIcon} alt="blue icon" style={{ display: "inline-block" }} size={30} />1,234</div>
                              </div>
                           </div>

                        </div>
                        <div className='padding10'>

                           <div className='grey-dark fonts-16 fontw-500'>판매가</div>
                           <div className='fonts-30 fontw-700' id='text8'> <img src={BlueIcon} alt="blue icon" style={{ display: "inline-block" }} size={30} />1,234</div>
                           <br />
                           <Button className=' blue-back marginbottom10' style={{ display: "block", width: "60%" }}>구매하기</Button>
                           <Button className='blue-border-2 ' style={{ width: "60%" }}>제안하기</Button>

                        </div>
                     </div>
                  </div>
                  <LeftContent />
               </Fragment>}
         </div>
         <div className='lower-data'>
            <NFTDetail />
            <MoreInCollection image={BlackCoat} />
            <br />
            <div className='center-button'>
               <Button className="paddingright60" id="view-button">View Collection</Button>
            </div>
         </div>
      </div>
   )
}

export default EachItem