
import { Button } from 'antd'
import { BsThreeDots } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'
import BlueIcon from '../../images/blueicon.png'
import { ThemeContext } from "../themeContext"
import { useContext, useEffect } from 'react'
import Image from 'next/image'

const EachBox = ({ image, title, brandimg, brandname, number1, number2, number3, number4, number5, number6, id }) => {

  const theme = useContext(ThemeContext)

  useEffect(() => {

    var leftelem = document.getElementById(`left-button${id}`)
    var rightelem = document.getElementById(`right-button${id}`)
    var favelem = document.getElementById(`fav-icon${id}`)
    var noradelem = document.getElementById(`noradius${id}`)

    if (theme.color === "white") {
      leftelem.classList.add('blue-back')
      rightelem.classList.add('blue-back')
      leftelem.classList.remove('blue-border-half')
      rightelem.classList.remove('blue-border-half')

      favelem.classList.add('fav-icon-black')
      favelem.classList.remove('fav-icon')
      noradelem.classList.add('black-back-noradius')
      noradelem.classList.remove('grey-back-noradius')
    } else {
      leftelem.classList.remove('blue-back')
      rightelem.classList.remove('blue-back')
      leftelem.classList.add('blue-border-half')
      rightelem.classList.add('blue-border-half')
      favelem.classList.remove('fav-icon-black')
      favelem.classList.add('fav-icon')
      noradelem.classList.remove('black-back-noradius')
      noradelem.classList.add('grey-back-noradius')
    }
  }, [theme])

  return (
    <div className='each-card-it' >
      <Image width="10px" height="10px" layout="responsive" src={image} alt="collection" className="collection-img-it" />
      <div className='all-desc'>
        <div style={{ display: "grid", position: "relative" }}>
          <div className='fontw-700 fonts-16' style={{ color: `${theme.color}` }}>ID 1234</div>
          <div className='right0'>
            <BsThreeDots style={{ color: "#757575" }} />
          </div>

        </div>
        <div style={{ display: "flex" }}>
          <Button className='_0marginbtn _5hor' id={`left-button${id}`}>#윈터</Button ><Button className='_9marginbtn _5hor' id={`right-button${id}`}>#코트</Button>
        </div>

        <div className='fontw-500 fonts-20' style={{ margin: "5px 0", color: `${theme.color}` }}><Image width="16px" height="16px" src={BlueIcon} alt="blueicon" style={{ display: 'inline-block' }} /> 0.019</div>


      </div>
      <div style={{ display: "flex" }}>
        <div className='fav-icon' id={`fav-icon${id}`}>
          <MdFavoriteBorder size={20} style={{ color: "#757575" }} />
        </div>
        <Button className='grey-back-noradius _0marginbtn _30hor' id={`noradius${id}`}>구매하기</Button>
      </div>
    </div>
  )
}

export default EachBox