import { Link } from 'react-router-dom';
import logo from '../../assets/images/Vectorwhite.png';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className='landing-page__container'>
      <div className='logo__container'><img className='logo__container-logo' src={logo} alt='' /></div>
      <h1 className='landing-page__heading'>Data Deposit Box</h1>
      <p className='landing-page__text'>Safeguard Your Digital Universe with a single Tap</p>
      <button className='btn'>REGISTER</button>
      <p className='landing-page__subtext'>Aew you an existing user? <Link className='link' to={`/login`}>Login</Link></p>
    </div>
  );
};

export default LandingPage;