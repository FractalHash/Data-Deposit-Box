import React from 'react';
import './DocumentDetails.scss'

const DocumentDetails = () => {
  return (
    <section className='document-details'>
      <div className='document-details__top-container'>
        <h1 className='document-details__title'>Medical History Document</h1>
        <input className='document-details__search' type="text" name="search" placeholder="Search" />
      </div>
      <article className='document-details__info'>
        <img />
        <div className='document-details__info-top-container'>
          <h3 className='document-details__info-top-title'>Paul Lewis</h3>
          <p className='document-details__info-top-subhead'>Subhead</p>
        </div>
        <h2 className='document-details__info-title'>Patient Medical History</h2>
        <ul className='document-details__info-list'>
          <h3>Personal Information:</h3>
          <li>Name: Paul Lewis</li>
          <li>Date of Birth: 25/05/1976</li>
          <li>Gender: Male</li>
          <li>Contact Number: (555) 123-4567</li>
          <li>Email Address: paullewis@email.com</li>
        </ul>
        <ul className='document-details__info-list'>
          <h3>Medical History:</h3>
          <li>Current Medications: Lisinopril</li>
          <li>Allergies: Penicillin</li>
          <li>Previous surgeries: Appendectomies (2010)</li>
          <li>Chronic Conditions: Hypertension</li>
          <li>Family Medical History: Heart Disease, Diabetes</li>
        </ul>
        <ul className='document-details__info-list'>
          <h3>Vaccination History:</h3>
          <li>Other vaccinations: Tetanus, Influenza</li>
        </ul>
        <ul className='document-details__info-list'>
          <h3>Additional Information:</h3>
          <li>Preferred pharmacy: ABC pharmacy</li>
          <li>Emergency Contact: Jane Smith (sister), (555) 978-6453</li>
          <li>Insurance Information: XYZ Insurance, Policy #12345</li>
        </ul>
        <div className='document-details__btns'>
          <button className='document-details__btn'>DELETE</button>
          <button className='document-details__btn'>SHARE</button>
          <button className='document-details__btn document-details__btn-download'>DOWNLOAD</button>
        </div>
      </article>
    </section>
  );
};

export default DocumentDetails;