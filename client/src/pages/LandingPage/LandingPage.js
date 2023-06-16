import { Link } from 'react-router-dom';
import logo from '../../assets/images/Vectorwhite.png';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div>
      <div className='logo__container'><img src={logo} alt='' /></div>
      <h1>Data Deposit Box</h1>
      <p>Safeguard Your Digital Universe with a single Tap</p>
      <button>REGISTER</button>
      <p>Aew you an existing user? <Link to={`/login`}>Login</Link></p>
    </div>
  );
};

export default LandingPage;