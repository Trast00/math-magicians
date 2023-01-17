import { Link } from "react-router-dom";

const Navbar = () => {
  //const home = useLoaderData()
  return (
    <main className="navbar">
      <h1>Math Magicians</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quotes</Link></li>
      </ul>
    </main>
  )
}

export default Navbar;
