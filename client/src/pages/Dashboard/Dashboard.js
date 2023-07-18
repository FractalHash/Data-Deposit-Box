import "./Dashboard.scss";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2 className="btn btn-heading">Dashboard</h2>
      <input className="medical__search dashboard" type="text" name="search" placeholder="Search"/>
      <h1 className="dashboard-text">Good Morning, John</h1>
      <ul>
        <li className='medical__row boom'>
          <Link className="bap" to="/banking">Banking</Link>
        </li>
        <li className='medical__row boom'>
          <Link className="bap" to="/medical">Medical</Link>
        </li>
        <li className='medical__row boom'>
          <Link className="bap" to="/estate">Estate</Link>
        </li>
        <li className='medical__row boom'>
          <Link className="bap" to="/passwords">Passwords</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
