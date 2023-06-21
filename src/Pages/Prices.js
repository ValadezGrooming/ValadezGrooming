import React from 'react'
import './Pages.css'
import {Link} from 'react-router-dom'

export default function Prices() {
  return (
    <div className='page-div'>
      <section>
        <p className='sec-header'>
            Base Pricing
        </p>
        <p>
          Prices for your dog depend on their size and what services you need for your pup shown in the chart below. A bath includes nail triming, and a full groom is a hair cut, bath, and nail trim.  
        </p>
      </section>
      <PriceTable/>
      <section>
        <p className='sec-header'>
          Fees
        </p>
        <p>
          Some additional fees may also apply to your dog as well, listed below.
        </p>
      </section>
      <FeeTable/>
      <section>
        <p className='sec-header'>
          Questions?
        </p>
        <p>
          Reach out to us on the <Link to="/booking">Booking</Link> page and we can answer any questions you have.
        </p>
      </section>

  </div>
  )
}
function PriceTable(){
  return(
    <div className='price-table-div'>
      <table className='price-table'>
        <tr>
          <th>Size</th>
          <th>Service</th>
          <th>Price</th>
        </tr>
        <tr>
          <td className='small'>Small &lt; 20lb</td>
          <td>Nail Trim</td>
          <td>$70</td>
        </tr>
        <tr>
          <td className='small'>Small &lt; 20lb</td>
          <td>Bath</td>
          <td>$110</td>
        </tr>
        <tr>
          <td className='small'>Small &lt; 20lb</td>
          <td>Full Groom</td>
          <td>$135</td>
        </tr>
        <tr>
          <td className='medium'>Medium &lt; 45lb</td>
          <td>Nail Trim</td>
          <td>$70</td>
        </tr>
        <tr>
          <td className='medium'>Medium &lt; 45lb</td>
          <td>Bath</td>
          <td>$130</td>
        </tr>
        <tr>
          <td className='medium'>Medium &lt; 45lb</td>
          <td>Full Groom</td>
          <td>$155</td>
        </tr>
      </table>
  </div>
  )
}
function FeeTable(){
  return(
    <div className='price-table-div'>
      <table className='price-table'>
        <tr>
          <th>Fee Type</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>De-Matting</td>
          <td>If extra work is needed to untangle matting</td>
          <td>$20</td>
        </tr>
        <tr>
          <td>Non Standing</td>
          <td>If you dog can't stand for grooming either do to behavioral issues or health issues extra care and time will be needed to groom them</td>
          <td>$15</td>
        </tr>
        <tr>
          <td>Labor Intensive Breed</td>
          <td>Some breeds such as Poodles, Shih Tzu, or Komondor require extra work to groom</td>
          <td>$25</td>
        </tr>
      </table>
    </div>
  )
}