const Description = () => {
  return (
    <div className="accordion" id="accordionExample" style={{ marginBottom: "20px" }}>
      <div className="accordion-item">
        <h2 className="accordion-header" id="header-head">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Description
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body black-color-text" style={{ backgroundColor: "#FBFBFB" }}>
            <div className='fonts-16 fontw-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className='fonts-16 fontw-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className='fonts-16 fontw-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className='fonts-16 fontw-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className='fonts-16 fontw-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className='fonts-16 fontw-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description