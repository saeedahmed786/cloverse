const NFTDetail = () => {

    return (
        <div className="accordion" id="accordionExample" style={{ marginBottom: "20px" }}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="header-head">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                        NFT Detail
                    </button>
                </h2>
                <div id="collapse3" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body black-color-text" style={{ backgroundColor: "#FBFBFB" }}>
                        <div className='borderbottom'>
                            <div className='gridbox '>
                                <div className='fontw-500 fonts-16'>Contact Address</div>
                                <div className='right0 fontw-500 fonts-16 padding10' style={{ textAlign: "center" }}>sd43efnfkghl4kdfgk53f</div>
                            </div>
                        </div>
                        <div className='borderbottom'>
                            <div className='gridbox'>
                                <div className='fontw-500 fonts-16'>Token ID</div>
                                <div className='right0 padding10 fontw-500 fonts-16'>712</div>
                            </div>
                        </div>
                        <div className='borderbottom'>
                            <div className='gridbox'>
                                <div className='fontw-500 fonts-16'>Token Standard</div>
                                <div className='right0 padding10 fontw-500 fonts-16'>ERC-712</div>
                            </div>
                        </div>
                        <div className='gridbox'>
                            <div className='fontw-500 fonts-16'>Block Chain</div>
                            <div className='right0 padding10 fontw-500 fonts-16'>Klaytn</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTDetail