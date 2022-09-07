import EachBox from "../components/fdCollections/eachbox"
import Shoes1 from '../images/shoes3.png'
import PinkDress from '../images/pinkdress2.png'
import Hoodie from '../images/yellowhoodie.png'
import TShirt from '../images/tshirt1.png'
import BlackCoat from '../images/blackcoat.png'
import Link from "next/link"

const FDCollectionsComponent = () => {
    return (
        <div className="main-comp" style={{paddingBottom:"40px"}}>
            <div className="_40-title" style={{marginTop:"50px"}}> 전체 FD Collections</div>
           
        <div className="collection-all">
            <div className="collection-five">
           <Link href='/fdCollections/1/'><EachBox image={Shoes1} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#서머" number6=""/></Link>
           <EachBox image={PinkDress} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#원피스" number6="#서머"/>
           <EachBox image={TShirt} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#니트" number6=""/>
           <EachBox image={Hoodie} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#후드" number6=""/>
           <EachBox image={BlackCoat} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#윈터" number6=""/>
           <EachBox image={Shoes1} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#서머" number6=""/>
           <EachBox image={PinkDress} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#원피스" number6="#서머"/>
           <EachBox image={TShirt} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#니트" number6=""/>
           <EachBox image={Hoodie} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#후드" number6=""/>
           <EachBox image={BlackCoat} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#윈터" number6=""/>
           <EachBox image={Shoes1} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#서머" number6=""/>
           <EachBox image={PinkDress} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#원피스" number6="#서머"/>
           <EachBox image={TShirt} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#니트" number6=""/>
           <EachBox image={Hoodie} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#후드" number6=""/>
           <EachBox image={BlackCoat} title="Collection title" brandname="Brand name" brandimg={Shoes1} number1="수량" number2="최저 거래가" number3="123개" number4="0.019" number5="#윈터" number6=""/>
           </div>
        </div>
        
        </div>
    )
}

export default FDCollectionsComponent