import { Fragment } from "react"
import { Button } from "antd"
import footerLogo from "../../../images/footerLogo.png"
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiPhoneLine, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import Image from "next/image"

const FooterComponent = () => {
    return (
        <Fragment>
            <div className='main-comp'>
                <div className="footer-upper">
                    <div className='footer-left'>
                        <div className="grey-dark">
                            1200명의 디자이너가 선택한 플랫폼 Clovers
                        </div>
                        <br />
                        <div className="color-white fontw-700 fonts-20">
                            FD Collection 입점을 통해
                        </div>
                        <div className="color-white fontw-700">
                            Clovers와 함께 더욱 성장해 보세요!
                        </div>
                    </div>
                    <div className='footer-right'>
                        <Button>FD Collection 입점 문의하기</Button>
                    </div>
                </div>
                <div className="d-none d-lg-block footer-lower">
                    <div className="lower-1">
                        <div className="flex50">
                            <div className="topic">
                                <Image src={footerLogo} width="80px" height="60px" alt="Logo" className="Logo" />
                            </div>
                            <div className="fonts-13 point-wise">Lorem ipsum dolor sit amett consectuuuuuuuer adipisiciogn</div>
                            <div className="point-wise color-blue" style={{ marginTop: "8px", display: "flex", gap: "10%" }}><RiFacebookFill /> <RiTwitterFill /> <RiInstagramFill /> <RiLinkedinFill /> <RiYoutubeFill /></div>
                        </div>
                        <div className="flex50">
                            <div className="topic fontw-700 fonts-19-6">Product</div>
                            <div className="fonts-13">
                                <div className="point-wise">Features</div>
                                <div className="point-wise">Pricing</div>
                                <div className="point-wise">Case Studies</div>
                                <div className="point-wise">Reviews</div>
                                <div className="point-wise">Updates</div>
                            </div>
                        </div>
                        <div className="flex50">
                            <div className="topic fontw-700 fonts-19-6">Company</div>
                            <div className="fonts-13">
                                <div className="point-wise">About</div>
                                <div className="point-wise">Contact us</div>
                                <div className="point-wise">Careers</div>
                                <div className="point-wise">Culture</div>
                                <div className="point-wise">Blog</div>
                            </div>
                        </div>
                        <div className="flex50">
                            <div className="topic fontw-700 fonts-19-6">Support</div>
                            <div className="fonts-13">
                                <div className="point-wise">Getting started</div>
                                <div className="point-wise">Help center</div>
                                <div className="point-wise">Server status</div>
                                <div className="point-wise">Report a bug</div>
                                <div className="point-wise">Chat support</div>
                            </div>
                        </div>
                        <div className="flex50">
                            <div className="topic fontw-700 fonts-19-6">Contact us</div>
                            <div className="fonts-13">
                                <div className="point-wise"><HiOutlineMail /> contact@company.com</div>
                                <div className="point-wise"><RiPhoneLine /> (414)687-5892</div>
                                <div className="point-wise"><HiOutlineLocationMarker /> 794 Mcallister St San Fransisco, 94102</div>
                            </div>
                        </div>
                    </div>

                    <div className="lower-second-comp">
                        <hr />
                        <div className="lower-2">
                            <div className="point-wise fonts-13">Copyright &copy; 2022 BRIX Templates</div>
                            <div className="point-wise fonts-13 second-row">All Rights Reserved | <span className="underline-text">Terms and Conditions</span> | <span className="underline-text">Privacy Policy</span></div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default FooterComponent