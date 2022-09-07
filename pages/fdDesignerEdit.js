import { Fragment, useContext, useState } from "react";
import { MdKeyboardArrowDown, MdModeEdit } from "react-icons/md";
import { Dropdown, Input, Button, Menu, Space } from 'antd'
import { BsListUl, BsGridFill } from 'react-icons/bs'
import ProfileImg from '../images/profile.png'
import GridView from "../components/fddesigneredit/collection_grid";
import ListView from "../components/fddesigneredit/collection_list";
import { Tab, Tabs } from "react-bootstrap";
import { SearchOutlined } from '@ant-design/icons';
import { ThemeContext } from '../components/themeContext'
import Image from "next/image";

const FDDesignerEdit = () => {
    const [isList, setIsList] = useState(true)
    const theme = useContext(ThemeContext)
    const handleMenuClick = () => {
        console.log("Clicked")
    }

    var elem1 = typeof window !== "undefined" && document.getElementById("list")
    var elem2 = typeof window !== "undefined" && document.getElementById("grid")

    const listClicked = () => {
        setIsList(true)
        elem1.classList.add("active")
        elem2.classList.remove("active")
        elem2.classList.add("not-active")
        elem1.classList.remove("not-active")
    }

    const gridClicked = () => {
        setIsList(false)
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
                    <Input placeholder="찾으시는 NFT를 검색하세요" prefix={<SearchOutlined />} style={{ width: "300px", marginTop: "10px" }} />
                </div>
                <div className="lower-second">
                    <div className="fonts-16 fontw-700" style={{ color: `${theme.color === "white" ? "white" : "#03041C"}`, marginTop: "10px" }}>5 results</div>
                    <Dropdown overlay={menu} className="lower-each">
                        <Button className="dropdown-btn fonts-16 fontw-700" style={{ marginTop: "10px" }}>
                            <Space>
                                가격 낮은 순
                                <MdKeyboardArrowDown size={30} />
                            </Space>
                        </Button>
                    </Dropdown>
                    <div className="click-icon active margintop10" id="list" onClick={listClicked}>
                        <BsListUl />
                    </div>
                    <div className="click-icon not-active margintop10" id="grid" onClick={gridClicked}>
                        <BsGridFill />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            <div className="black-blank">
                <span className="designer-profile-container">
                    <Image width="152" height="152" src={ProfileImg} alt="profileimg" className="designer-profile" />
                </span>
            </div>
            <div className="collection-all">
                <div className="common-comp">

                    <div>
                        <div className="fontw-700 fonts-30" style={{ marginTop: "10px" }}>UserName <MdModeEdit className="color-blue" size={18} /></div>
                        <div className="grey-dark fontw-500 fonts-14">0xF0...As33B4cB</div>

                    </div>

                </div>
                <br />
                <Tabs defaultActiveKey="보유한">
                    <Tab eventKey="보유한" title="보유한">
                        <LowerComponent />
                        <ListView />
                    </Tab>
                    <Tab eventKey="제안한" title="제안한">
                        <LowerComponent />
                        <GridView />
                    </Tab>
                </Tabs>
            </div>
        </Fragment>
    );
}

export default FDDesignerEdit