import React from 'react';
import { Link } from 'react-router-dom';

const Medical = () => {
  return (
    <section className='medical'>
      <div>
        <h1>Medical</h1>
        <input type="text" name="search" placeholder="Search" />
        <h3>Categories</h3>
      </div>
      <article>
        <Link to='/document-details'>
          <h3>MEDICAL HISTORY DOCUMENT</h3>
        </Link>
        <p>Subhead</p>
      </article>
      <article>
        <h3>VIEW REPORTS</h3>
        <p>Subhead</p>
      </article>
      <article>
        <h3>PAST MEDICAL REPORTS</h3>
        <p>Subhead</p>
      </article>
      <article>
        <h3>PRESCRIPTIONS</h3>
        <p>Subhead</p>
      </article>
    </section>
  );
};

export default Medical;