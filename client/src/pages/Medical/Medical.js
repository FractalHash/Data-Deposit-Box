import React from 'react';
import { Link } from 'react-router-dom';
import './Medical.scss'

const Medical = () => {
  return (
    <section className='medical'>
      <div className='medical__top-container'>
        <h1 className='medical__title'>Medical</h1>
        <input className='medical__search' type="text" name="search" placeholder="Search" />
        <h3 className='medical__categories'>Categories</h3>
      </div>
      <article className='medical__row-container'>
        <div className='medical__row'>
          <Link to='/securityform'>
            <h3 className='medical__row-title'>MEDICAL HISTORY DOCUMENT</h3>
          </Link>
          <p className='medical__row-subhead'>Subhead</p>
        </div>
        <div className='medical__row'>
          <h3 className='medical__row-title'>VIEW REPORTS</h3>
          <p className='medical__row-subhead'>Subhead</p>
        </div>
        <div className='medical__row'>
          <h3 className='medical__row-title'>PAST MEDICAL REPORTS</h3>
          <p className='medical__row-subhead'>Subhead</p>
        </div>
        <div className='medical__row'>
          <h3 className='medical__row-title'>PRESCRIPTIONS</h3>
          <p className='medical__row-subhead'>Subhead</p>
        </div>
      </article>
    </section>
  );
};

export default Medical;