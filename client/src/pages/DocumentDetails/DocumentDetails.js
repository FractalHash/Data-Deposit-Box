import React from 'react';

const DocumentDetails = () => {
  return (
    <section className='document-details'>
      <div>
        <h1>Medical History Document</h1>
        <input type="text" name="search" placeholder="Search" />
      </div>
      <article>
        <img />
        <div>
          <h3>Paul Lewis</h3>
          <p>Subhead</p>
        </div>
        <h2>Patient Medical History</h2>
        <ul>
          <h3>Personal Information:</h3>
          <li>Name: Paul Lewis</li>
          <li>Date of Birth: 25/05/1976</li>
          <li>Gender: Male</li>
          <li>Contact Number: (555) 123-4567</li>
          <li>Email Address: paullewis@email.com</li>
        </ul>
        <ul>
          <h3>Medical History:</h3>
          <li>Current Medications: Lisinopril</li>
          <li>Allergies: Penicillin</li>
          <li>Previous surgeries: Appendectomies (2010)</li>
          <li>Chronic Conditions: Hypertension</li>
          <li>Family Medical History: Heart Disease, Diabetes</li>
        </ul>
        <ul>
          <h3>Vaccination History:</h3>
          <li>Other vaccinations: Tetanus, Influenza</li>
        </ul>
        <ul>
          <h3>Additional Information:</h3>
          <li>Preferred pharmacy: ABC pharmacy</li>
          <li>Emergency Contact: Jane Smith (sister), (555) 978-6453</li>
          <li>Insurance Information: XYZ Insurance, Policy #12345</li>
        </ul>
      </article>
      <div>
        <button>DELETE</button>
        <button>SHARE</button>
        <button>DOWNLOAD</button>
      </div>
    </section>
  );
};

export default DocumentDetails;