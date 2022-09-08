import { Fragment, useState, useContext, useEffect } from "react";
import { MdKeyboardArrowDown, MdVerified } from "react-icons/md";
import { RiKakaoTalkFill, RiTwitterFill, RiShareFill, RiInstagramFill } from 'react-icons/ri'
import { SiDiscord } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { Dropdown, Input, Button, Menu, Space } from 'antd'
import { BsListUl, BsGridFill, BsFillGrid3X3GapFill } from 'react-icons/bs'
import ProfileImg from '../images/profile.png'
import GridView from "../components/fdCollectionDetail/collection_grid";
import ListView from "../components/fdCollectionDetail/collection_list";
import { Tab, Tabs } from "react-bootstrap";
import BlueIcon from '../images/blueicon.png'
import { SearchOutlined } from '@ant-design/icons';
import { ThemeContext } from "../components/themeContext";
import Link from "next/link";
import Image from "next/image";

const CollectionDetail = () => {
    const [isList, setIsList] = useState(true)
    const theme = useContext(ThemeContext)
    const handleMenuClick = () => {
        console.log("Clicked")
    }

    var elem1 = typeof window !== "undefined" && document.getElementById("list")
    var elem2 = typeof window !== "undefined" && document.getElementById("grid")


    useEffect(() => {
        var btn1 = document.getElementById('btn1')
        var btn2 = document.getElementById('btn2')
        var btn3 = document.getElementById('btn3')
        var btn4 = document.getElementById('btn4')
        var tab1 = document.getElementsByClassName('nav-link')
        console.log(tab1)
        if (theme.color === 'white') {
            btn1.classList.add('blue-back')
            btn1.classList.remove('blue-border')
            btn2.classList.add('blue-back')
            btn2.classList.remove('blue-border')
            btn3.classList.add('blue-back')
            btn3.classList.remove('blue-border')
            btn4.classList.add('blue-back')
            btn4.classList.remove('blue-border')

        } else {
            btn1.classList.remove('blue-back')
            btn1.classList.add('blue-border')
            btn2.classList.remove('blue-back')
            btn2.classList.add('blue-border')
            btn3.classList.remove('blue-back')
            btn3.classList.add('blue-border')
            btn4.classList.remove('blue-back')
            btn4.classList.add('blue-border')
        }
    }, [theme])

    const listClicked = () => {
        setIsList(false)

        elem1.classList.add("active-icon")
        elem2.classList.remove("active-icon")
        elem2.classList.add("not-active")
        elem1.classList.remove("not-active")

    }

    const gridClicked = () => {
        setIsList(true)
        elem2.classList.add("active")
        elem1.classList.remove("active")
        elem1.classList.add("not-active")
        elem2.classList.remove("not-active")
    }

    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: '가격 낮은 순',
                    key: '1',
                },
                {
                    label: '가격 낮은 순',
                    key: '2',
                },
                {
                    label: 'ID 낮은 순',
                    key: '3',
                },
                {
                    label: 'ID 낮은 순',
                    key: '4',
                },
            ]}
        />
    );

    const LowerComponent = () => {
        return (
            <div className="lower-comp" style={{ backgroundColor: `${theme.background}` }}>
                <div className="lower-first">
                    <Input placeholder="찾으시는 NFT를 검색하세요" style={{ color: `${theme.color},`, marginTop: "20px", width: "40%px" }} prefix={<SearchOutlined />} />
                    <div style={{ display: "flex", marginTop: "10px", flexWrap: "wrap" }}>
                        <Button className="blue-border _0marginbtn _17hor" id='btn1' style={{ marginTop: "10px" }}>#서머</Button>
                        <Button className="blue-border _0marginbtn _17hor" id='btn2' style={{ marginTop: "10px" }}>#스웨터</Button>
                        <Button className="blue-border _0marginbtn _17hor" id='btn3' style={{ marginTop: "10px" }}>#가을</Button>
                        <Button className="blue-border _0marginbtn _17hor" id='btn4' style={{ marginTop: "10px" }}>#티셔츠</Button>
                    </div>
                </div>
                <div className="lower-second">
                    <div className="fonts-16 fontw-700" style={{ color: `${theme.color === "white" ? "white" : "#03041C"}`, marginTop: "20px", }}>1,000 아이템</div>
                    <Dropdown overlay={menu} className="lower-each">
                        <Button className="dropdown-btn fonts-16 fontw-700" style={{ marginTop: "20px", }}>
                            <Space>가격 낮은 순
                                <MdKeyboardArrowDown size={30} />
                            </Space>
                        </Button>
                    </Dropdown>
                    <div className="d-flex">
                        <div className={`click-icon ${!isList ? "active-icon" : "not-active"}`} id="list" onClick={listClicked} style={{ marginTop: "20px", }}>
                            <BsFillGrid3X3GapFill />
                        </div>
                        <div className={`click-icon ${isList ? "active-icon" : "not-active"}`} id="grid" onClick={gridClicked} style={{ marginTop: "20px", }}>
                            <BsGridFill />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            <div className="black-blank">
                <Link href="/fdDesignerEdit">
                    <span className="designer-profile-container">
                        <Image width="152" height="152" src={ProfileImg} alt="profileimg" className="designer-profile" />
                    </span>
                </Link>
            </div>
            <div className="collection-all">
                <div className="common-comp">


                    <div className="upper-comp">
                        <div>
                            <div className="fontw-700 fonts-30" style={{ marginTop: "10px" }}>Designer Name <MdVerified className="color-blue" size={15} /></div>
                            <div className="grey-dark fonts-14 fontw-500">0xF0...As33B4cB</div>
                            <div className="grey-dark fonts-16 fontw-700" style={{ marginTop: "5px" }}>디자이너 / 콜렉션 설명이 들어가는 부분 Lorem ipsum dolor sit amet, consectetur adipiscing elitonsectetur adipisc ...</div>
                            <div className="color-blue fonts-16 fontw-500">더보기 <MdKeyboardArrowDown /></div>

                            <div style={{ display: "flex", margin: "20px 0", flexWrap: "wrap" }}>
                                <div className="marginright20">
                                    <div className="grey-text fonts-16 fontw-500">아이템</div>
                                    <div className="fontw-700 fonts-20">1K</div>
                                </div>
                                <div className="marginright20">
                                    <div className="grey-text fonts-16 fontw-500">소유자</div>
                                    <div className="fontw-700 fonts-20">561</div>
                                </div>
                                <div className="marginright20">
                                    <div className="grey-text fonts-16 fontw-500">최저 거래가</div>
                                    <div className="lower-first-row" ><Image width="16px" height="16px" src={BlueIcon} alt="blueicon" style={{ display: 'inline-block' }} /> 1,366</div>
                                </div>
                                <div className="marginright20">
                                    <div className="grey-text fonts-16 fontw-500">거래량</div>
                                    <div className="lower-first-row"><Image width="16px" height="16px" src={BlueIcon} alt="blueicon" style={{ display: 'inline-block' }} />  2,566</div>
                                </div>
                            </div>
                        </div>
                        <div className="grey-dark upper-right">
                            <a href="#"><TbWorld className="marginright grey-dark " size={20} /></a>
                            <a href="#"><FaTelegramPlane className="marginright grey-dark" size={20} /></a>
                            <a href="#"><RiInstagramFill className="marginright grey-dark" size={20} /></a>
                            <a href="#"><SiDiscord className="marginright grey-dark" size={20} /></a>
                            <a href="#"><RiTwitterFill className="marginright grey-dark" size={20} /></a>
                            <a href="#"><RiKakaoTalkFill className="marginright grey-dark" size={20} /></a> <span className="marginright">|</span>
                            <a href="#"><RiShareFill className="marginright grey-dark" size={20} /></a>
                        </div>
                    </div>

                </div>
                <br />
                <Tabs defaultActiveKey="1">
                    <Tab eventKey="1" title="아이템">
                        <LowerComponent />
                        {
                            isList ?
                                <ListView />
                                :
                                <GridView />
                        }
                    </Tab>
                    <Tab eventKey="2" title="거래내역">
                        <LowerComponent />
                        {
                            isList ?
                                <ListView />
                                :
                                <GridView />
                        }
                    </Tab>
                </Tabs>

            </div>
        </Fragment>
    );
}

export default CollectionDetail