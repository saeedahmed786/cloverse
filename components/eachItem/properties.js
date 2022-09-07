const Properties = () => {
    const Box = ({ title, name, desc, id }) => {
        return (
            <div className='props-box' id={`_${id}props-body`}>
                <div className='color-blue fonts-16 fontw-500'>{title}</div>
                <div className='fontw-500 fonts-16 black-color-text' id={`_${id}name`}>{name}</div>
                <div className='grey-dark fontw-500 fonts-16'>{desc}</div>
            </div>
        )
    }
    return (
        <div className="accordion" id="accordionExample" style={{ marginBottom: "20px" }}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="header-head">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                        Properties
                    </button>
                </h2>
                <div id="collapse5" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body black-color-text" style={{ backgroundColor: "#FBFBFB" }}>
                        <div className='gridgreyborderbox'>
                            <Box title="Rarity" name="Normal Box" desc="99.04% have this trait" id={1} />
                            <Box title="Shoe Box Type" name="Plastic Blue" desc="99.04% have this trait" id={2} />
                            <Box title="Genesis" name="GO" desc="99.04% have this trait" id={3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Properties