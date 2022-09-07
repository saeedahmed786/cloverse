import ImageCard from './imagecard'
const MoreInCollection = (props) => {

  return (
    <div className="accordion moreCollections" id="accordionExample" style={{ marginBottom: "20px" }}>
      <div className="accordion-item">
        <h2 className="accordion-header" id="header-head">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
            Properties
          </button>
        </h2>
        <div id="collapse6" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body black-color-text" style={{ backgroundColor: "#FBFBFB" }}>
            <div className='collection-five'>
              <ImageCard image={props.image} sn={1} />
              <ImageCard image={props.image} sn={2} />
              <ImageCard image={props.image} sn={3} />
              <ImageCard image={props.image} sn={4} />
              <ImageCard image={props.image} sn={5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreInCollection