import Image from 'next/image'
import BlueIcon from '../../../images/blueicon.png'

const EachBox = ({ image, title, brandimg, brandname, number1, number2, number3, number4 }) => {
    return (
        <div className="each-card-it">
            <Image src={image} width="10px" height="10px" layout="responsive" alt="collection" className="collection-img-it" />
            <div style={{ marginTop: "10px" }}>
                <div className='all-desc'>
                    <div style={{ display: "flex", marginTop: "10px" }}>
                        <Image src={brandimg} width="10px" height="10px" layout="responsive" alt="brandimg" className='brand-img-fd' />
                        <div className='brand-desc'>
                            <div className='fonts-16 fontw-700'>{title}</div>
                            <small className='fonts-14 fontw-200'>by {brandname}</small>
                        </div>
                    </div>
                    <div className='collec-number'>
                        <div className='left-it fonts-12 fontw-200'>
                            <div>{number1}</div>
                            <div>{number2}</div>
                        </div>
                        <div className='right-it'>
                            <div className='right1 fontw-700 fonts-14 d-flex align-items-center gap-1'>
                                <Image src={BlueIcon} width="23px" height="23px" alt="blue-icon" style={{ display: "inline-block" }} className="" />
                                <span>
                                    {number3}
                                </span>
                            </div>
                            <div className='right2 fontw-700 fonts-14'>{number4}</div>
                        </div>
                    </div>
                    <div className='color-blue fonts-12 fontw-200' style={{ paddingTop: "5px" }}>
                        1시간 전 거래됨
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EachBox