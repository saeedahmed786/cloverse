import ProfileImg from '../../../images/profile.png'
import BlueIcon from '../../../images/blueicon.png'
import Image from 'next/image'

const EachList = ({ sno, isred }) => {

  return (
    <div className="each-list w-100">
      <div className="component">
        <div className='fontw-700 fonts-16' style={{ paddingTop: "28px", textAlign: "center" }}>{sno}</div>
        <div className='mx-2'>
          <Image src={ProfileImg} width="60px" height="60px" layout="responsive" alt="profile" className='profile-img' />
        </div>
        <div>
          <div className='fontw-700 fonts-12'>Collection title</div>
          <div>
            <span className='fonts-12 fontw-500' style={{ color: "#757575" }}>최저 거래가: </span>
            <span className='fonts-14 fontw-700 d-flex gap-1' style={{ color: "#757575" }}>
              <Image src={BlueIcon} width="19px" height="19px" alt="blue-icon" className="fonts-16" />
              <span>
                16,58
              </span>
            </span>
          </div>
        </div>
        <div>
          <div className='right1-2 fontw-500 fonts-14' style={{ color: `${isred ? "#ee5350" : "green"}` }}>{isred ? "-" : "+"}83.90%</div>
          <div className='right2-2 d-flex align-items-center gap-1'>
            <Image src={BlueIcon} width="19px" height="19px" alt="blue-icon" className="fonts-16" />
            <span>133,070</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EachList