import "./Dashboard.scss";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <input type="text" name="search" placeholder="Search"/>
      <h1>Good Morning, Paul</h1>
      <ul>
        <li>
          <Link to="/banking">Banking</Link>
        </li>
        <li>
          <Link to="/medical">Medical</Link>
        </li>
        <li>
          <Link to="/estate">Estate</Link>
        </li>
        <li>
          <Link to="/passwords">Passwords</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
