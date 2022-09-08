import ProfileImg from '../../images/profile.png'
import { MdVerified } from 'react-icons/md'
import { RiKakaoTalkFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri'
import { SiDiscord } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../themeContext'
import BlueIcon from '../../images/blueicon.png'
import Image from 'next/image'

const DesignerProfile = () => {

    const theme = useContext(ThemeContext)


    // useEffect(() => {
    //     var headerbodyelem = document.getElementById("header-body1")
    //     var headerheadelem = document.getElementById("header-head1")
    //     var text1 = document.getElementById("text1")
    //     var text2 = document.getElementById("text2")
    //     var text3 = document.getElementById("text3")
    //     var text4 = document.getElementById("text4")
    //     if (theme.color === "white") {
    //         headerbodyelem.classList.add("header-box-black")
    //         headerheadelem.classList.add("header-head-black")
    //         text1.classList.remove('black-color-text')
    //         text1.classList.add('color-white')
    //         text2.classList.remove('black-color-text')
    //         text2.classList.add('color-white')
    //         text3.classList.remove('black-color-text')
    //         text3.classList.add('color-white')
    //         text4.classList.remove('black-color-text')
    //         text4.classList.add('color-white')
    //     } else {
    //         headerbodyelem.classList.remove("header-box-black")
    //         headerheadelem.classList.remove("header-head-black")
    //         text1.classList.add('black-color-text')
    //         text1.classList.remove('color-white')
    //         text2.classList.add('black-color-text')
    //         text2.classList.remove('color-white')
    //         text3.classList.add('black-color-text')
    //         text3.classList.remove('color-white')
    //         text4.classList.add('black-color-text')
    //         text4.classList.remove('color-white')
    //     }
    // }, [theme])

    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id='header-head1' style={{ border: "0.5px solid #BDBDBD", height: "66px", padding: "12px" }}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Collapse2" aria-expanded="true" aria-controls="Collapse2">
                        <Image width="47" height="47" src={ProfileImg} alt="profile" className='brand-img' />
                        <div className='color-blue marginright16 mx-2'>Designer name <MdVerified size={23} /></div>
                    </button>
                </h2>
                <div id="Collapse2" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body black-color-text" style={{ backgroundColor: "#FBFBFB" }}>
                        <div style={{ display: "flex", marginBottom: "47px", gap: "15px" }}>
                            <div>
                                <div className="grey-text fontw-500 fonts-16">아이템</div>
                                <div className="fontw-700 fonts-20 black-color-text" id="text1">1K</div>
                            </div>
                            <div>
                                <div className="grey-text fontw-500 fonts-16">소유자</div>
                                <div className="fontw-700 fonts-20 black-color-text" id="text2">561</div>
                            </div>
                            <div>
                                <div className="grey-text fontw-500 fonts-16">최저 거래가</div>
                                <div className="fontw-700 fonts-20 black-color-text d-flex gap-1 align-items-center" id="text3">
                                    <Image width="25px" height="25px" src={BlueIcon} alt="blue-icon" style={{ display: "inline-block" }} className="fonts-12" />
                                    <span>1,366</span>
                                </div>
                            </div>
                            <div>
                                <div className="grey-text fontw-500 fonts-16">거래량</div>
                                <div className="fontw-700 fonts-20 black-color-text d-flex gap-1 align-items-center" id='text4'>
                                    <Image width="25px" height="25px" src={BlueIcon} alt="blue-icon" style={{ display: "inline-block" }} className="fonts-12" />
                                    <span>2,566</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="#"><TbWorld className="marginright32 grey-dark" size={20} /></a>
                            <a href="#"><FaTelegramPlane className="marginright32 grey-dark" size={20} /></a>
                            <a href="#"><RiInstagramFill className="marginright32 grey-dark" size={20} /></a>
                            <a href="#"><SiDiscord className="marginright32 grey-dark" size={20} /></a>
                            <a href="#"><RiTwitterFill className="marginright32 grey-dark" size={20} /></a>
                            <a href="#"><RiKakaoTalkFill className="marginright32 grey-dark" size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignerProfile