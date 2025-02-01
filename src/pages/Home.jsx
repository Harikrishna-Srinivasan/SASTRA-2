import Button from "../components/Button";
import "./Home.css";

function Home() {
	return (
		<main>
			<h1>Welcome to the home page!</h1>
			<br/>
			<form action="/add/campus">
				<Button text="Add Campus"></Button>
			</form>
			<form action="/show/campus">
				<Button text="Show Campus"></Button>
			</form>
			<form action="/delete/campus">
				<Button text="Delete Campus"></Button>
			</form>
	  	</main>
	);
}

export default Home;
