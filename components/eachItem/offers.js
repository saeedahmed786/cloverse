import Image from 'next/image'
import { Table } from 'react-bootstrap'
import BlueIcon from '../../images/blueicon.png'

const Offers = () => {
  return (
    <div className="accordion offers" id="accordionExample" style={{ marginBottom: "20px" }}>
      <div className="accordion-item">
        <h2 className="accordion-header" id="header-head">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
            Offers
          </button>
        </h2>
        <div id="collapse4" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body black-color-text" style={{ backgroundColor: "#FBFBFB" }}>
            <Table responsive style={{ marginBottom: "0px" }}>
              <thead id='header-head0'>
                <tr>
                  <th className='fontw-500 fonts-16px grey-dark'>From</th>
                  <th className='fontw-500 fonts-16px grey-dark'>Expiration</th>
                  <th className='fontw-500 fonts-16px grey-dark'>Price</th>
                  <th className='fontw-500 fonts-16px grey-dark'>Floor Difference</th>
                </tr>
              </thead>
              <tbody id='header-body4' className='fontw-500 fonts-16 black-color-text'>
                <tr>
                  <td className="">RAF193</td>
                  <td>about 24 hours</td>
                  <td><Image width="16px" height="16px" src={BlueIcon} alt="blue-icon" style={{ display: "inline-block" }} />1,234</td>
                  <td>7% below</td>
                </tr>
                <tr>
                  <td>RAF193</td>
                  <td>about 24 hours</td>
                  <td><Image width="16px" height="16px" src={BlueIcon} alt="blue-icon" style={{ display: "inline-block" }} />1,234</td>
                  <td>7% below</td>
                </tr>
                <tr>
                  <td>RAF193</td>
                  <td>about 24 hours</td>
                  <td><Image width="16px" height="16px" src={BlueIcon} alt="blue-icon" style={{ display: "inline-block" }} />1,234</td>
                  <td>7% below</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers