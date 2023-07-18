import React from 'react';
import './Confirmation.scss'
import checkMark from '../../assets/icons/check.png'

const Confirmation = () => {
  return (
    <section className='confirmation'>
      <div>
        <h1>Medical</h1>
        <input type="text" name="search" placeholder="Search" />
        <h3>Confirmation</h3>
      </div>
      <div>
        <p>Your Documents have been received by Bonafide Medical.</p>
        <p>Confirmation of successful delviery</p>
        <img src={checkMark} />
        <p>To remove document access, delete clinic from medical page</p>
      </div>
      <div>
        <button>Cancel</button>
        <button>Continue</button>
      </div>
    </section>
  );
};

export default Confirmation;