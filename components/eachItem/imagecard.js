import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../themeContext'
import BlueIcon from '../../images/blueicon.png'

const ImageCard = ({ image, sn }) => {

  const theme = useContext(ThemeContext)

  useEffect(() => {
    var propselem = document.getElementById(`_${sn}props-body1`)
    var text1 = document.getElementById(`_${sn}text9`)
    var text2 = document.getElementById(`_${sn}text10`)
    var text3 = document.getElementById(`_${sn}text11`)
    if (theme.color === "white") {
      propselem.classList.add("header-box-black")

      text1.classList.add('color-white')
      text2.classList.remove('black-color-text')
      text2.classList.add('color-white')
      text3.classList.add('color-white')
    } else {
      propselem.classList.remove("header-box-black")
      text1.classList.remove('color-white')
      text2.classList.add('black-color-text')
      text2.classList.remove('color-white')
      text3.classList.remove('color-white')
    }
  }, [theme])

  return (
    <div className="each-card-it" style={{ marginBottom: "5px" }}>
      <Image src={image} width="10px" height="10px" layout="responsive" alt="coat" className="collection-img-it" />
      <div className='all-desc' id={`_${sn}props-body1`}>
        <div className='fontw-700 fonts-16px' id={`_${sn}text9`}>ID 1234</div>
        <div style={{ display: "grid", position: "relative" }}>
          <div className='fonts-12 fontw-200' id={`_${sn}text10`}>직전가</div>
          <div className='right0 fonts-14 fontw-700' id={`_${sn}text11`}>
            <Image width="16px" height="16px" src={BlueIcon} alt="blue-icon" style={{ display: "inline-block" }} />  1202
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCard