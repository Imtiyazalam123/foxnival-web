
import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import imagees from './img/homepage.png'
import InquiryForm from './InquiryForm';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='float-start col-lg-10 mt-3 text-start'>
          <h3 className='text-warning fst-italic fw-bolder'>Foxnival</h3>
          <p className='mb-0 pb-0 fst-italic'>
            Foxnival is a San Francisco-based Consulting Firm that has been helping businesses across industries since 2000.
            Our expertise in marketing strategies and successful sales, Combined with our flexible website, sets us apart in
            sales tracking and progress visualization. We will create a unique plan to address your company's strenghts, weaknessses,
            and opportunities. Together, We'll help you keep your business competitive, successful, and growth-oriented.
          </p>
        </div>
        <div className='float-end mt-3 col-lg-2 m-0 p-0'>
          <Link to = '/login' className='btn btn-success float-end'>Login</Link>
        </div>
      </div>


      <div className='col-lg-3 d-inline-block float-start text-start inquiry_form_style ml-0 pl-0'>
        <p className='fw-bolder'>
          For more information please fill the below inquiry form.
        </p>
        <InquiryForm />
      </div>
      <div className='subcription_style col-lg-2'>
        <section className='text-start fw-bolder' style={{ maxWidth: 200 }}>
          Want to Enhance your
          Marketing Support
          System & Boost up
          Your Business ?  <br />
          Rs. 1.00 for 1 year service <br />
          <Link to = "/subscribe" className="btn btn-success mt-2 button_style">Subscribe now </Link>
        </section>
      </div>
      <div className='col-lg-4 img_style' >
        <img src={imagees} alt='Image not loaded' style={{ maxWidth: 400 }} />
      </div>

    </div>
  )
}
