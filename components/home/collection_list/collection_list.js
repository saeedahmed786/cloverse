import { Button } from "antd"
import { MdKeyboardArrowDown } from "react-icons/md"
import EachList from './eachlist'

const CollectionList = () => {
    const ListCollection = [
        { sno: 1, isred: false, title: '' },
        { sno: 6, isred: true, title: '' },
        { sno: 11, isred: true, title: '' },
        { sno: 2, isred: true, title: '' },
        { sno: 7, isred: true, title: '' },
        { sno: 12, isred: true, title: '' },
        { sno: 3, isred: true, title: '' },
        { sno: 8, isred: true, title: '' },
        { sno: 13, isred: true, title: '' },
        { sno: 4, isred: true, title: '' },
        { sno: 9, isred: true, title: '' },
        { sno: 14, isred: true, title: '' },
        { sno: 5, isred: true, title: '' },
        { sno: 10, isred: true, title: '' },
        { sno: 15, isred: true, title: '' },
    ]

    return (
        <div className="main-comp">
            <div className="title-collection">상위 거래량 차트<span className="color-blue">지난 24시간 <MdKeyboardArrowDown /></span></div>
            <div className="collection-all">
                <div className="collection-three row">
                    {ListCollection.map((val, index) =>
                        <div className="col-md-6 col-sm-6 col-lg-3 w-100">
                            <EachList isred={val.isred} sno={index + 1} key={index} />
                        </div>
                    )}
                </div>
                <div className="center-button home-center"><Button className="blue-back">모든 NFT Collection 보러가기</Button></div>
            </div>
        </div>
    )
}

export default CollectionList