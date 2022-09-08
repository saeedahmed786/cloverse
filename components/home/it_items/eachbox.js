import Image from 'next/image'
import BlueIcon from '../../../images/blueicon.png'

const EachBox = ({ image, title, brandimg, brandname }) => {
    return (
        <div className="each-card-it">
            <Image src={image} width="10px" height="10px" layout="responsive" alt="collection" className="collection-img-it" />
            <div style={{ marginTop: "10px" }}>
                <div className='all-desc'>
                    <a className='text-dark' href="/detail">
                        <div className='fonts-16 fontw-700'>{title}</div>
                    </a>
                    <div className='collec-number'>
                        <div className='left-it'>
                            <div className='fonts-12 fonw-200'>아이템</div>
                            <div className='fonts-12 fontw-200'>직전가</div>
                        </div>
                        <div className='right-it'>
                            <div className='right1 fontw-700 fonts-14'>#1202</div>
                            <div className='right2 fontw-700 fonts-14' style={{ display: "flex", gap: "6px" }}>
                                <Image src={BlueIcon} width="19px" height="15px" alt="blue-icon" className="fonts-12" />
                                <span>0.019</span>
                            </div>
                        </div>
                    </div>
                    <div className='color-blue fonts-12 fontw-500' style={{ paddingTop: "5px" }}>
                        1시간 전 거래됨
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachBox