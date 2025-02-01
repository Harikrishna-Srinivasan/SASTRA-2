import "./Button.css";

function Button({text}, {type='text'}) {
	return (
		<button type={type}>{text}</button>
	)
}

export default Button;
