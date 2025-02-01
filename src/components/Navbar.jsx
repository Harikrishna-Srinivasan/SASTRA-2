import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<nav>
			<ul>
				<li id="home"><Link to="/">Home</Link></li>
				<li id="about"><Link to="/about">About</Link></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			<hr/>
		</nav>
	);
}

export default Navbar;
