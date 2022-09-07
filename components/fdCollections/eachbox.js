import { Button } from 'antd'
import BlueIcon from '../../images/blueicon.png'
import { useContext } from 'react'
import { ThemeContext } from '../themeContext'
import Image from 'next/image'

const EachBox = ({ image, title, brandimg, brandname, number1, number2, number3, number4, number5, number6 }) => {

    const theme = useContext(ThemeContext)

    return (
        <div className="each-card-it">
            <Image width="10px" height="10px" layout="responsive" src={image} alt="collection" className="collection-img-it" />

            <div className='all-desc' style={{ color: `${theme.color}` }} >
                <div style={{ display: "flex", marginTop: "10px", gap: "6px", alignItems: "center" }}>
                    <Image width="41px" height="41" src={brandimg} alt="brandimg" className='brand-img-fd rounded-circle' />
                    <div className='brand-desc'>
                        <div className='fonts-14 fontw-700'>{title}</div>
                        <span className='fonts-14 fontw-200'>{brandname}</span>
                    </div>
                </div>
                <div className='collec-number'>
                    <div className='left-it fonts-12 fontw-200'>
                        <div>{number1}</div>
                        <div>{number2}</div>
                    </div>
                    <div className='right-it'>
                        <div className='right1 fontw-700 fonts-14'>{number3}</div>
                        <div className='right2 fontw-700 fonts-14'><Image width="16px" height="16px" src={BlueIcon} alt="blue-icon" style={{ display: "inline-block" }} className="fonts-12" />{number4}</div>
                    </div>
                </div>
                <div style={{ marginTop: "5px", display: "flex" }}>
                    <Button className='blue-border paddingless _0marginbtn cbtn-text'>{number5}</Button >{number6 !== "" ? <Button className='blue-border paddingless _0marginbtn cbtn-text'>{number6}</Button> : ""}
                </div>
            </div>
        </div>
    )
}

export default EachBox