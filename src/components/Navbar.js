import { Link } from 'react-router-dom';

const Navbar = () => (
  <main className="row navbar">
    <h1>Math Magicians</h1>
    <ul className="row">
      <li><Link to="/" className="nav-btns">Home</Link></li>
      <li><Link to="/calculator" className="nav-btns">Calculator</Link></li>
      <li><Link to="/quote" className="nav-btns">Quotes</Link></li>
    </ul>
  </main>
);

export default Navbar;
