import { BsThreeDots } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'
import { ThemeContext } from "../themeContext"
import { useContext } from 'react'
import Image from 'next/image'

const EachBox = ({ image, title, brandimg, brandname, number1, number2, number3, number4, number5, number6 }) => {

    const theme = useContext(ThemeContext)

    return (
        <div className='each-card-it'>
            <Image width="10px" height="10px" layout="responsive" src={image} alt="collection" className="collection-img-it" />
            <div className='desc-collec'>
                <div style={{ display: "grid", position: "relative" }}>
                    <div className='fontw-700 fonts-16' style={{ color: `${theme.color}` }}>Collection title</div>
                    <div className='right0'>
                        <BsThreeDots className='grey-dark' />
                    </div>
                </div>
                <div className='grey-dark fonts-16 fontw-500'>By Name</div>
                <div style={{ display: "flex", margin: "10px 0", position: "relative" }}>
                    <div className='fontw-700 fonts-20' style={{ color: `${theme.color}` }}>ID 1234</div>
                    <MdFavoriteBorder size={20} className="right0 grey-dark" />
                </div>

            </div>
        </div>
    )
}

export default EachBox