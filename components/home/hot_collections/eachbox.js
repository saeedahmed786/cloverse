import Image from "next/image";
import { MdVerified } from "react-icons/md";

const EachBox = ({ image, title, brandimg, brandname }) => {
    return (
        <div className="each-card" style={{ marginRight: "20px" }}>
            <Image src={image} width="10px" height="10px" layout="responsive" alt="collection" className="collection-img" />
            <div style={{ display: "flex", marginTop: "10px" }} className="all-desc">
                <Image src={brandimg} width="10px" height="10px" layout="responsive" alt="brandimg" className='brand-img' />
                <div className='brand-desc'>
                    <div className='fonts-20 fontw-700'>{title}</div>
                    <span className='brand-name grey-text'>by {brandname} <MdVerified style={{ color: "blue" }} /></span>
                </div>
            </div>
        </div>
    )
}

export default EachBox